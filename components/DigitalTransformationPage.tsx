import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, Globe, Cpu, Shield, Smartphone, Check, ArrowLeft, Star, Laptop, Zap, RefreshCw, Layers, Database, Code } from 'lucide-react';

interface DigitalTransformationPageProps {
  onBackHome: () => void;
}

const DTTechItem: React.FC<{ title: string; index: number }> = ({ title, index }) => {
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
          We leverage modern cloud paradigms and automation frameworks to eliminate legacy friction. Our digital strategy ensures your business logic is fast, resilient, and ready for the next decade of growth.
        </p>
      </div>
    </div>
  );
};

const DigitalTransformationPage: React.FC<DigitalTransformationPageProps> = ({ onBackHome }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 'henry',
      name: 'Henry Ford II',
      role: 'Operations Manager',
      company: 'Logistics Pro',
      text: "Mind Manthan didn't just build us a software; they transformed how we think about our supply chain. We've eliminated 80% of our manual entry errors since implementation. A true digital evolution for our legacy systems.",
      logo: (
        <div className="w-16 h-16 bg-[#001fcc] rounded-md flex items-center justify-center shadow-md">
          <RefreshCw className="text-white" size={32} />
        </div>
      )
    },
    {
      id: 'claire',
      name: 'Claire Jenkins',
      role: 'Director of Innovation',
      company: 'RetailNext',
      text: "Migrating our monolithic infrastructure to a microservices architecture seemed impossible. This team handled it with precision, ensuring zero downtime and providing a technical roadmap that actually makes sense.",
      logo: (
        <div className="w-16 h-16 bg-black rounded-md flex items-center justify-center shadow-md">
          <Layers className="text-white" size={32} />
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

  const dtStack = [
    "Legacy System Migration",
    "Cloud Native Strategy",
    "Workflow Automation (RPA)",
    "Data Modernization",
    "Microservices Architecture",
    "Agile DevOps Implementation"
  ];

  const benefits = [
    "Eliminate Technical Debt",
    "Global Scalability",
    "Enterprise Agility",
    "Real-time Data Insights",
    "Future-proof Infrastructure",
    "Operational Efficiency"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden bg-gradient-to-r from-[#00055c] via-[#000d8c] to-[#0019ff] py-32 px-6 lg:px-12">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] h-full opacity-40 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 400 400" preserveAspectRatio="none">
            <pattern id="dotPatternDT" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dotPatternDT)" mask="url(#fadeMaskDT)" />
            <defs>
              <linearGradient id="fadeGradientDT" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="black" />
                <stop offset="100%" stopColor="white" />
              </linearGradient>
              <mask id="fadeMaskDT">
                <rect width="100%" height="100%" fill="url(#fadeGradientDT)" />
              </mask>
            </defs>
          </svg>
        </div>
        
        <div className="absolute top-0 right-[-10%] w-[60%] h-full bg-gradient-to-l from-white/5 to-transparent skew-x-[-20deg] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1 bg-[#010745] rounded mb-10 border border-white/5">
              <span className="text-white text-[12px] font-black uppercase tracking-[0.2em]">
                Enterprise Evolution
              </span>
            </div>

            <h2 className="text-5xl md:text-[88px] font-black text-white leading-[1] tracking-tighter mb-10">
              Digital <br /> Transformation
            </h2>

            <p className="text-white text-xl md:text-[28px] font-medium leading-tight max-w-3xl mb-14 opacity-95">
              Modernize your core business processes. We design digital strategies that eliminate technical debt and drive world-class efficiency.
            </p>

            <button className="bg-[#e8edff] text-[#001fcc] px-10 py-4 rounded font-black text-sm uppercase tracking-widest hover:bg-white transition-all active:scale-95 shadow-2xl shadow-black/20">
              Request Transformation Roadmap
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch">
          <div className="flex-[1.2]">
            <h2 className="text-4xl md:text-[54px] font-black text-[#1a1b1f] leading-[1.05] tracking-tight mb-8">
              Why settle for <br /> legacy limitations?
            </h2>
            <p className="text-gray-500 text-[18px] leading-relaxed mb-8 font-medium max-w-2xl">
              Digital transformation is not just about adopting new tools—it's about fundamentally changing how you deliver value to your customers. We guide you through every technical hurdle:
            </p>
            
            <ul className="space-y-4 mb-16">
              {[
                "Modernize monolithic applications into flexible microservices.",
                "Automate repetitive manual tasks to unlock your team's potential.",
                "Harness the power of big data for predictive business insights.",
                "Seamlessly migrate mission-critical systems to the cloud."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-[11px] shrink-0"></div>
                  <span className="text-gray-500 font-medium text-[17px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {[
                { title: 'Agility First', desc: 'Implement agile frameworks that allow your organization to pivot instantly to market changes.' },
                { title: 'Data Modernization', desc: 'Break down silos and create a single source of truth for all your enterprise metrics.' },
                { title: 'Scalable Systems', desc: 'Architecture built to grow with your business, supporting global expansion without friction.' },
                { title: 'Zero Downtime', desc: 'Incremental modernization strategies that ensure your business never stops running.' }
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

          <div className="flex-1 w-full min-h-[450px] flex relative">
            <div className="w-full rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100 border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200" 
                alt="Digital Modernization Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Centered */}
      <section className="bg-white py-32 px-6 lg:px-12 border-t border-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <h2 className="text-4xl md:text-[54px] font-black text-[#1a1b1f] leading-[1.05] tracking-tight mb-8">
              Strategic Evolution <br /> Lifecycle
            </h2>
            <p className="text-gray-500 text-[18px] leading-relaxed mb-12 font-medium">
              Transformation is a continuous journey. We provide the technical leadership and execution required to move your business from legacy constraints to digital excellence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {[
                { title: 'Audit & Blueprint', desc: 'Identifying technical debt and mapping out a modernization path that aligns with your ROI.', icon: <Database size={24} /> },
                { title: 'Execution & Iteration', desc: 'Deploying modern tech stacks in phases to ensure minimal disruption to your daily operations.', icon: <Code size={24} /> },
                { title: 'Scale & Optimize', desc: 'Leveraging cloud infrastructure to ensure your new systems scale effortlessly with global demand.', icon: <Zap size={24} /> }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                   <div className="w-14 h-14 bg-[#e8edff] rounded-2xl flex items-center justify-center text-[#001fcc] shrink-0 group-hover:bg-[#001fcc] group-hover:text-white transition-all duration-300 mb-6">
                      {item.icon}
                   </div>
                   <div>
                     <h4 className="text-[22px] font-black text-[#1a1b1f] mb-3">{item.title}</h4>
                     <p className="text-gray-500 text-[16px] leading-relaxed font-medium">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>

            <button className="mt-16 bg-[#1a1b1f] text-white px-10 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-[#001fcc] transition-all shadow-xl shadow-gray-400/10">
              View Our Strategy Lab
            </button>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-32 bg-[#f8faff] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-black text-[#1a1b1f] tracking-tighter mb-6">
              Transformation Pillars
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              We leverage every capability of the modern cloud ecosystem to create truly digital-first experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Cloud Integration', icon: <Globe size={32} />, desc: 'Migrate legacy workloads to AWS, Azure, or GCP for ultimate flexibility.' },
              { title: 'Enterprise Security', icon: <Shield size={32} />, desc: 'Multi-layered protection strategies for your modernized digital assets.' },
              { title: 'Process Automation', icon: <RefreshCw size={32} />, desc: 'Replacing manual bottlenecks with intelligent, automated workflows.' }
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

      {/* Tech List Section */}
      <section className="py-32 bg-white px-6 border-t border-gray-100 overflow-visible">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="flex-1 lg:sticky lg:top-40">
              <h2 className="text-4xl md:text-[54px] font-black text-[#1a1b1f] leading-[1.1] tracking-tighter mb-10">
                Precision Digital <br /> engineering
              </h2>
              <p className="text-gray-500 text-[19px] leading-relaxed max-w-md font-medium">
                We handle the entire transformation lifecycle, from initial technical audit to continuous performance optimization.
              </p>
            </div>

            <div className="flex-1 w-full">
              <div className="flex flex-col">
                {dtStack.map((tech, idx) => (
                  <DTTechItem key={tech} title={tech} index={idx} />
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
            What our transformation partners say
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
          </div>
        </div>
      </section>

      {/* Unified Contact Form */}
      <section className="bg-white px-6 pb-32 pt-16">
        <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[800px]">
          <div className="flex-1 flex flex-col">
            <div className="bg-[#1a1b1f] p-12 md:p-16">
              <h2 className="text-4xl md:text-5xl lg:text-[64px] font-black text-white leading-[1.05] tracking-tighter">
                Evolve Your Business Infrastructure
              </h2>
            </div>
            <div className="bg-[#e8edff] flex-1 p-12 md:p-16">
              <p className="text-[#1a1b1f] text-lg font-medium mb-12 max-w-md leading-relaxed">
                We'll guide you through the digital evolution roadmap. From initial technical debt auditing to final cloud deployment.
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
              <h3 className="text-[#1a1b1f] text-3xl font-black mb-2">Start Your Transformation</h3>
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
                  <label className="block text-[13px] font-bold text-gray-600 uppercase tracking-widest mb-2">First name</label>
                  <input type="text" className="w-full px-5 py-4 bg-white border border-gray-200 rounded-lg focus:border-[#001fcc] focus:ring-1 focus:ring-[#001fcc] outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-gray-600 uppercase tracking-widest mb-2">Last name</label>
                  <input type="text" className="w-full px-5 py-4 bg-white border border-gray-200 rounded-lg focus:border-[#001fcc] focus:ring-1 focus:ring-[#001fcc] outline-none transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-bold text-gray-600 uppercase tracking-widest mb-2">Company email</label>
                <input type="email" className="w-full px-5 py-4 bg-white border border-gray-200 rounded-lg focus:border-[#001fcc] focus:ring-1 focus:ring-[#001fcc] outline-none transition-all" />
              </div>

              <div>
                <label className="block text-[13px] font-bold text-gray-600 uppercase tracking-widest mb-2">Service Required</label>
                <select className="w-full px-5 py-4 bg-white border border-gray-200 rounded-lg focus:border-[#001fcc] focus:ring-1 focus:ring-[#001fcc] outline-none transition-all appearance-none cursor-pointer">
                  <option>Legacy Migration</option>
                  <option>Cloud Strategy</option>
                  <option>Workflow Automation</option>
                  <option>Big Data Integration</option>
                  <option>Enterprise Software Audit</option>
                </select>
              </div>

              <div>
                <label className="block text-[13px] font-bold text-gray-600 uppercase tracking-widest mb-2">Describe Your Vision</label>
                <textarea rows={4} placeholder="How can we help modernize your business?" className="w-full px-5 py-4 bg-white border border-gray-200 rounded-lg focus:border-[#001fcc] focus:ring-1 focus:ring-[#001fcc] outline-none transition-all resize-none"></textarea>
              </div>

              <button type="submit" className="w-full py-5 bg-[#001fcc] text-white font-black text-lg uppercase tracking-widest rounded-xl hover:bg-[#0017a8] active:scale-95 transition-all shadow-xl shadow-blue-500/20">
                Send Transformation Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformationPage;