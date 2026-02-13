import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@mindmanthansoftwaresolutions.com',
      link: 'mailto:info@mindmanthansoftwaresolutions.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 70115 02461',
      link: 'tel:+917011502461'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'A90, A Block, Sector 4, Noida, Uttar Pradesh 201301',
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001fcc] focus:border-transparent transition"
                      required
                    />
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001fcc] focus:border-transparent transition"
                      required
                    />
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001fcc] focus:border-transparent transition"
                  />
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001fcc] focus:border-transparent transition"
                    required
                  />
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001fcc] focus:border-transparent transition resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#001fcc] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#0015a8] transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
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

