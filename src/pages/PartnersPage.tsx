import React from 'react';
import { Award, Cloud, ShieldCheck, Link2, Cpu } from 'lucide-react';
import { CONTENT_CONFIG } from '../config/contentConfig';

interface PartnersPageProps {
  onBackHome: () => void;
}

const PartnersPage: React.FC<PartnersPageProps> = ({ onBackHome }) => {
  const partners = [
    { name: 'AWS Partner Network', icon: <Cloud size={28} /> },
    { name: 'Microsoft Azure', icon: <Cloud size={28} /> },
    { name: 'Google Cloud', icon: <Cloud size={28} /> },
    { name: 'Stripe', icon: <Link2 size={28} /> },
    { name: 'Twilio', icon: <Link2 size={28} /> },
    { name: 'MongoDB', icon: <Cpu size={28} /> },
  ];

  const certifications = [
    'Cloud Architecture & Migration',
    'Security & Compliance Readiness',
    'DevOps & CI/CD Excellence',
    'API Integration & Reliability',
    'Performance Engineering'
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-white text-center py-20 lg:py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm uppercase tracking-widest text-gray-500 mb-8 font-medium">Partners & Certifications</div>
          <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6 text-[#1a1b1f]">
            Trusted by leading platforms
          </h1>
          <p className="text-xl text-gray-600">
            We collaborate with top cloud, security, and tooling partners to deliver enterprise-grade outcomes.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-[#f8faff]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div key={partner.name} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#e8edff] text-[#001fcc] flex items-center justify-center mb-6">
                  {partner.icon}
                </div>
                <h3 className="text-xl font-black text-[#1a1b1f] mb-2">{partner.name}</h3>
                <p className="text-gray-600">
                  Integrated solutions, proven scalability, and support for critical systems.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1a1b1f] mb-6 tracking-tight">
              Certifications that validate delivery
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Our team maintains certifications that ensure secure, compliant, and performance-driven project execution.
            </p>
            <ul className="space-y-5">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-start gap-4 text-gray-700 font-medium">
                  <Award className="text-[#001fcc] mt-1" size={22} />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#1a1b1f] text-white rounded-[2.5rem] p-10 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="text-[#e8edff]" size={28} />
              <span className="text-sm uppercase tracking-widest text-white/70 font-bold">Quality & Compliance</span>
            </div>
            <h3 className="text-3xl font-black mb-4">Enterprise readiness</h3>
            <p className="text-white/70 leading-relaxed mb-8">
              Security reviews, audit trails, and operational controls are part of every delivery plan.
            </p>
            <div className="text-white font-bold">{CONTENT_CONFIG.company.shortName} delivery assurance</div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-black text-[#1a1b1f] mb-6 tracking-tight">
            Build with a certified delivery partner
          </h3>
          <p className="text-gray-600 text-lg mb-10">
            We align to your technology stack, compliance requirements, and operational goals.
          </p>
          <button
            onClick={onBackHome}
            className="bg-[#001fcc] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#0015a8] transition-colors"
          >
            Back to Home
          </button>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
