import React, { useState } from 'react';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { submitContactForm } from '../services/apiService';

interface CommonContactFormProps {
  formType: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  showPlatformType?: boolean;
  showCompanyName?: boolean;
  showFirstLastName?: boolean;
  showServiceInterest?: boolean;
  selectLabel?: string;
  selectName?: string;
  selectOptions?: string[];
}

const CommonContactForm: React.FC<CommonContactFormProps> = ({
  formType,
  title = "Start Your Project",
  subtitle = "Tell us about your project requirements.",
  buttonText = "Send Request",
  showPlatformType = false,
  showCompanyName = true,
  showFirstLastName = false,
  showServiceInterest = false,
  selectLabel = "Platform Type",
  selectName = "platformType",
  selectOptions = [
    "SaaS Development",
    "Custom CMS / Portal",
    "E-commerce Solution",
    "Internal Business Tool",
    "Other Web Platform"
  ]
}) => {
  const [formData, setFormData] = useState<Record<string, string>>({
    name: '',
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    platformType: '',
    serviceInterest: '',
    message: ''
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

    // Phone number specific validation: only allow numbers, spaces, and common symbols during typing
    if (name === 'phone') {
      const sanitizedValue = value.replace(/[^0-9+\-() ]/g, '');
      setFormData((prev) => ({
        ...prev,
        [name]: sanitizedValue
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

    if (formData.phone && !phoneRegex.test(formData.phone)) {
      errors.phone = 'Please enter a valid phone number (digits and common symbols only).';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus({ type: 'error', message: 'Please fix the errors in the form.' });
      return;
    }

    setStatus({ type: 'loading', message: 'Sending...' });

    try {
      await submitContactForm({
        ...formData,
        formType: formType
      });

      setStatus({ 
        type: 'success', 
        message: 'Your message has been sent successfully!' 
      });

      setFormData({
        name: '',
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        platformType: '',
        serviceInterest: '',
        message: ''
      });
      setFieldErrors({});

      setTimeout(() => setStatus({ type: 'idle', message: '' }), 5000);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to send request. Please try again.';
      setStatus({ 
        type: 'error', 
        message: errorMessage
      });
    }
  };

  return (
    <div className="bg-white p-8 md:p-12">
      <div className="text-center mb-10">
        <h3 className="text-[#1a1b1f] text-3xl font-black mb-2 tracking-tighter">{title}</h3>
        {subtitle && <p className="text-gray-500 mb-6">{subtitle}</p>}
        <div className="flex justify-center">
          <div className="w-16 h-1 bg-[#001fcc] rounded-full"></div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {showFirstLastName ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2">First name</label>
              <input required name="firstName" value={formData.firstName} onChange={handleInputChange} aria-label="First name" type="text" minLength={2} maxLength={50} className={`w-full px-5 py-4 bg-[#f8fafc] border-none rounded-xl focus:ring-2 focus:ring-[#001fcc] outline-none transition-all font-bold ${fieldErrors.firstName ? 'ring-2 ring-red-500' : ''}`} placeholder="John" />
              {fieldErrors.firstName && <span className="text-red-500 text-xs mt-1 font-bold">{fieldErrors.firstName}</span>}
            </div>
            <div>
              <label className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2">Last name</label>
              <input required name="lastName" value={formData.lastName} onChange={handleInputChange} aria-label="Last name" type="text" minLength={2} maxLength={50} className={`w-full px-5 py-4 bg-[#f8fafc] border-none rounded-xl focus:ring-2 focus:ring-[#001fcc] outline-none transition-all font-bold ${fieldErrors.lastName ? 'ring-2 ring-red-500' : ''}`} placeholder="Doe" />
              {fieldErrors.lastName && <span className="text-red-500 text-xs mt-1 font-bold">{fieldErrors.lastName}</span>}
            </div>
          </div>
        ) : (
          <div>
            <label className="block text-[13px] font-bold text-gray-600 uppercase tracking-widest mb-2">Your Name</label>
            <input required name="name" value={formData.name} onChange={handleInputChange} aria-label="Your Name" type="text" minLength={2} maxLength={100} className={`w-full px-5 py-4 bg-white border border-gray-200 rounded-lg focus:border-[#001fcc] focus:ring-1 focus:ring-[#001fcc] outline-none transition-all ${fieldErrors.name ? 'border-red-500' : ''}`} placeholder="Your name" />
            {fieldErrors.name && <span className="text-red-500 text-xs mt-1 font-bold">{fieldErrors.name}</span>}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {showCompanyName && (
            <div>
              <label className="block text-[13px] font-bold text-gray-600 uppercase tracking-widest mb-2">Company Name</label>
              <input name="company" value={formData.company} onChange={handleInputChange} aria-label="Company Name" type="text" minLength={2} maxLength={200} className="w-full px-5 py-4 bg-white border border-gray-200 rounded-lg focus:border-[#001fcc] focus:ring-1 focus:ring-[#001fcc] outline-none transition-all" placeholder="Organization name" />
            </div>
          )}
          <div className={showCompanyName ? "" : "col-span-2"}>
            <label className="block text-[13px] font-bold text-gray-600 uppercase tracking-widest mb-2">Email Address</label>
            <input required name="email" value={formData.email} onChange={handleInputChange} aria-label="Email Address" type="email" className={`w-full px-5 py-4 bg-white border border-gray-200 rounded-lg focus:border-[#001fcc] focus:ring-1 focus:ring-[#001fcc] outline-none transition-all ${fieldErrors.email ? 'border-red-500' : ''}`} placeholder="your@email.com" />
            {fieldErrors.email && <span className="text-red-500 text-xs mt-1 font-bold">{fieldErrors.email}</span>}
          </div>
        </div>

        <div>
          <label className="block text-[13px] font-bold text-gray-600 uppercase tracking-widest mb-2">Phone (Optional)</label>
          <input name="phone" value={formData.phone} onChange={handleInputChange} aria-label="Phone" type="tel" className={`w-full px-5 py-4 bg-white border border-gray-200 rounded-lg focus:border-[#001fcc] focus:ring-1 focus:ring-[#001fcc] outline-none transition-all ${fieldErrors.phone ? 'border-red-500' : ''}`} placeholder="+1 (555) 000-0000" />
          {fieldErrors.phone && <span className="text-red-500 text-xs mt-1 font-bold">{fieldErrors.phone}</span>}
        </div>

        {(showPlatformType || showServiceInterest) && (
          <div>
            <label className="block text-[13px] font-bold text-gray-600 uppercase tracking-widest mb-2">{selectLabel}</label>
            <select 
              required
              name={selectName} 
              value={formData[selectName]} 
              onChange={handleInputChange} 
              aria-label={selectLabel} 
              className={`w-full px-5 py-4 bg-white border border-gray-200 rounded-lg focus:border-[#001fcc] focus:ring-1 focus:ring-[#001fcc] outline-none transition-all appearance-none cursor-pointer ${fieldErrors[selectName] ? 'border-red-500' : ''}`}
            >
              <option value="">Select Option</option>
              {selectOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            {fieldErrors[selectName] && <span className="text-red-500 text-xs mt-1 font-bold">{fieldErrors[selectName]}</span>}
          </div>
        )}

        <div>
          <label className="block text-[13px] font-bold text-gray-600 uppercase tracking-widest mb-2">Message</label>
          <textarea required name="message" value={formData.message} onChange={handleInputChange} aria-label="Message" rows={4} minLength={10} maxLength={5000} placeholder="Describe your requirements..." className={`w-full px-5 py-4 bg-white border border-gray-200 rounded-lg focus:border-[#001fcc] focus:ring-1 focus:ring-[#001fcc] outline-none transition-all resize-none ${fieldErrors.message ? 'border-red-500' : ''}`}></textarea>
          {fieldErrors.message && <span className="text-red-500 text-xs mt-1 font-bold">{fieldErrors.message}</span>}
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
          className="w-full py-5 bg-[#001fcc] text-white font-black text-lg uppercase tracking-widest rounded-xl hover:bg-[#0017a8] active:scale-95 transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2"
        >
          {status.type === 'loading' ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              Sending...
            </>
          ) : (
            buttonText
          )}
        </button>
      </form>
    </div>
  );
};

export default CommonContactForm;
