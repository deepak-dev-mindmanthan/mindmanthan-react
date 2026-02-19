import React from "react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import CommonContactForm from "../components/CommonContactForm";
import { CONTENT_CONFIG } from "../config/contentConfig";
import { getCaseStudyById } from "../data/caseStudies";

interface CaseStudyDetailPageProps {
  caseStudyId: string;
  onBackHome: () => void;
}

const CaseStudyDetailPage: React.FC<CaseStudyDetailPageProps> = ({
  caseStudyId,
  onBackHome,
}) => {
  const caseStudy = getCaseStudyById(caseStudyId);

  if (!caseStudy) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6 text-center">
        <div>
          <h1 className="text-3xl font-black text-[#1a1b1f] mb-4">
            Case Study Not Found
          </h1>
          <button
            type="button"
            onClick={onBackHome}
            className="bg-[#001fcc] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#0015a8] transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-white pt-32 pb-8 md:pb-12 lg:pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#001fcc] transition-colors mb-8 mr-4"
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>

          <div className="inline-block px-3 py-1 bg-[#f1f5f9] rounded-md mb-8">
            <span className="text-[#64748b] text-[11px] font-black uppercase tracking-[0.2em]">
              {caseStudy.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-[#1a1b1f] leading-[1.05] tracking-tighter mb-8">
            {caseStudy.title}
          </h1>
          <p className="text-gray-500 max-w-3xl text-lg">{caseStudy.heroDescription}</p>
        </div>
      </section>

      <section className="py-12 md:py-18 lg:py-24 px-6 bg-[#f8faff] border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {caseStudy.metrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
            >
              <div className="text-4xl md:text-5xl font-black text-[#001fcc] mb-3">
                {metric.value}
              </div>
              <p className="text-gray-600 font-semibold">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-18 lg:py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-black text-[#1a1b1f] mb-8">
              {caseStudy.scopeTitle}
            </h2>
            <ul className="space-y-4 text-gray-600 text-lg">
              {caseStudy.scopeItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#001fcc] mt-1 shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-lg min-h-[420px]">
            <img
              loading="lazy"
              decoding="async"
              src={caseStudy.image}
              alt={caseStudy.listTitle}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-18 lg:py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { title: "Challenge", content: caseStudy.challenge },
            { title: "Solution", content: caseStudy.solution },
            { title: "Outcome", content: caseStudy.outcome },
          ].map((item) => (
            <div key={item.title} className="bg-[#f8fafc] rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-black text-[#1a1b1f] mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-18 lg:py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-black text-[#1a1b1f] mb-8">
            Tech Stack Highlights
          </h3>
          <div className="flex flex-wrap gap-3">
            {caseStudy.techStack.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2 rounded-full bg-[#e8edff] text-[#001fcc] text-sm font-bold uppercase tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-8 md:pb-12 lg:pb-24 pt-8 md:pt-16" data-consultation-form>
        <div className="max-w-7xl mx-auto rounded-[2rem] overflow-hidden shadow-xl grid lg:grid-cols-2">
          <div className="bg-[#1a1b1f] p-12 text-white">
            <h2 className="text-4xl font-black mb-6">Need a Similar Solution?</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              We can build your software platform with secure architecture, measurable milestones, and long-term support.
            </p>
            <button
              type="button"
              onClick={onBackHome}
              className="bg-[#001fcc] px-6 py-3 rounded-lg font-bold hover:bg-[#0015a8] transition-colors"
            >
              Talk to Our Team
            </button>
          </div>
          <div className="bg-white">
            <CommonContactForm
              formType={`case_study_${caseStudy.id}`}
              title={CONTENT_CONFIG.cta.scheduleConsultation}
              subtitle=""
              buttonText="Send Request"
              showFirstLastName={true}
              showServiceInterest={true}
              showCompanyName={true}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetailPage;
