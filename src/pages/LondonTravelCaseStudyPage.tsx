import React from 'react';
import { ChevronRight } from 'lucide-react';

interface LondonTravelCaseStudyPageProps {
  onBackHome: () => void;
}

const LondonTravelCaseStudyPage: React.FC<LondonTravelCaseStudyPageProps> = ({ onBackHome }) => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-white pt-40 pb-20 px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block px-3 py-1 bg-[#f1f5f9] rounded-md mb-8">
            <span className="text-[#64748b] text-[11px] font-black uppercase tracking-[0.2em]">Apps + Websites</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#1a1b1f] leading-[1.05] tracking-tighter mb-8">
            Unified Booking Website
            <br />
            and Mobile App Platform
            <br />
            for Travel Operations
          </h1>
          <p className="text-gray-500 max-w-3xl text-lg">
            Mind Manthan delivered a full digital platform with website, mobile apps, admin panel, and API integrations.
          </p>
        </div>
      </section>

      <div className="border-y border-gray-100 py-6 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[12px] font-black uppercase tracking-widest text-gray-400">
          <button onClick={onBackHome} className="hover:text-[#001fcc] transition-colors">Home</button>
          <div className="flex gap-4 items-center">
            <span>Case Studies</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#1a1b1f]">Travel Platform</span>
          </div>
        </div>
      </div>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-black text-[#1a1b1f] mb-8">Implementation Scope</h2>
            <ul className="space-y-4 text-gray-600 text-lg">
              <li>SEO-optimized corporate website and booking flows</li>
              <li>Android and iOS applications with real-time updates</li>
              <li>Custom admin panels for operations, support, and reporting</li>
              <li>Payment gateway and third-party API integrations</li>
              <li>CI/CD pipeline, observability setup, and ongoing maintenance</li>
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-lg">
            <img loading="lazy" decoding="async"
              src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1200&auto=format&fit=crop"
              alt="Travel app and web platform"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LondonTravelCaseStudyPage;

