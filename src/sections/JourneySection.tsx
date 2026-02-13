import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

const JourneySection: React.FC = () => {
  const { newYork, boston } = SITE_CONFIG.offices;

  return (
    <section className="bg-[#f9faff] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Headline and Signup */}
          <div className="flex-[1.2]">
            <h2 className="text-5xl md:text-7xl font-black text-[#010417] leading-[1.05] tracking-tighter mb-16">
              Start your journey <br /> to better business
            </h2>

            <div className="max-w-md space-y-8">
              <div className="relative">
                <input aria-label="Form field" 
                  type="text" 
                  placeholder="Don't miss out updates"
                  className="w-full px-6 py-4 bg-white border border-gray-100 rounded-lg text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all shadow-sm"
                />
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <input aria-label="Form field" 
                    type="checkbox" 
                    id="privacy" 
                    className="w-4 h-4 rounded border-gray-300 accent-[#001fcc] cursor-pointer"
                  />
                </div>
                <label htmlFor="privacy" className="text-[13px] font-medium text-gray-500 leading-relaxed cursor-pointer">
                  I agree to the Privacy Policy and give my permission to process my personal data for the purposes specified in the Privacy Policy.
                </label>
              </div>

              <button className="bg-[#e0e7ff] text-[#001fcc] px-10 py-4 rounded-lg font-black text-[15px] flex items-center gap-2 hover:bg-[#d0dbff] transition-all active:scale-95 group">
                Send 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Locations */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16">
              {/* New York */}
              <div>
                <h3 className="text-2xl font-black text-[#010417] mb-4">{newYork.title}</h3>
                <div className="text-gray-500 font-medium text-[15px] leading-relaxed mb-6">
                  {newYork.lines[0]} <br />
                  {newYork.lines[1]}
                </div>
                <div className="text-gray-500 font-medium text-[15px]">
                  T: {newYork.phone}
                </div>
              </div>

              {/* Boston */}
              <div>
                <h3 className="text-2xl font-black text-[#010417] mb-4">{boston.title}</h3>
                <div className="text-gray-500 font-medium text-[15px] leading-relaxed mb-6">
                  {boston.lines[0]} <br />
                  {boston.lines[1]}
                </div>
                <div className="text-gray-500 font-medium text-[15px]">
                  T: {boston.phone}
                </div>
              </div>
            </div>

            <div className="mt-12">
              <button
                type="button"
                className="text-[#001fcc] font-black text-[14px] inline-block border-b-2 border-[#001fcc] pb-0.5 hover:text-[#010417] hover:border-[#010417] transition-all"
              >
                View all locations
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;

