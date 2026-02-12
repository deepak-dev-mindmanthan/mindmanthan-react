import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, Globe, Users, Shield, Zap, Check, ArrowLeft, Star, UserPlus, Search, Code } from 'lucide-react';

interface StaffAugmentationPageProps {
  onBackHome: () => void;
}

interface TestimonialData {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  logo: React.ReactNode;
}

const RoleItem: React.FC<{ title: string; index: number }> = ({ title, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px' 
      }
    );

    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={itemRef}
      className={`group flex items-start gap-10 py-16 border-b border-gray-100 last:border-b-0 transition-all duration-[1100ms] cubic-bezier(0.25, 1, 0.5, 1) transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'
      }`}
    >
      <div className="w-10 h-10 rounded-full bg-[#001fcc] flex items-center justify-center shrink-0 mt-1 shadow-xl shadow-blue-500/10 group-hover:scale-110 transition-transform duration-500">
        <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
      </div>
      
      <div className="flex-1">
        <h4 className="text-[26px] font-black text-[#1a1b1f] mb-4 group-hover:text-[#001fcc] transition-colors tracking-tighter">
          {title}
        </h4>
        <p className="text-gray-500 text-[17px] font-medium leading-relaxed max-w-xl">
          We provide vetted experts who integrate seamlessly into your workflow. Our professionals bring senior-level experience to hit the ground running on day one.
        </p>
      </div>
    </div>
  );
};

const StaffAugmentationPage: React.FC<StaffAugmentationPageProps> = ({ onBackHome }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: TestimonialData[] = [
    {
      id: 'sarah',
      name: 'Sarah Walters',
      role: 'VP of Engineering',
      company: 'DataFlow Systems',
      text: "Scaling our backend team would have taken months through traditional hiring. Mind Manthan provided three senior Node.js developers within a week. Their integration was so seamless they felt like long-term employees from the start.",
      logo: (
        <div className="w-16 h-16 bg-[#001fcc] rounded-md flex items-center justify-center shadow-md">
          <Users className="text-white" size={32} />
        </div>
      )
    },
    {
      id: 'tom',
      name: 'Tom Richardson',
      role: 'CTO',
      company: 'FinLeap Tech',
      text: "The quality of talent provided exceeded our expectations. Not only did they have the technical skills, but their communication and proactive approach helped us meet a critical product deadline that seemed impossible.",
      logo: (
        <div className="w-16 h-16 bg-black rounded-md flex items-center justify-center shadow-md">
          <Zap className="text-white" size={32} fill="currentColor" />
        </div>
      )
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const expertRoles = [
    "Frontend Engineers",
    "Backend Developers",
    "Full Stack Experts",
    "UI/UX Designers",
    "QA & Automation Engineers",
    "DevOps Specialists"
  ];

  const benefits = [
    "Cost-Effective",
    "Rapid Scaling",
    "Zero Recruitment Risk",
    "Highly Vetted Talent",
    "Full Control",
    "Flexible Engagement"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden bg-gradient-to-r from-[#00055c] via-[#000d8c] to-[#0019ff] py-32 px-6 lg:px-12">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] h-full opacity-40 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 400 400" preserveAspectRatio="none">
            <pattern id="dotPatternStaff" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dotPatternStaff)" mask="url(#fadeMaskStaff)" />
            <defs>
              <linearGradient id="fadeGradientStaff" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="black" />
                <stop offset="100%" stopColor="white" />
              </linearGradient>
              <mask id="fadeMaskStaff">
                <rect width="100%" height="100%" fill="url(#fadeGradientStaff)" />
              </mask>
            </defs>
          </svg>
        </div>
        
        <div className="absolute top-0 right-[-10%] w-[60%] h-full bg-gradient-to-l from-white/5 to-transparent skew-x-[-20deg] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1 bg-[#010745] rounded mb-10 border border-white/5">
              <span className="text-white text-[12px] font-black uppercase tracking-[0.2em]">
                Scale Your Team
              </span>
            </div>

            <h2 className="text-5xl md:text-[88px] font-black text-white leading-[1] tracking-tighter mb-10">
              Staff <br /> Augmentation
            </h2>

            <p className="text-white text-xl md:text-[28px] font-medium leading-tight max-w-3xl mb-14 opacity-95">
              Instantly scale your internal team with top-tier, vetted tech talent. No recruitment fees, no long-term overhead.
            </p>

            <button className="bg-[#e8edff] text-[#001fcc] px-10 py-4 rounded font-black text-sm uppercase tracking-widest hover:bg-white transition-all active:scale-95 shadow-2xl shadow-black/20">
              Request Talent Profiles
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch">
          <div className="flex-[1.2]">
            <h2 className="text-4xl md:text-[54px] font-black text-[#1a1b1f] leading-[1.05] tracking-tight mb-8">
              Why settle for long <br /> hiring cycles?
            </h2>
            <p className="text-gray-500 text-[18px] leading-relaxed mb-8 font-medium max-w-2xl">
              Finding high-quality engineers shouldn't slow down your roadmap. Staff augmentation allows you to add the exact expertise you need, right when you need it:
            </p>
            
            <ul className="space-y-4 mb-16">
              {[
                "Accelerate time-to-market by filling skill gaps instantly.",
                "Maintain full management control over your remote resources.",
                "Eliminate HR overhead, legal paperwork, and equipment costs.",
                "Scale up for crunch periods and down when goals are met."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-[11px] shrink-0"></div>
                  <span className="text-gray-500 font-medium text-[17px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {[
                { title: 'Vetted Experts Only', desc: 'Our rigorous screening process includes technical tests and soft-skill interviews.' },
                { title: 'Time-Zone Alignment', desc: 'We provide talent that works within your hours to ensure real-time collaboration.' },
                { title: 'Flexible Contracts', desc: 'Whether you need help for 3 months or 3 years, we adapt to your project scope.' },
                { title: 'IP Protection', desc: 'Strong NDA compliance and secure development practices are baked into our contracts.' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 bg-[#001fcc] rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/10">
                      <Check size={18} strokeWidth={4} />
                    </div>
                    <h4 className="text-[20px] font-black text-[#1a1b1f] tracking-tight">{item.title}</h4>
                  </div>
                  <p className="text-gray-500 text-[15px] leading-relaxed font-medium pl-14">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE IMAGE FRAME */}
          <div className="flex-1 w-full min-h-[450px] flex relative">
            <div className="w-full rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100 border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
                alt="Tech Team Collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-32 px-6 lg:px-12 border-t border-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-stretch">
          <div className="flex-[1.2]">
            <h2 className="text-4xl md:text-[54px] font-black text-[#1a1b1f] leading-[1.05] tracking-tight mb-8">
              Seamless Integration <br /> Strategy
            </h2>
            <p className="text-gray-500 text-[18px] leading-relaxed mb-12 font-medium max-w-2xl">
              We don't just provide "bodies"—we provide partners. Our augmentation model is designed to align with your culture and technical standards from day one.
            </p>
            
            <div className="space-y-8">
              {[
                { title: 'Role Matching', desc: 'We match profiles not just by technology stack, but by their experience in your specific industry.' },
                { title: 'Smooth Onboarding', desc: 'Our team handles the heavy lifting of environment setup and cultural alignment.' },
                { title: 'Continuous Oversight', desc: 'A dedicated Account Manager ensures your augmented resources are performing at their peak.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                   <div className="w-14 h-14 bg-[#e8edff] rounded-2xl flex items-center justify-center text-[#001fcc] shrink-0 group-hover:bg-[#001fcc] group-hover:text-white transition-all duration-300">
                      {idx === 0 ? <Search size={24} /> : idx === 1 ? <UserPlus size={24} /> : <Globe size={24} />}
                   </div>
                   <div>
                     <h4 className="text-[22px] font-black text-[#1a1b1f] mb-2">{item.title}</h4>
                     <p className="text-gray-500 text-[16px] leading-relaxed font-medium">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>

            <button className="mt-12 bg-[#1a1b1f] text-white px-10 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-[#001fcc] transition-all shadow-xl shadow-gray-400/10">
              See How We VET
            </button>
          </div>

          <div className="flex-1 w-full min-h-[450px] flex relative">
            <div className="w-full rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100 border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200" 
                alt="Team Brainstorming Session"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Capabilities */}
      <section className="py-32 bg-[#f8faff] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-black text-[#1a1b1f] tracking-tighter mb-6">
              Expertise for Every Stack
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              We maintain a deep pool of talent across various domains to support your most complex technical requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Core Engineering', icon: <Code size={32} />, desc: 'Node.js, Python, Go, Java, and .NET experts ready for your backend.' },
              { title: 'Web Specialists', icon: <Globe size={32} />, desc: 'React, Vue, and Angular developers who build pixel-perfect interfaces.' },
              { title: 'Security & QA', icon: <Shield size={32} />, desc: 'Vulnerability assessments and robust automated testing suites.' }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-50 group">
                <div className="text-[#001fcc] mb-8 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-black text-[#1a1b1f] mb-4 uppercase tracking-tighter">
                  {service.title}
                </h4>
                <p className="text-gray-500 font-medium leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-32 bg-white px-6 border-t border-gray-100 overflow-visible">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="flex-1 lg:sticky lg:top-40">
              <h2 className="text-4xl md:text-[54px] font-black text-[#1a1b1f] leading-[1.1] tracking-tighter mb-10">
                On-demand talent <br /> for your goals
              </h2>
              <p className="text-gray-500 text-[19px] leading-relaxed max-w-md font-medium">
                Choose from a range of professional profiles. We ensure that every candidate we provide has the seniority to add value immediately.
              </p>
            </div>

            <div className="flex-1 w-full">
              <div className="flex flex-col">
                {expertRoles.map((role, idx) => (
                  <RoleItem key={role} title={role} index={idx} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-32 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-[44px] font-black text-[#1a1b1f] leading-[1.1] tracking-tighter mb-12">
            Why companies scale with us
          </h2>

          <div className="relative overflow-hidden min-h-[450px] flex flex-col items-center">
            <div className="mb-12 transition-all duration-500 transform scale-100">
               {testimonials[currentTestimonial].logo}
            </div>

            <div className="max-w-5xl mx-auto mb-12 px-4 transition-opacity duration-500">
              <p className="text-[28px] md:text-[34px] font-medium text-[#1a1b1f] leading-[1.3] tracking-tight mb-10 min-h-[160px]">
                {testimonials[currentTestimonial].text}
              </p>
              
              <div className="mb-16">
                <h4 className="text-[18px] font-black text-[#1a1b1f] mb-1">{testimonials[currentTestimonial].name}</h4>
                <p className="text-gray-500 font-medium">{testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}</p>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-10">
            <div className="flex gap-4">
              <button 
                onClick={prevTestimonial}
                className="w-14 h-14 rounded-full bg-[#f1f5f9] flex items-center justify-center text-gray-400 hover:bg-[#e2e8f0] hover:text-[#1a1b1f] transition-all active:scale-90"
              >
                <ArrowLeft size={24} strokeWidth={2.5} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-14 h-14 rounded-full bg-[#f1f5f9] flex items-center justify-center text-gray-400 hover:bg-[#e2e8f0] hover:text-[#1a1b1f] transition-all active:scale-90"
              >
                <ArrowRight size={24} strokeWidth={2.5} />
              </button>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Reviewed on</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-red-500 text-red-500" />
                ))}
              </div>
              <div className="h-8 w-[1px] bg-gray-200 mx-2"></div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <span className="text-[17px] font-black text-[#1a1b1f]">4.9</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Contact Form */}
      <section className="bg-white px-6 pb-32 pt-16">
        <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[800px]">
          <div className="flex-1 flex flex-col">
            <div className="bg-[#1a1b1f] p-12 md:p-16">
              <h2 className="text-4xl md:text-5xl lg:text-[64px] font-black text-white leading-[1.05] tracking-tighter">
                Scale Your Internal Team Fast
              </h2>
            </div>
            <div className="bg-[#e8edff] flex-1 p-12 md:p-16">
              <p className="text-[#1a1b1f] text-lg font-medium mb-12 max-w-md leading-relaxed">
                Tell us about the roles you need. We can usually provide qualified profiles within 24-48 hours.
              </p>
              
              <div className="mb-16">
                <span className="text-[#1a1b1f] text-xl font-bold block mb-2">Call us at:</span>
                <a href="tel:+917011502461" className="text-[#1a1b1f] text-2xl font-black hover:text-[#001fcc] transition-colors">+91 70115 02461</a>
              </div>

              <div>
                <h4 className="text-[#1a1b1f] text-lg font-bold mb-8">Your benefits:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#001fcc]" fill="#001fcc" color="white" />
                      <span className="text-[#1a1b1f] font-bold text-base">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-white p-12 md:p-16">
            <div className="text-center mb-10">
              <h3 className="text-[#1a1b1f] text-3xl font-black mb-2">Hire Your Next Expert</h3>
              <div className="flex justify-center">
                <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                  <path d="M5 5C15 5 25 15 35 15" stroke="#1a1b1f" strokeWidth="2" strokeLinecap="round" />
                  <path d="M30 10L35 15L30 20" stroke="#1a1b1f" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[13px] font-bold text-gray-600 uppercase tracking-widest mb-2">Your Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-white border border-gray-200 rounded-lg focus:border-[#001fcc] focus:ring-1 focus:ring-[#001fcc] outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-gray-600 uppercase tracking-widest mb-2">Company Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-white border border-gray-200 rounded-lg focus:border-[#001fcc] focus:ring-1 focus:ring-[#001fcc] outline-none transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-bold text-gray-600 uppercase tracking-widest mb-2">Email Address</label>
                <input type="email" className="w-full px-5 py-4 bg-white border border-gray-200 rounded-lg focus:border-[#001fcc] focus:ring-1 focus:ring-[#001fcc] outline-none transition-all" />
              </div>

              <div>
                <label className="block text-[13px] font-bold text-gray-600 uppercase tracking-widest mb-2">Required Experts</label>
                <select className="w-full px-5 py-4 bg-white border border-gray-200 rounded-lg focus:border-[#001fcc] focus:ring-1 focus:ring-[#001fcc] outline-none transition-all appearance-none cursor-pointer">
                  <option>Select Option</option>
                  <option>Frontend Developers</option>
                  <option>Backend Developers</option>
                  <option>Mobile App Developers</option>
                  <option>QA & Testing Experts</option>
                  <option>Multiple Roles / Full Team</option>
                </select>
              </div>

              <div>
                <label className="block text-[13px] font-bold text-gray-600 uppercase tracking-widest mb-2">Project Brief</label>
                <textarea rows={4} placeholder="Briefly describe the technologies and seniority you are looking for..." className="w-full px-5 py-4 bg-white border border-gray-200 rounded-lg focus:border-[#001fcc] focus:ring-1 focus:ring-[#001fcc] outline-none transition-all resize-none"></textarea>
              </div>

              <button type="submit" className="w-full py-5 bg-[#001fcc] text-white font-black text-lg uppercase tracking-widest rounded-xl hover:bg-[#0017a8] active:scale-95 transition-all shadow-xl shadow-blue-500/20">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Trust & Stats Section */}
      <section className="py-24 bg-white px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:max-w-xl">
            <h3 className="text-4xl font-black text-[#1a1b1f] mb-8 tracking-tighter">
              Trust the Best in the Business.
            </h3>
            <ul className="space-y-6">
              {[
                'Global talent pool of senior professionals',
                'Transparent pricing and reporting',
                'Quick replacement guarantee if needed'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-lg font-bold text-gray-700">
                  <CheckCircle2 className="text-[#001fcc] shrink-0" size={24} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:gap-16">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-[#001fcc] mb-2 tracking-tighter">50+</div>
              <div className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Companies Augmented</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-[#001fcc] mb-2 tracking-tighter">400+</div>
              <div className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Vetted Developers</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StaffAugmentationPage;