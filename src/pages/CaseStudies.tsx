import React, { useState } from 'react';
import { CheckCircle2, Search } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  bgColor: string;
}

const PROJECTS: Project[] = [
  { id: '1', title: 'Scuola', category: 'Mobile App', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=90&w=1600&auto=format&fit=crop', bgColor: '#e0e7ff' },
  { id: '2', title: 'Jolie.', category: 'Software', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=90&w=1600&auto=format&fit=crop', bgColor: '#fdf6e3' },
  { id: '3', title: 'Skole', category: 'Web App', image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=90&w=1600&auto=format&fit=crop', bgColor: '#1a1b1f' },
  { id: '4', title: 'Fintech Pro', category: 'Mobile App', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=90&w=1600&auto=format&fit=crop', bgColor: '#ecfdf5' },
  { id: '5', title: 'HealthTrack', category: 'Software', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=90&w=1600&auto=format&fit=crop', bgColor: '#fff1f2' },
  { id: '6', title: 'CloudSync', category: 'Cloud', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=90&w=1600&auto=format&fit=crop', bgColor: '#f0f9ff' },
];

const CATEGORIES = ['All', 'Mobile App', 'Web App', 'Software', 'Cloud'];

interface CaseStudiesProps {
  onBackHome: () => void;
  onNavigateHome?: () => void;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ onBackHome, onNavigateHome }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  const benefits = [
    "Client-oriented",
    "Results-driven",
    "Independent",
    "Problem-solving",
    "Competent",
    "Transparent"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section with Premium Styling */}
      <section className="bg-[#f8fafc] pt-40 pb-20 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block px-3 py-1 bg-[#e8edff] rounded-md mb-6">
            <span className="text-[#001fcc] text-[11px] font-black uppercase tracking-[0.2em]">
              Our Work
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-[#1a1b1f] tracking-tighter leading-[0.9]">
            Portfolio & <br /> Case Studies
          </h1>
        </div>
      </section>

      {/* Filter Bar with more premium spacing */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-8">
          <div className="flex flex-wrap gap-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-8 py-3 rounded-full text-[13px] font-black uppercase tracking-widest transition-all duration-300 border shadow-sm ${
                  activeFilter === cat 
                  ? 'bg-[#001fcc] text-white border-[#001fcc]' 
                  : 'bg-white text-gray-500 border-gray-100 hover:border-[#001fcc] hover:text-[#001fcc]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="hidden md:flex items-center gap-3 text-gray-400 font-bold text-sm">
             <Search size={18} />
             <span>Refine by industry</span>
          </div>
        </div>
      </section>

      {/* Projects Grid with enhanced card interactions */}
      <section className="pb-40 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div 
                className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 transition-all duration-500 shadow-md group-hover:shadow-2xl group-hover:-translate-y-2 border border-gray-50"
                style={{ backgroundColor: project.bgColor }}
              >
                <img loading="lazy" decoding="async" 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                
                {/* Modern Hover Overlay */}
                <div className="absolute inset-0 bg-[#001fcc]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#1a1b1f] shadow-2xl">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l10-10M7 7h10v10"/></svg>
                  </div>
                </div>
              </div>
              
              <div className="px-4">
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-400 block mb-3">{project.category}</span>
                <h3 className="text-3xl font-black text-[#1a1b1f] group-hover:text-[#001fcc] transition-colors tracking-tight">{project.title}</h3>
                <p className="mt-4 text-gray-500 font-medium leading-relaxed line-clamp-2">
                  Delivering technical innovation and measurable business value through custom engineering.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Section */}
      <section className="bg-white px-6 pb-40">
        <div className="max-w-7xl mx-auto rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[850px]">
          
          <div className="flex-1 flex flex-col">
            <div className="bg-[#1a1b1f] p-16 md:p-24">
              <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tighter">
                Partner with Us <br /> for Comprehensive <br /> IT Solutions
              </h2>
            </div>
            <div className="bg-[#e8edff] flex-1 p-16 md:p-24">
              <p className="text-[#1a1b1f] text-xl font-medium mb-16 max-w-md leading-relaxed opacity-80">
                We're happy to answer any questions you may have and help you determine which of our services best fit your needs.
              </p>
              
              <div className="mb-20">
                <span className="text-[#1a1b1f] text-[12px] font-black uppercase tracking-[0.3em] block mb-4 opacity-40">Direct Line</span>
                <a href={`tel:${SITE_CONFIG.business.altPhoneHref}`} className="text-[#1a1b1f] text-4xl font-black hover:text-[#001fcc] transition-colors tracking-tighter">{SITE_CONFIG.business.altPhone}</a>
              </div>

              <div>
                <h4 className="text-[#1a1b1f] text-lg font-black uppercase tracking-widest mb-10 opacity-40">Your benefits:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-4">
                      <div className="w-6 h-6 bg-[#001fcc] rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-[#1a1b1f] font-black text-lg tracking-tight">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-white p-16 md:p-24" data-consultation-form>
            <div className="text-center mb-16">
              <h3 className="text-[#1a1b1f] text-4xl font-black mb-4 tracking-tighter">Schedule a Free Consultation</h3>
              <div className="flex justify-center">
                <div className="w-16 h-1 bg-[#001fcc] rounded-full"></div>
              </div>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="case-first-name" className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-3">First name</label>
                  <input aria-label="Form field" id="case-first-name" type="text" className="w-full px-6 py-5 bg-[#f8fafc] border-none rounded-xl focus:ring-2 focus:ring-[#001fcc] outline-none transition-all font-bold" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="case-last-name" className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-3">Last name</label>
                  <input aria-label="Form field" id="case-last-name" type="text" className="w-full px-6 py-5 bg-[#f8fafc] border-none rounded-xl focus:ring-2 focus:ring-[#001fcc] outline-none transition-all font-bold" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label htmlFor="case-company" className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-3">Company</label>
                <input aria-label="Form field" id="case-company" type="text" className="w-full px-6 py-5 bg-[#f8fafc] border-none rounded-xl focus:ring-2 focus:ring-[#001fcc] outline-none transition-all font-bold" placeholder="Organization name" />
              </div>

              <div>
                <label htmlFor="case-email" className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-3">Email</label>
                <input aria-label="Form field" id="case-email" type="email" className="w-full px-6 py-5 bg-[#f8fafc] border-none rounded-xl focus:ring-2 focus:ring-[#001fcc] outline-none transition-all font-bold" placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="case-service-interest" className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-3">Service Interest</label>
                <select aria-label="Form selection" id="case-service-interest" className="w-full px-6 py-5 bg-[#f8fafc] border-none rounded-xl focus:ring-2 focus:ring-[#001fcc] outline-none transition-all font-bold appearance-none cursor-pointer">
                  <option>Select Option</option>
                  <option>Cloud Infrastructure</option>
                  <option>Mobile App Development</option>
                  <option>Web Platform Engineering</option>
                  <option>Security Audit</option>
                </select>
              </div>

              <div>
                <label htmlFor="case-message" className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-3">Message</label>
                <textarea aria-label="Form message" id="case-message" rows={5} placeholder="Describe your technical needs..." className="w-full px-6 py-5 bg-[#f8fafc] border-none rounded-xl focus:ring-2 focus:ring-[#001fcc] outline-none transition-all font-bold resize-none"></textarea>
              </div>

              <button type="button" onClick={onNavigateHome} className="w-full py-6 bg-[#001fcc] text-white font-black text-lg uppercase tracking-widest rounded-2xl hover:bg-[#0017a8] active:scale-95 transition-all shadow-2xl shadow-blue-500/30 cursor-pointer">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;


