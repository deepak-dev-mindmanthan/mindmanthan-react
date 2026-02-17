import React from 'react';
import { ChevronRight } from 'lucide-react';
import { CONTENT_CONFIG } from '../config/contentConfig';

interface CloudDevopsCaseStudyPageProps {
  onBackHome: () => void;
}

const CloudDevopsCaseStudyPage: React.FC<CloudDevopsCaseStudyPageProps> = ({ onBackHome }) => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-white pt-40 pb-20 px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block px-3 py-1 bg-[#f1f5f9] rounded-md mb-8">
            <span className="text-[#64748b] text-[11px] font-black uppercase tracking-[0.2em]">Cloud &amp; DevOps</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#1a1b1f] leading-[1.05] tracking-tighter mb-8">
            Infrastructure Modernization
            <br />
            with CI/CD and Observability
            <br />
            for Enterprise Delivery
          </h1>
          <p className="text-gray-500 max-w-3xl text-lg">
            {CONTENT_CONFIG.company.shortName} migrated legacy deployments to cloud-native pipelines with release automation and production-grade monitoring.
          </p>
        </div>
      </section>

      <div className="border-y border-gray-100 py-6 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[12px] font-black uppercase tracking-widest text-gray-400">
          <button onClick={onBackHome} className="hover:text-[#001fcc] transition-colors">Home</button>
          <div className="flex gap-4 items-center">
            <span>Case Studies</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#1a1b1f]">Cloud DevOps Modernization</span>
          </div>
        </div>
      </div>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-black text-[#1a1b1f] mb-8">Key Work Delivered</h2>
            <ul className="space-y-4 text-gray-600 text-lg">
              <li>Cloud migration planning, environment hardening, and infra-as-code setup</li>
              <li>CI/CD pipelines for automated build, test, and production deployment</li>
              <li>Containerization strategy with rollback-ready release workflows</li>
              <li>Centralized logging, metrics dashboards, and SLA alerting</li>
              <li>Cost optimization and uptime improvements through architecture tuning</li>
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-lg">
            <img loading="lazy" decoding="async"
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
              alt="Cloud and DevOps monitoring dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudDevopsCaseStudyPage;




