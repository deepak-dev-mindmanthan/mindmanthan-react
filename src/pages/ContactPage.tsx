import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { submitContactForm } from '../services/apiService';

interface ContactPageProps {
  onBackHome?: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBackHome }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

    // Phone number specific validation
    if (name === 'phone') {
      const sanitizedValue = value.replace(/[^0-9+\-() ]/g, '');
      setFormData((prev) => ({
        ...prev,
        [name]: sanitizedValue
      }));
      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

    if (!formData.name.trim()) errors.name = 'Full name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus({ type: 'error', message: 'Please correct the highlighted errors.' });
      return;
    }

    setStatus({ type: 'loading', message: 'Sending your message...' });
    
    try {
      await submitContactForm({
        ...formData,
        formType: 'contact_page'
      });
      
      setStatus({ 
        type: 'success', 
        message: 'Thank you! Your message has been sent successfully.' 
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setFieldErrors({});

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: 'idle', message: '' });
      }, 5000);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Something went wrong. Please try again later.';
      setStatus({ 
        type: 'error', 
        message: errorMessage
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: SITE_CONFIG.business.email,
      link: SITE_CONFIG.business.emailHref
    },
    {
      icon: Phone,
      title: 'Phone',
      value: SITE_CONFIG.business.phone,
      link: `tel:${SITE_CONFIG.business.phoneHref}`
    },
    {
      icon: MapPin,
      title: 'Address',
      value: SITE_CONFIG.business.addressLine,
      link: '#'
    }
  ];

  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#f4f7ff] to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#010417] mb-6 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? We'd love to hear from you. Contact our team and let's discuss how we can help transform your business.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.link}
                  className="group p-8 rounded-2xl border border-gray-200 hover:border-[#001fcc] hover:bg-[#f4f7ff] transition-all duration-300 bg-white"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-8 h-8 text-[#001fcc] group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#010417] mb-2">{info.title}</h3>
                      <p className="text-gray-600 group-hover:text-[#001fcc] transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-[#f4f7ff] to-white p-10 rounded-3xl border border-gray-200">
              <h2 className="text-3xl md:text-4xl font-black text-[#010417] mb-8">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-[#010417] mb-2">
                      Full Name
                    </label>
                    <input aria-label="Form field"
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001fcc] focus:border-transparent transition ${fieldErrors.name ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {fieldErrors.name && <p className="text-red-500 text-xs mt-1 font-bold">{fieldErrors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-[#010417] mb-2">
                      Email Address
                    </label>
                    <input aria-label="Form field"
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001fcc] focus:border-transparent transition ${fieldErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {fieldErrors.email && <p className="text-red-500 text-xs mt-1 font-bold">{fieldErrors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-[#010417] mb-2">
                    Phone Number
                  </label>
                  <input aria-label="Form field"
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 XXXXX XXXXX"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001fcc] focus:border-transparent transition ${fieldErrors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {fieldErrors.phone && <p className="text-red-500 text-xs mt-1 font-bold">{fieldErrors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-[#010417] mb-2">
                    Subject
                  </label>
                  <input aria-label="Form field"
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is this about?"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001fcc] focus:border-transparent transition ${fieldErrors.subject ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {fieldErrors.subject && <p className="text-red-500 text-xs mt-1 font-bold">{fieldErrors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-[#010417] mb-2">
                    Message
                  </label>
                  <textarea aria-label="Form message"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project..."
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001fcc] focus:border-transparent transition resize-none ${fieldErrors.message ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {fieldErrors.message && <p className="text-red-500 text-xs mt-1 font-bold">{fieldErrors.message}</p>}
                </div>

                {status.type !== 'idle' && (
                  <div className={`p-4 rounded-lg flex items-center gap-3 ${
                    status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' :
                    status.type === 'error' ? 'bg-red-50 text-red-700 border border-red-200' :
                    'bg-blue-50 text-blue-700 border border-blue-200'
                  }`}>
                    {status.type === 'success' && <CheckCircle2 size={20} />}
                    {status.type === 'error' && <AlertCircle size={20} />}
                    {status.type === 'loading' && <Loader2 size={20} className="animate-spin" />}
                    <p className="text-sm font-medium">{status.message}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className={`w-full text-white px-8 py-4 rounded-lg font-bold text-lg transition-all active:scale-95 flex items-center justify-center gap-2 ${
                    status.type === 'loading' ? 'bg-blue-400 cursor-not-allowed' : 'bg-[#001fcc] hover:bg-[#0015a8]'
                  }`}
                >
                  {status.type === 'loading' ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#001fcc] to-[#0015a8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team is ready to help you build something amazing. Let's work together to achieve your goals.
          </p>
          <button
            onClick={onBackHome}
            className="bg-white text-[#001fcc] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all active:scale-95"
          >
            Explore Our Services
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

