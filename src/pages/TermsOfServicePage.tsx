import React from "react";
import {
  FileText,
  Scale,
  Shield,
  AlertTriangle,
  Mail,
} from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { CONTENT_CONFIG } from "../config/contentConfig";

interface TermsOfServicePageProps {
  onContactClick: () => void;
}

const TermsOfServicePage: React.FC<TermsOfServicePageProps> = ({
  onContactClick,
}) => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-white pt-32 pb-8 lg:pb-0 px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block px-3 py-1 bg-[#e8edff] rounded-md mb-8">
            <span className="text-[#001fcc] text-[11px] font-black uppercase tracking-[0.2em]">
              Legal
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#1a1b1f] leading-[1.05] tracking-tighter mb-6">
            Terms of Service
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            These Terms govern use of {CONTENT_CONFIG.company.legalName}{" "}
            website and services. By using our website or engaging with our
            team, you agree to these terms.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: February 19, 2026</p>
        </div>
      </section>

      <section className="py-12 md:py-18 lg:pb-24 lg:pt-0 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: <FileText size={22} />,
              title: "Service Scope",
              desc: "Deliverables, timelines, and support scope are defined per proposal or contract.",
            },
            {
              icon: <Scale size={22} />,
              title: "Fair Use",
              desc: "Users must not misuse, disrupt, or attempt unauthorized access to systems or data.",
            },
            {
              icon: <Shield size={22} />,
              title: "IP & Ownership",
              desc: "Intellectual property and usage rights follow signed contractual terms.",
            },
            {
              icon: <AlertTriangle size={22} />,
              title: "Liability",
              desc: "Liability is limited as permitted by law and by project-specific agreements.",
            },
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
            <h2 className="text-3xl font-black text-[#1a1b1f] mb-3">1. Acceptance of Terms</h2>
            <p>
              Accessing this website or using our services means you accept
              these Terms and applicable laws. If you do not agree, do not use
              the website or services.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black text-[#1a1b1f] mb-3">2. Service Engagement</h2>
            <p>
              Project scope, timelines, fees, and deliverables are defined in
              signed proposals, statements of work, or contracts. Contract
              terms prevail where more specific.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black text-[#1a1b1f] mb-3">3. Client Responsibilities</h2>
            <p>
              Clients must provide accurate requirements, timely approvals, and
              required access to systems, data, and decision-makers to maintain
              delivery timelines.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black text-[#1a1b1f] mb-3">4. Intellectual Property</h2>
            <p>
              Ownership and licensing of source code, designs, and related
              assets are defined by contract. Pre-existing frameworks, tools,
              and third-party components remain subject to their original
              licenses.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black text-[#1a1b1f] mb-3">5. Warranties and Liability</h2>
            <p>
              Services are provided with commercially reasonable care. To the
              extent allowed by law, indirect or consequential damages are
              excluded and total liability is limited per contract.
            </p>
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
          <p className="text-gray-700 font-semibold">
            Questions about contracts, usage, or legal terms?
          </p>
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

export default TermsOfServicePage;
