import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Zap, Star, ChevronRight, CupSoda, BarChart, Settings, Coffee } from 'lucide-react';

interface CoffeeCaseStudyPageProps {
  onBackHome: () => void;
}

const CoffeeCaseStudyPage: React.FC<CoffeeCaseStudyPageProps> = ({ onBackHome }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section matching the requested style */}
      <section className="bg-white pt-40 pb-20 px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Content Column */}
            <div className="flex-1 text-left">
              <div className="inline-block px-3 py-1 bg-[#f1f5f9] rounded-md mb-8">
                <span className="text-[#64748b] text-[11px] font-black uppercase tracking-[0.2em]">
                  Supply Chain Automation
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-[68px] font-black text-[#1a1b1f] leading-[1.05] tracking-tighter mb-10">
                Maximizing Efficiency <br />
                with Proper Technology <br />
                Implementation – <br />
                Coffee Success Story
              </h1>
              
              <div className="flex flex-col gap-1">
                <span className="text-[14px] font-medium text-gray-400">
                  Industry: Retail & F&B
                </span>
              </div>
            </div>

            {/* Right Visual Column (The Blue Card) */}
            <div className="flex-1 w-full max-w-2xl lg:max-w-none">
              <div className="bg-[#002d72] rounded-[1.5rem] aspect-[1.4/1] flex items-center justify-center shadow-2xl relative overflow-hidden group">
                {/* Stylized Coffee Cup / Abstract Logo */}
                <div className="relative transition-transform duration-700 group-hover:scale-110">
                  <svg width="180" height="180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 40 H75 V70 C75 85 60 85 50 85 C40 85 25 85 25 70 V40Z" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M75 45 H85 C90 45 90 60 85 60 H75" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M40 20 Q50 10 60 20" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.6">
                       <animate attributeName="d" values="M40 20 Q50 10 60 20; M40 15 Q50 25 60 15; M40 20 Q50 10 60 20" dur="3s" repeatCount="indefinite" />
                    </path>
                    <path d="M45 25 Q55 15 65 25" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.4">
                       <animate attributeName="d" values="M45 25 Q55 15 65 25; M45 20 Q55 30 65 20; M45 25 Q55 15 65 25" dur="3.5s" repeatCount="indefinite" />
                    </path>
                  </svg>
                </div>
                
                {/* Subtle light effect inside the card */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Navigation strip */}
      <div className="border-y border-gray-100 py-6 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[12px] font-black uppercase tracking-widest text-gray-400">
          <button onClick={onBackHome} className="flex items-center gap-2 hover:text-[#001fcc] transition-colors">
            <ArrowLeft className="w-4 h-4" /> Home
          </button>
          <div className="flex gap-4 items-center">
            <span>Case Studies</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#1a1b1f]">Coffee Roasters</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20">
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl font-black text-[#1a1b1f] tracking-tighter mb-12">
                Brewing Excellence through Digital Modernization
              </h2>
              <div className="space-y-8 text-gray-500 text-[19px] leading-relaxed font-medium">
                <p>
                  Our client, a rapidly expanding specialty coffee roaster, was struggling with outdated manual inventory systems that couldn't keep pace with their growing network of cafes and wholesale partners.
                </p>
                <p>
                  Waste levels were high, and roast profiles were often inconsistent due to a lack of centralized data logging. They needed a unified tech stack that could manage everything from bean sourcing to the final cup.
                </p>
                
                <div className="bg-[#f8f9fa] p-12 rounded-[3rem] border border-gray-100 my-16">
                  <h3 className="text-2xl font-black text-[#1a1b1f] mb-8 tracking-tight">Project Goals:</h3>
                  <ul className="grid sm:grid-cols-2 gap-6">
                    {[
                      'Automate roast profile logging',
                      'Real-time inventory forecasting',
                      'Unified POS & Wholesale portal',
                      'Reduce bean waste by 15%'
                    ].map((obj, i) => (
                      <li key={i} className="flex items-center gap-4 text-gray-800 font-bold">
                        <CheckCircle2 className="text-[#001fcc] shrink-0" size={24} />
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>

                <p>
                  Mind Manthan architected a custom IoT-enabled roastery management platform. By integrating with roasting hardware and implementing advanced predictive analytics, we enabled the client to achieve unprecedented consistency across their entire operation.
                </p>
              </div>
            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32 space-y-8">
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
                  <img loading="lazy" decoding="async" 
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop" 
                    alt="Barista at work"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                
                <div className="bg-[#1a1b1f] p-10 rounded-[2.5rem] text-white">
                  <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-500 mb-8">Solution Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {['IoT Sensors', 'React Web', 'Node.js', 'PostgreSQL', 'Machine Learning', 'AWS Lambda'].map(tech => (
                      <span key={tech} className="px-5 py-2 bg-white/5 rounded-full text-sm font-bold border border-white/10 hover:border-blue-500 transition-colors cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Blocks */}
      <section className="bg-[#f8faff] py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-[64px] font-black text-[#1a1b1f] tracking-tighter mb-8">
                Smart Operations
             </h2>
             <p className="text-gray-500 max-w-3xl mx-auto text-xl font-medium leading-relaxed">
                We delivered three core modules that transformed their roastery from a manual shop to a tech-driven enterprise.
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Roast Data Mining', 
                icon: <Settings size={40} />, 
                desc: 'Capturing roast curves in real-time and comparing them against the "Gold Standard" profile to ensure every batch is perfect.' 
              },
              { 
                title: 'Predictive Sourcing', 
                icon: <BarChart size={40} />, 
                desc: 'AI-driven forecasting that analyzes consumption patterns to automate green bean ordering, preventing stockouts.' 
              },
              { 
                title: 'Omni-channel Portal', 
                icon: <Coffee size={40} />, 
                desc: 'A single interface for both cafe managers and wholesale partners to place orders, track shipments, and manage accounts.' 
              }
            ].map((box, i) => (
              <div key={i} className="bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-50 group">
                <div className="text-[#001fcc] mb-8 group-hover:scale-110 transition-transform">{box.icon}</div>
                <h3 className="text-2xl font-black text-[#1a1b1f] mb-4 tracking-tight uppercase">{box.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-50">
                  <span className="block text-5xl font-black text-[#001fcc] mb-2">42%</span>
                  <span className="text-gray-700 font-bold text-sm uppercase tracking-widest">Efficiency Gain</span>
                </div>
                <div className="bg-[#1a1b1f] p-10 rounded-[3rem] text-white">
                  <span className="block text-5xl font-black mb-2">-18%</span>
                  <span className="text-gray-500 font-bold text-sm uppercase tracking-widest">Waste Reduction</span>
                </div>
                <div className="bg-white p-10 rounded-[3rem] col-span-2 flex items-center justify-between shadow-sm border border-gray-50">
                  <div>
                    <span className="block text-5xl font-black text-[#1a1b1f] mb-2">3x</span>
                    <span className="text-gray-400 font-bold text-sm uppercase tracking-widest">Production Capacity</span>
                  </div>
                  <TrendingUp size={64} className="text-[#001fcc] opacity-20" />
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-5xl md:text-7xl font-black text-[#1a1b1f] tracking-tighter mb-10 leading-[0.95]">
                From Beans to <br /> Big Data.
              </h2>
              <p className="text-gray-500 text-xl font-medium leading-relaxed mb-12">
                Technology shouldn't feel heavy. We built a solution that lives in the background of their craft, allowing the roasters to focus on flavor while the software handles the complexity of the global supply chain.
              </p>
              <button className="bg-[#001fcc] text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#0017a8] transition-all shadow-2xl shadow-blue-500/20">
                Discuss Your Vision
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[#1a1b1f] py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
           <div className="flex justify-center gap-1 mb-12">
             {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />)}
           </div>
           <blockquote className="text-3xl md:text-5xl font-bold text-white leading-[1.2] mb-16 tracking-tight">
             “Mind Manthan translated our roasting language into code perfectly. We finally have a system that supports our growth without compromising the quality of our craft. Our operational efficiency has reached levels we never thought possible.”
           </blockquote>
           <div className="flex flex-col items-center">
              <img loading="lazy" decoding="async" 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" 
                className="w-20 h-20 rounded-full object-cover mb-6 border-4 border-white/10"
                alt="Roastery CEO"
              />
              <h4 className="text-xl font-black text-white mb-1">Chief Operations Officer</h4>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Artisan Coffee Collective</p>
           </div>
        </div>
      </section>
    </div>
  );
};

// Internal utility component
const ArrowLeft = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
);

export default CoffeeCaseStudyPage;

