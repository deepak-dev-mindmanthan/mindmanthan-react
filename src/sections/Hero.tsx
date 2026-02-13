import React from 'react';
import heroBg from '../assets/images/mindmanthan.webp';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0c10]">
      {/* Main Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`
        }}
      >
        <div className="absolute inset-0 bg-black/40 md:bg-transparent md:bg-gradient-to-r md:from-black/80 md:via-black/20 md:to-transparent"></div>
        
        {/* Subtle decorative glow */}
        <div className="absolute top-1/2 left-[60%] -translate-y-1/2 w-[700px] h-[700px] border-[60px] border-blue-600/5 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full pt-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-[80px] font-semibold text-white leading-[1.05] mb-6 tracking-tight">
            Mobile app <br />
            development for <br />
            funded companies.
          </h1>
          <p className="text-lg md:text-xl lg:text-[22px] text-white/90 font-normal leading-relaxed max-w-2xl">
            Helping companies succeed through customized <br className="hidden md:block" />
            software solutions
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
