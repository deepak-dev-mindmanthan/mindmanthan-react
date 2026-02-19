import React from "react";
import { ShieldCheck, Lock, Eye, Database, Mail } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { CONTENT_CONFIG } from "../config/contentConfig";

interface PrivacyPolicyPageProps {
  onContactClick: () => void;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onContactClick }) => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-white pt-32 pb-8 md:pb-12 lg:pb-0 px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block px-3 py-1 bg-[#e8edff] rounded-md mb-8">
            <span className="text-[#001fcc] text-[11px] font-black uppercase tracking-[0.2em]">
              Legal
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#1a1b1f] leading-[1.05] tracking-tighter mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            This Privacy Policy explains how {CONTENT_CONFIG.company.legalName} collects, uses, stores, and protects personal data.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: February 19, 2026</p>
        </div>
      </section>

      <section className="py-12 md:py-18 lg:py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: <Database size={22} />, title: "Data Collection", desc: "Only data required to deliver services, support requests, and improve platform operations." },
            { icon: <Lock size={22} />, title: "Data Security", desc: "Access controls, encryption practices, and operational safeguards are applied to protect data." },
            { icon: <Eye size={22} />, title: "Data Transparency", desc: "We describe clearly what data is processed, why it is processed, and how long it is retained." },
          ].map((item) => (
            <div key={item.title} className="bg-[#f8faff] border border-gray-100 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#e8edff] text-[#001fcc] flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-[#1a1b1f] mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto space-y-10 text-gray-700">
          <div>
            <h2 className="text-3xl font-black text-[#1a1b1f] mb-3">1. Information We Collect</h2>
            <p>We may collect contact details (name, email, phone, company), project requirements, communication history, and technical usage data required for service delivery and support.</p>
          </div>
          <div>
            <h2 className="text-3xl font-black text-[#1a1b1f] mb-3">2. How We Use Information</h2>
            <p>Data is used to respond to inquiries, deliver projects, provide support, improve service quality, maintain security, and meet contractual or legal obligations.</p>
          </div>
          <div>
            <h2 className="text-3xl font-black text-[#1a1b1f] mb-3">3. Data Sharing</h2>
            <p>We do not sell personal data. We may share data with trusted service providers (for hosting, communication, analytics, and operations) under confidentiality and security obligations.</p>
          </div>
          <div>
            <h2 className="text-3xl font-black text-[#1a1b1f] mb-3">4. Data Retention</h2>
            <p>Data is retained only as long as necessary for service and compliance requirements. Retention periods may vary based on contractual, legal, and operational factors.</p>
          </div>
          <div>
            <h2 className="text-3xl font-black text-[#1a1b1f] mb-3">5. Your Rights</h2>
            <p>You may request access, correction, deletion, or clarification related to personal data processed by us, subject to applicable law and contractual requirements.</p>
          </div>
          <div>
            <h2 className="text-3xl font-black text-[#1a1b1f] mb-3">6. Contact</h2>
            <p className="flex items-center gap-2">
              <Mail size={16} className="text-[#001fcc]" />
              {SITE_CONFIG.business.email}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-18 lg:py-24 px-6 border-t border-gray-100 bg-[#f8faff]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-[#001fcc]" size={22} />
            <p className="text-gray-700 font-semibold">Need clarification on privacy or compliance terms?</p>
          </div>
          <button
            type="button"
            onClick={onContactClick}
            className="bg-[#001fcc] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#0015a8] transition-colors"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
