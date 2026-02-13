import React from 'react';
import ShapeDotsArrowRight from '../assets/images/Shape-dots-arrow-right.svg';
import { Mail, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
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
                href="tel:+917011502461"
                className="flex items-center gap-3 text-white text-base md:text-2xl font-bold tracking-tight break-words hover:opacity-90 transition-opacity"
              >
                <Phone size={20} />
                <span>+91 70115 02461</span>
              </a>
              <a
                href="mailto:info@mindmanthansoftwaresolutions.com"
                className="flex items-center gap-3 text-white text-base md:text-2xl font-bold tracking-tight break-all hover:opacity-90 transition-opacity"
              >
                <Mail size={20} />
                <span>info@mindmanthansoftwaresolutions.com</span>
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
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  aria-label="Your name"
                  placeholder="Your name" 
                  className="w-full px-6 py-4 rounded-lg bg-white text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300 transition-all border-none font-medium"
                />
                <input 
                  type="email" 
                  aria-label="Email address"
                  placeholder="Email address" 
                  className="w-full px-6 py-4 rounded-lg bg-white text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300 transition-all border-none font-medium"
                />
                <input 
                  type="tel" 
                  aria-label="Phone number"
                  placeholder="Phone number" 
                  className="w-full px-6 py-4 rounded-lg bg-white text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300 transition-all border-none font-medium"
                />
                <div className="relative">
                  <select 
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

              <textarea 
                aria-label="Message"
                placeholder="Message" 
                rows={5}
                className="w-full px-6 py-4 rounded-lg bg-white text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300 transition-all border-none resize-none font-medium"
              ></textarea>

              <div className="flex items-center gap-3">
                <input aria-label="Form field" 
                  type="checkbox" 
                  id="nda" 
                  className="w-5 h-5 rounded accent-[#d9e2ff] cursor-pointer"
                />
                <label htmlFor="nda" className="text-white text-sm font-bold cursor-pointer opacity-90">
                  I want an NDA to protect my idea
                </label>
              </div>

              <button 
                type="submit" 
                className="bg-[#d9e2ff] text-[#001fcc] px-10 py-4 rounded-lg font-black text-base uppercase tracking-widest hover:bg-white transition-all active:scale-95 shadow-xl shadow-black/10"
              >
                Send a request
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

