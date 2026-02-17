import React, { useState } from 'react';
import ShapeDotsArrowRight from '../assets/images/Shape-dots-arrow-right.svg';
import { Mail, Phone, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { submitContactForm } from '../services/apiService';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    message: '',
    nda: false
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';
    
    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

    // Phone number specific validation: only allow numbers and common symbols
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
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s./0-9]*$/;

    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      errors.phone = 'Invalid phone number';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus({ type: 'error', message: 'Please fix the errors above.' });
      return;
    }

    setStatus({ type: 'loading', message: 'Sending...' });

    try {
      await submitContactForm({
        ...formData,
        formType: 'contact_section'
      });

      setStatus({ 
        type: 'success', 
        message: 'Request sent successfully!' 
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        budget: '',
        message: '',
        nda: false
      });
      setFieldErrors({});

      setTimeout(() => setStatus({ type: 'idle', message: '' }), 5000);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to send request.';
      setStatus({ 
        type: 'error', 
        message: errorMessage
      });
    }
  };

  return (
    <section data-contact-form className="bg-white py-24 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#001fcc] rounded-[2rem] p-10 md:p-16 relative overflow-hidden flex flex-col lg:flex-row gap-14 items-start">
          
          {/* Background Pattern Removed as requested */}

          {/* Left Side: Info */}
          <div className="relative z-10 flex-[0.9] min-w-0 w-full">
            <h2 className="text-[40px] md:text-[48px] lg:text-[52px] font-black text-white leading-[1.1] tracking-tight mb-10">
              Got a project? <br /> Let’s talk
              <span className="inline-block align-middle ml-2">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h12M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </h2>
            
            <div className="space-y-3">
              <a
                href={`tel:${SITE_CONFIG.business.phoneHref}`}
                className="flex items-center gap-3 text-white text-base md:text-2xl font-bold tracking-tight break-words hover:opacity-90 transition-opacity"
              >
                <Phone size={20} />
                <span>{SITE_CONFIG.business.phone}</span>
              </a>
              <a
                href={SITE_CONFIG.business.emailHref}
                className="flex items-center gap-3 text-white text-base md:text-2xl font-bold tracking-tight break-all hover:opacity-90 transition-opacity"
              >
                <Mail size={20} />
                <span>{SITE_CONFIG.business.email}</span>
              </a>
            </div>

            {/* Decorative diamond grid on left, subtle like reference */}
            <div className="absolute left-0 bottom-0 translate-x-[-12px] translate-y-[12px] w-[280px] h-[180px] opacity-35 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <g fill="rgba(255,255,255,0.6)">
                  {Array.from({ length: 8 }).map((_, row) => {
                    const numInRow = row + 1;
                    const size = 3;
                    const spacing = 6;
                    const startY = 10;
                    const centerX = 50;
                    return Array.from({ length: numInRow }).map((__, colIdx) => {
                      const posX = centerX + (colIdx - row / 2) * spacing;
                      const posY = startY + row * spacing;
                      return (
                        <rect
                          key={`${row}-${colIdx}`}
                          x={posX}
                          y={posY}
                          width={size}
                          height={size}
                          transform={`rotate(45, ${posX + size/2}, ${posY + size/2})`}
                        />
                      );
                    });
                  })}
                </g>
              </svg>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="relative z-10 flex-[1.1] w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    aria-label="Your name"
                    placeholder="Your name" 
                    className={`w-full px-6 py-4 rounded-lg bg-white text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300 transition-all border-none font-medium ${fieldErrors.name ? 'ring-2 ring-red-400' : ''}`}
                  />
                  {fieldErrors.name && <span className="text-red-200 text-xs mt-1 ml-1 font-bold">{fieldErrors.name}</span>}
                </div>
                <div className="flex flex-col">
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    aria-label="Email address"
                    placeholder="Email address" 
                    className={`w-full px-6 py-4 rounded-lg bg-white text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300 transition-all border-none font-medium ${fieldErrors.email ? 'ring-2 ring-red-400' : ''}`}
                  />
                  {fieldErrors.email && <span className="text-red-200 text-xs mt-1 ml-1 font-bold">{fieldErrors.email}</span>}
                </div>
                <div className="flex flex-col">
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    aria-label="Phone number"
                    placeholder="Phone number" 
                    className={`w-full px-6 py-4 rounded-lg bg-white text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300 transition-all border-none font-medium ${fieldErrors.phone ? 'ring-2 ring-red-400' : ''}`}
                  />
                  {fieldErrors.phone && <span className="text-red-200 text-xs mt-1 ml-1 font-bold">{fieldErrors.phone}</span>}
                </div>
                <div className="relative">
                  <select 
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    aria-label="Project budget"
                    className="w-full px-6 py-4 rounded-lg bg-white text-gray-400 outline-none focus:ring-2 focus:ring-blue-300 transition-all border-none appearance-none cursor-pointer font-medium"
                  >
                    <option value="">What is your budget?</option>
                    <option value="5k-10k">$5k - $10k</option>
                    <option value="10k-25k">$10k - $25k</option>
                    <option value="25k-50k">$25k - $50k</option>
                    <option value="50k+">$50k+</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path d="M1 1L6 6L11 1" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  aria-label="Message"
                  placeholder="Message" 
                  rows={5}
                  className={`w-full px-6 py-4 rounded-lg bg-white text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300 transition-all border-none resize-none font-medium ${fieldErrors.message ? 'ring-2 ring-red-400' : ''}`}
                ></textarea>
                {fieldErrors.message && <span className="text-red-200 text-xs mt-1 ml-1 font-bold">{fieldErrors.message}</span>}
              </div>

              <div className="flex items-center gap-3">
                <input 
                  type="checkbox" 
                  id="nda" 
                  name="nda"
                  checked={formData.nda}
                  onChange={handleInputChange}
                  className="w-5 h-5 rounded accent-[#d9e2ff] cursor-pointer"
                />
                <label htmlFor="nda" className="text-white text-sm font-bold cursor-pointer opacity-90">
                  I want an NDA to protect my idea
                </label>
              </div>

              {status.type !== 'idle' && (
                <div className={`p-4 rounded-lg flex items-center gap-3 ${
                  status.type === 'success' ? 'bg-green-100/20 text-white border border-green-200/30' :
                  status.type === 'error' ? 'bg-red-100/20 text-white border border-red-200/30' :
                  'bg-white/10 text-white border border-white/20'
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
                className="bg-[#d9e2ff] text-[#001fcc] px-10 py-4 rounded-lg font-black text-base uppercase tracking-widest hover:bg-white transition-all active:scale-95 shadow-xl shadow-black/10 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed w-full md:w-auto"
              >
                {status.type === 'loading' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send a request'
                )}
              </button>
            </form>
          </div>

          {/* Decorative Dots Arrow (matches reference right-side motif) */}
          <img loading="lazy" decoding="async"
            src={ShapeDotsArrowRight} 
            alt="Decorative dotted arrow" 
            className="absolute right-8 top-1/2 -translate-y-1/2 w-[160px] opacity-100 pointer-events-none select-none"
            width={160}
            height={160}
          />

        </div>
      </div>
      {/* Radial glow outside panel on page background (matches reference) */}
      <div className="absolute left-1/2 top-[72%] -translate-x-1/2 w-[900px] h-[480px] rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(closest-side, rgba(216,224,255,0.45), rgba(216,224,255,0))' }} />
    </section>
  );
};

export default ContactSection;



