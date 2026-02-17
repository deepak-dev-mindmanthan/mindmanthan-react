import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

const JourneySection: React.FC = () => {
  const hqOffice = SITE_CONFIG.offices?.newYork;
  const deliveryOffice = SITE_CONFIG.offices?.boston;

  return (
    <section className="bg-[#f9faff] py-8 md:py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="flex-[1.2]">
            <h2 className="text-5xl md:text-7xl font-black text-[#010417] leading-[1.05] tracking-tighter mb-16">
              Start your next
              <br />
              software journey
            </h2>

            <p className="text-gray-600 text-lg max-w-md leading-relaxed mb-8">
              Share your requirements for app development, website modernization, IoT implementation, or automation.
              Our team will provide a practical execution roadmap.
            </p>

            <div className="max-w-md space-y-6">
              <div className="relative">
                <input
                  aria-label="Email updates"
                  type="email"
                  placeholder="Don't miss out updates"
                  className="w-full px-6 py-4 bg-white border border-gray-100 rounded-lg text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all shadow-sm"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  aria-label="Privacy consent"
                  type="checkbox"
                  id="journey-privacy"
                  className="mt-1 w-4 h-4 rounded border-gray-300 accent-[#001fcc] cursor-pointer"
                />
                <label htmlFor="journey-privacy" className="text-[13px] font-medium text-gray-500 leading-relaxed cursor-pointer">
                  I agree to the Privacy Policy and give my permission to process my personal data for the purposes specified in the Privacy Policy.
                </label>
              </div>

              <button className="bg-[#e0e7ff] text-[#001fcc] px-10 py-4 rounded-lg font-black text-[15px] inline-flex items-center gap-2 hover:bg-[#d0dbff] transition-all active:scale-95 group">
                Send
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h3 className="text-2xl font-black text-[#010417] mb-4">{hqOffice?.title || 'HQ'}</h3>
                <div className="text-gray-500 font-medium text-[15px] leading-relaxed mb-6">
                  {(hqOffice?.lines || ['Address line 1', 'Address line 2']).map((line, idx) => (
                    <React.Fragment key={line}>
                      {line}
                      {idx < (hqOffice?.lines?.length || 2) - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black text-[#010417] mb-4">{deliveryOffice?.title || 'Delivery Center'}</h3>
                <div className="text-gray-500 font-medium text-[15px] leading-relaxed mb-6">
                  {(deliveryOffice?.lines || ['Remote + Onsite Collaboration', 'Service Areas']).map((line, idx) => (
                    <React.Fragment key={line}>
                      {line}
                      {idx < (deliveryOffice?.lines?.length || 2) - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 text-[#001fcc] font-black text-[14px]">
              End-to-end development, deployment, and support.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;

