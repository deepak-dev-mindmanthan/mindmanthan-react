import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Database, Shield, Zap, Calendar, Users, Briefcase, ChevronRight, Star } from 'lucide-react';

interface InsuranceCaseStudyPageProps {
  onBackHome: () => void;
}

const InsuranceCaseStudyPage: React.FC<InsuranceCaseStudyPageProps> = ({ onBackHome }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Updated Hero Banner to match provided screenshot */}
      <section className="bg-white pt-40 pb-20 px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Content Column */}
            <div className="flex-1 text-left">
              <div className="inline-block px-3 py-1 bg-[#f1f5f9] rounded-md mb-8">
                <span className="text-[#64748b] text-[11px] font-black uppercase tracking-[0.2em]">
                  Cloud Hosting
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-[68px] font-black text-[#1a1b1f] leading-[1.05] tracking-tighter mb-10">
                Major Insurance <br />
                Provider Saves $750k <br />
                per Month With Big <br />
                Data Migration
              </h1>
              
              <div className="flex flex-col gap-1">
                <span className="text-[14px] font-medium text-gray-400">
                  Industry: Banks & Insurance
                </span>
              </div>
            </div>

            {/* Right Visual Column (The Blue Card) */}
            <div className="flex-1 w-full max-w-2xl lg:max-w-none">
              <div className="bg-[#002d72] rounded-[1.5rem] aspect-[1.4/1] flex items-center justify-center shadow-2xl relative overflow-hidden group">
                {/* Stylized Logo approximation from the image */}
                <svg width="180" height="180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-700 group-hover:scale-110">
                  <path d="M40 30 C40 30 45 40 45 75" stroke="white" strokeWidth="12" strokeLinecap="round"/>
                  <path d="M55 25 C55 25 60 40 60 78" stroke="white" strokeWidth="12" strokeLinecap="round"/>
                  <path d="M70 20 C70 20 75 40 75 82" stroke="white" strokeWidth="12" strokeLinecap="round"/>
                  <path d="M25 80 Q25 40 40 30" stroke="white" strokeWidth="12" strokeLinecap="round"/>
                </svg>
                
                {/* Subtle light effect inside the card */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Navigation strip immediately after hero */}
      <div className="border-y border-gray-100 py-6 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[12px] font-black uppercase tracking-widest text-gray-400">
          <button onClick={onBackHome} className="flex items-center gap-2 hover:text-[#001fcc] transition-colors">
            <ArrowLeft className="w-4 h-4" /> Home
          </button>
          <div className="flex gap-4 items-center">
            <span>Case Studies</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#1a1b1f]">Insurance Provider</span>
          </div>
        </div>
      </div>

      {/* Rest of the high-fidelity case study content */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20">
            {/* Main Narrative */}
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl font-black text-[#1a1b1f] tracking-tighter mb-12">
                The Challenge of Scaling Legacy Infrastructure
              </h2>
              <div className="space-y-8 text-gray-500 text-[19px] leading-relaxed font-medium">
                <p>
                  As one of the nation's leading insurance providers, our client faced a critical technical bottleneck. Their legacy data infrastructure, built over two decades, was struggling to process the massive influx of real-time claims data.
                </p>
                <p>
                  The manual overhead required to maintain these monolithic systems was costing the organization over $1.2 million per month in redundant labor and specialized cloud maintenance fees.
                </p>
                
                <div className="bg-[#f8f9fa] p-12 rounded-[3rem] border border-gray-100 my-16">
                  <h3 className="text-2xl font-black text-[#1a1b1f] mb-8 tracking-tight">Key Objectives:</h3>
                  <ul className="grid sm:grid-cols-2 gap-6">
                    {[
                      'Eliminate data redundancy silos',
                      'Reduce monthly operational spend',
                      'Implement real-time risk analytics',
                      'Ensure SOC2 & HIPAA compliance'
                    ].map((obj, i) => (
                      <li key={i} className="flex items-center gap-4 text-gray-800 font-bold">
                        <CheckCircle2 className="text-[#001fcc] shrink-0" size={24} />
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>

                <p>
                  Mind Manthan was brought in to architect and execute a complete Big Data Migration. The goal was simple but ambitious: migrate 150TB of structured and unstructured data to a modern, serverless cloud environment without a single second of service disruption.
                </p>
              </div>
            </div>

            {/* Sticky Sidebar Info */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32 space-y-8">
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" 
                    alt="Data Visualization Dashboard"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                
                <div className="bg-[#1a1b1f] p-10 rounded-[2.5rem] text-white">
                  <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-500 mb-8">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {['Apache Spark', 'AWS Glue', 'Snowflake', 'Python', 'Kubernetes', 'Terraform'].map(tech => (
                      <span key={tech} className="px-5 py-2 bg-white/5 rounded-full text-sm font-bold border border-white/10 hover:border-blue-500 transition-colors cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-8 border-2 border-dashed border-gray-200 rounded-[2.5rem] flex flex-col items-center text-center">
                  <p className="text-gray-400 font-black text-[11px] uppercase tracking-widest mb-6">Need similar results?</p>
                  <button className="text-[#001fcc] font-black text-lg hover:text-black transition-colors flex items-center gap-2">
                    Let's talk about your data <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Impact / Results Section */}
      <section className="py-32 px-6 bg-[#f8faff] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-50">
                  <span className="block text-5xl font-black text-[#001fcc] mb-2">$750k</span>
                  <span className="text-gray-700 font-bold text-sm uppercase tracking-widest">Monthly Savings</span>
                </div>
                <div className="bg-[#1a1b1f] p-10 rounded-[3rem] text-white">
                  <span className="block text-5xl font-black mb-2">0ms</span>
                  <span className="text-gray-500 font-bold text-sm uppercase tracking-widest">Migration Downtime</span>
                </div>
                <div className="bg-white p-10 rounded-[3rem] col-span-2 flex items-center justify-between shadow-sm border border-gray-50">
                  <div>
                    <span className="block text-5xl font-black text-[#1a1b1f] mb-2">300%</span>
                    <span className="text-gray-400 font-bold text-sm uppercase tracking-widest">Processing Velocity</span>
                  </div>
                  <TrendingUp size={64} className="text-[#001fcc] opacity-20" />
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-5xl md:text-7xl font-black text-[#1a1b1f] tracking-tighter mb-10 leading-[0.95]">
                Real ROI for <br /> Real Enterprise.
              </h2>
              <p className="text-gray-500 text-xl font-medium leading-relaxed mb-12">
                By moving away from on-premise hardware to a modern serverless Big Data stack, the client was able to re-allocate $9 million in annual operational budget toward product innovation and customer acquisition.
              </p>
              <button className="bg-[#001fcc] text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#0017a8] transition-all shadow-2xl shadow-blue-500/20">
                View Similar Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial specifically for this project */}
      <section className="bg-[#1a1b1f] py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
           <div className="flex justify-center gap-1 mb-12">
             {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />)}
           </div>
           <blockquote className="text-3xl md:text-5xl font-bold text-white leading-[1.2] mb-16 tracking-tight">
             “Mind Manthan's team didn't just deliver a technical migration; they delivered a business transformation. The cost savings were immediate, but the real value was the agility we gained in our risk processing departments.”
           </blockquote>
           <div className="flex flex-col items-center">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" 
                className="w-20 h-20 rounded-full object-cover mb-6 border-4 border-white/10"
                alt="Client Portrait"
              />
              <h4 className="text-xl font-black text-white mb-1">Director of Enterprise Infrastructure</h4>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Top 10 US Insurance Provider</p>
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

export default InsuranceCaseStudyPage;