import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ApiIntegrationCaseStudyPageProps {
  onBackHome: () => void;
}

const ApiIntegrationCaseStudyPage: React.FC<ApiIntegrationCaseStudyPageProps> = ({ onBackHome }) => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-white pt-40 pb-20 px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block px-3 py-1 bg-[#f1f5f9] rounded-md mb-8">
            <span className="text-[#64748b] text-[11px] font-black uppercase tracking-[0.2em]">API Integration</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#1a1b1f] leading-[1.05] tracking-tighter mb-8">
            Multi-System API Hub
            <br />
            for Payments, Notifications,
            <br />
            and Partner Integrations
          </h1>
          <p className="text-gray-500 max-w-3xl text-lg">
            We unified fragmented third-party integrations into a secure API orchestration layer with monitoring and audit-ready logs.
          </p>
        </div>
      </section>

      <div className="border-y border-gray-100 py-6 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[12px] font-black uppercase tracking-widest text-gray-400">
          <button onClick={onBackHome} className="hover:text-[#001fcc] transition-colors">Home</button>
          <div className="flex gap-4 items-center">
            <span>Case Studies</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#1a1b1f]">API Integration Hub</span>
          </div>
        </div>
      </div>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-black text-[#1a1b1f] mb-8">Solution Highlights</h2>
            <ul className="space-y-4 text-gray-600 text-lg">
              <li>Custom middleware for payment, CRM, ERP, and communication APIs</li>
              <li>Token management, rate limiting, and encrypted payload handling</li>
              <li>Real-time retries, queueing, and fallback logic for resilience</li>
              <li>Centralized integration dashboard with webhook traceability</li>
              <li>Operational runbooks and support model for long-term stability</li>
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-lg">
            <img loading="lazy" decoding="async"
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
              alt="API integration analytics dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApiIntegrationCaseStudyPage;
