import React from 'react';
import heroBg from '../assets/images/mindmanthan.webp';
import { CONTENT_CONFIG } from '../config/contentConfig';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0c10]">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`
        }}
      >
        <div className="absolute inset-0 bg-black/50 md:bg-gradient-to-r md:from-black/85 md:via-black/40 md:to-transparent"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full pt-6">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-[74px] font-semibold text-white leading-[1.05] mb-6 tracking-tight">
            IT services for
            <br />
            apps, websites,
            <br />
            and IoT platforms.
          </h1>
          <p className="text-lg md:text-xl lg:text-[22px] text-white/90 font-normal leading-relaxed max-w-3xl">
            {CONTENT_CONFIG.company.shortName} delivers custom software, web and mobile development,
            workflow automation, secure infrastructure, and long-term technical support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

