import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Zap, Star, ChevronRight, Map, Shield, Cpu, Activity, Globe } from 'lucide-react';

interface LondonTravelCaseStudyPageProps {
  onBackHome: () => void;
}

const LondonTravelCaseStudyPage: React.FC<LondonTravelCaseStudyPageProps> = ({ onBackHome }) => {
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
                  AI Implementation
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-[68px] font-black text-[#1a1b1f] leading-[1.05] tracking-tighter mb-10">
                Strategic Move to an <br />
                AI-supported application <br />
                for Public Safety <br />
                Travel App in London
              </h1>
              
              <div className="flex flex-col gap-1">
                <span className="text-[14px] font-medium text-gray-400">
                  Industry: Public Sector & Smart City
                </span>
              </div>
            </div>

            {/* Right Visual Column (The Blue Card) */}
            <div className="flex-1 w-full max-w-2xl lg:max-w-none">
              <div className="bg-[#002d72] rounded-[1.5rem] aspect-[1.4/1] flex items-center justify-center shadow-2xl relative overflow-hidden group">
                {/* Stylized London / AI / Safety Logo */}
                <div className="relative transition-transform duration-700 group-hover:scale-110">
                  <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Abstract London Bridge / Tech Hybrid */}
                    <path d="M20 70 L40 40 L60 40 L80 70" stroke="white" strokeWidth="5" strokeLinecap="round" />
                    <path d="M30 70 L30 55 M70 70 L70 55" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.6" />
                    <circle cx="50" cy="30" r="15" stroke="white" strokeWidth="5" />
                    <circle cx="50" cy="30" r="5" fill="white">
                       <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite" />
                    </circle>
                    {/* Pulsing Nodes */}
                    <circle cx="20" cy="70" r="3" fill="white" />
                    <circle cx="80" cy="70" r="3" fill="white" />
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
            <span className="text-[#1a1b1f]">London Smart City</span>
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
                Enhancing Urban Safety through Deep Learning
              </h2>
              <div className="space-y-8 text-gray-500 text-[19px] leading-relaxed font-medium">
                <p>
                  London's transit network is one of the densest in the world. Our client, a public safety organization, recognized a critical need for an AI-driven solution to manage passenger safety and emergency response times across the city's vast underground and surface networks.
                </p>
                <p>
                  Legacy systems relied on manual reporting and delayed surveillance feedback. The goal was to build a proactive, real-time application that could predict potential safety hazards and provide users with optimized "safe routes" during late-night travel or high-congestion periods.
                </p>
                
                <div className="bg-[#f8f9fa] p-12 rounded-[3rem] border border-gray-100 my-16">
                  <h3 className="text-2xl font-black text-[#1a1b1f] mb-8 tracking-tight">Project Goals:</h3>
                  <ul className="grid sm:grid-cols-2 gap-6">
                    {[
                      'Real-time threat detection',
                      'Crowd density management',
                      'Automated emergency routing',
                      'Predictive safety analytics'
                    ].map((obj, i) => (
                      <li key={i} className="flex items-center gap-4 text-gray-800 font-bold">
                        <CheckCircle2 className="text-[#001fcc] shrink-0" size={24} />
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>

                <p>
                  Mind Manthan engineered a multi-layered AI application that integrates with London's public API network and specialized IoT sensors. By leveraging computer vision and sentiment analysis of real-time reports, the platform provides users with an unparalleled level of safety awareness.
                </p>
              </div>
            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32 space-y-8">
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
                  <img loading="lazy" decoding="async" 
                    src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop" 
                    alt="London Cityscape at night"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                
                <div className="bg-[#1a1b1f] p-10 rounded-[2.5rem] text-white">
                  <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-500 mb-8">System Architecture</h4>
                  <div className="flex flex-wrap gap-3">
                    {['Computer Vision', 'PyTorch', 'AWS SageMaker', 'Kafka', 'React Native', 'Redis'].map(tech => (
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
                Smart Urban Safety
             </h2>
             <p className="text-gray-500 max-w-3xl mx-auto text-xl font-medium leading-relaxed">
                We delivered three core AI modules that transformed urban navigation into a data-driven safety ecosystem.
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Predictive Mapping', 
                icon: <Map size={40} />, 
                desc: 'Utilizing historical crime and accident data to map the safest possible pedestrian routes in real-time.' 
              },
              { 
                title: 'Incident Analysis', 
                icon: <Activity size={40} />, 
                desc: 'AI-driven sentiment analysis of social feeds and local reports to identify potential urban hazards instantly.' 
              },
              { 
                title: 'SafeGuard Hub', 
                icon: <Shield size={40} />, 
                desc: 'A direct-to-authority emergency link with location-precise telemetry for rapid intervention.' 
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
                  <span className="block text-5xl font-black text-[#001fcc] mb-2">-40%</span>
                  <span className="text-gray-700 font-bold text-sm uppercase tracking-widest">Response Latency</span>
                </div>
                <div className="bg-[#1a1b1f] p-10 rounded-[3rem] text-white">
                  <span className="block text-5xl font-black mb-2">2.5M</span>
                  <span className="text-gray-500 font-bold text-sm uppercase tracking-widest">Monthly Users</span>
                </div>
                <div className="bg-white p-10 rounded-[3rem] col-span-2 flex items-center justify-between shadow-sm border border-gray-50">
                  <div>
                    <span className="block text-5xl font-black text-[#1a1b1f] mb-2">99.9%</span>
                    <span className="text-gray-400 font-bold text-sm uppercase tracking-widest">System Uptime</span>
                  </div>
                  <TrendingUp size={64} className="text-[#001fcc] opacity-20" />
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-5xl md:text-7xl font-black text-[#1a1b1f] tracking-tighter mb-10 leading-[0.95]">
                Tech for <br /> Human Good.
              </h2>
              <p className="text-gray-500 text-xl font-medium leading-relaxed mb-12">
                By integrating complex AI models into a simple, user-friendly interface, we helped make London a safer place to navigate for everyone.
              </p>
              <button className="bg-[#001fcc] text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#0017a8] transition-all shadow-2xl shadow-blue-500/20">
                Partner with us
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
             “Mind Manthan's team translated urban complexity into a digital lifeline. London's public safety framework is now years ahead of where it was, thanks to their strategic AI implementation. They are truly world-class engineers.”
           </blockquote>
           <div className="flex flex-col items-center">
              <img loading="lazy" decoding="async" 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" 
                className="w-20 h-20 rounded-full object-cover mb-6 border-4 border-white/10"
                alt="Smart City Director"
              />
              <h4 className="text-xl font-black text-white mb-1">Director of Public Innovation</h4>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Greater London Authority Partner</p>
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

export default LondonTravelCaseStudyPage;

