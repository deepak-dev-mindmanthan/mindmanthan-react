import React from 'react';
import { CheckCircle2, Bot, Workflow, ShieldCheck, Database, Radar, Puzzle, LineChart } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import CommonContactForm from '../components/CommonContactForm';

interface AiAutomationPageProps {
  onBackHome: () => void;
}

const AiAutomationPage: React.FC<AiAutomationPageProps> = ({ onBackHome }) => {
  const deliveryPoints = [
    'OpenAI, Gemini, and Claude API integration with secure key strategy',
    'AI assistants and copilots for operations, support, and sales workflows',
    'RAG pipelines with governed knowledge retrieval',
    'Workflow automation across CRM, ERP, ticketing, and internal tools',
    'Prompt design, guardrails, evaluation, and observability',
    'Performance tuning, cost control, and lifecycle support'
  ];

  const processPillars = [
    {
      title: 'Model Integration Layer',
      description: 'Abstract multiple LLM providers behind a stable integration layer with routing, fallback, and error handling.',
      icon: <Bot size={24} />
    },
    {
      title: 'Automation Orchestration',
      description: 'Connect AI decisions to real actions through workflow engines, webhooks, event queues, and API connectors.',
      icon: <Workflow size={24} />
    },
    {
      title: 'Security and Governance',
      description: 'Apply access control, PII protection, output checks, and audit-ready logging for enterprise-safe operation.',
      icon: <ShieldCheck size={24} />
    }
  ];

  const serviceCards = [
    {
      title: 'OpenAI Integration',
      description: 'Implement chat, reasoning, and completion workflows using robust prompt and tool orchestration patterns.'
    },
    {
      title: 'Gemini Integration',
      description: 'Enable multimodal and workflow-aware AI use cases with structured APIs and production error controls.'
    },
    {
      title: 'Claude Integration',
      description: 'Build reliable long-context AI assistants with safe output handling and domain-specific prompt templates.'
    },
    {
      title: 'RAG and Knowledge Systems',
      description: 'Create retrieval pipelines with vector stores, chunking strategy, metadata filters, and response grounding.'
    }
  ];

  const stackServices = [
    'AI readiness assessment and use-case prioritization',
    'Prompt engineering and response-format strategy',
    'Agentic workflow design with tool calling',
    'Knowledge ingestion and document pipeline setup',
    'Evaluation framework for output quality and reliability',
    'Latency and token-cost optimization',
    'Observability dashboards and incident runbooks',
    'Continuous improvement and model strategy updates'
  ];

  const benefits = [
    'Faster process execution with AI-assisted workflows',
    'Controlled quality through evaluation and guardrails',
    'Flexible architecture across multiple AI providers',
    'Transparent monitoring of usage, cost, and outcomes'
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[500px] flex items-center overflow-hidden bg-gradient-to-r from-[#00055c] via-[#000d8c] to-[#0019ff] py-12 md:py-18 lg:py-24 px-6 lg:px-12">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] h-full opacity-40 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 400 400" preserveAspectRatio="none">
            <pattern id="dotPatternAiAutomation" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dotPatternAiAutomation)" mask="url(#fadeMaskAiAutomation)" />
            <defs>
              <linearGradient id="fadeGradientAiAutomation" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="black" />
                <stop offset="100%" stopColor="white" />
              </linearGradient>
              <mask id="fadeMaskAiAutomation">
                <rect width="100%" height="100%" fill="url(#fadeGradientAiAutomation)" />
              </mask>
            </defs>
          </svg>
        </div>

        <div className="absolute top-0 right-[-10%] w-[60%] h-full bg-gradient-to-l from-white/5 to-transparent skew-x-[-20deg] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1 bg-[#010745] rounded mb-10 border border-white/10">
              <span className="text-[12px] font-black uppercase tracking-[0.2em] text-white">AI Integrations</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[88px] font-black text-white leading-[1] tracking-tighter mb-8">
              AI Automations <br /> and Integration
            </h1>
            <p className="text-xl md:text-[28px] font-medium leading-tight max-w-3xl text-white/95 mb-12">
              Integrate advanced AI models into production workflows with secure API architecture, orchestration, and measurable business outcomes.
            </p>
            <button
              onClick={onBackHome}
              className="bg-[#e8edff] text-[#001fcc] px-10 py-4 rounded font-black text-sm uppercase tracking-widest hover:bg-white transition-all active:scale-95 shadow-2xl shadow-black/20"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-18 lg:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch">
          <div className="flex-[1.2]">
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-black text-[#1a1b1f] leading-[1.05] tracking-tight mb-8">
              Move from AI demos <br /> to production systems
            </h2>
            <p className="text-gray-500 text-[18px] leading-relaxed mb-8 font-medium max-w-2xl">
              We build reliable AI delivery pipelines that combine model quality, operational control, and long-term maintainability.
            </p>
            <ul className="space-y-4 mb-14">
              {deliveryPoints.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-[11px] shrink-0"></div>
                  <span className="text-gray-500 font-medium text-[17px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {[
                { title: 'Provider Flexibility', desc: 'Switch between models and vendors without rewriting core business logic.' },
                { title: 'Response Reliability', desc: 'Use structured prompts, schemas, and validation for predictable outputs.' },
                { title: 'Operational Visibility', desc: 'Track prompts, latency, cost, failures, and model drift in one view.' },
                { title: 'Compliance Control', desc: 'Enforce data handling rules, access boundaries, and secure audit logging.' }
              ].map((item) => (
                <div key={item.title} className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 bg-[#001fcc] rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/10">
                      <CheckCircle2 size={18} />
                    </div>
                    <h4 className="text-[20px] font-black text-[#1a1b1f] tracking-tight">{item.title}</h4>
                  </div>
                  <p className="text-gray-500 text-[15px] leading-relaxed font-medium pl-14">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full min-h-[450px] flex relative">
            <div className="w-full rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100 border border-gray-100">
              <img
                loading="lazy"
                decoding="async"
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
                alt="AI automation architecture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-18 lg:py-24 px-6 lg:px-12 border-t border-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-stretch">
          <div className="flex-[1.2]">
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-black text-[#1a1b1f] leading-[1.05] tracking-tight mb-8">
              AI lifecycle with <br /> governance at core
            </h2>
            <p className="text-gray-500 text-[18px] leading-relaxed mb-12 font-medium max-w-2xl">
              We execute AI implementation in controlled phases to ensure reliable outcomes across quality, security, and business integration.
            </p>
            <div className="space-y-8">
              {processPillars.map((item) => (
                <div key={item.title} className="flex gap-6 group">
                  <div className="w-14 h-14 bg-[#e8edff] rounded-2xl flex items-center justify-center text-[#001fcc] shrink-0 group-hover:bg-[#001fcc] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[22px] font-black text-[#1a1b1f] mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-[16px] leading-relaxed font-medium">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full min-h-[450px] flex relative">
            <div className="w-full rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100 border border-gray-100">
              <img
                loading="lazy"
                decoding="async"
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
                alt="AI workflow lifecycle"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-18 lg:py-24 bg-[#f8faff] px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-black text-[#1a1b1f] tracking-tighter mb-6">
              AI Integration Services
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              Detailed service modules aligned to practical enterprise and product use cases.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {serviceCards.map((card) => (
              <article key={card.title} className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-gray-50">
                <h4 className="text-[30px] font-black text-[#1a1b1f] tracking-tight mb-4">{card.title}</h4>
                <p className="text-gray-500 text-[17px] leading-relaxed font-medium">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h3 className="text-4xl md:text-5xl font-black text-[#1a1b1f] tracking-tighter mb-4">
              Full AI Automation Stack
            </h3>
            <p className="text-gray-500 text-[18px] font-medium max-w-3xl">
              From strategy to deployment and optimization, we cover all technical layers needed to run AI in production.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {stackServices.map((item) => (
              <div key={item} className="bg-[#f8faff] border border-gray-200 rounded-xl p-5 text-gray-700 font-medium">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-12 md:pb-18 lg:pb-24 pt-8" data-consultation-form>
        <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[640px]">
          <div className="flex-1 flex flex-col">
            <div className="bg-[#1a1b1f] p-12 md:p-16">
              <h2 className="text-4xl md:text-5xl lg:text-[64px] font-black text-white leading-[1.05] tracking-tighter">
                Launch Your AI Automation Roadmap
              </h2>
            </div>
            <div className="bg-[#e8edff] flex-1 p-12 md:p-16">
              <p className="text-[#1a1b1f] text-lg font-medium mb-12 max-w-md leading-relaxed">
                Share your use cases and existing system landscape. We will map provider selection, integration pattern, and rollout plan.
              </p>
              <div className="mb-12">
                <span className="text-[#1a1b1f] text-xl font-bold block mb-2">Call us at:</span>
                <a href={`tel:${SITE_CONFIG.business.phoneHref}`} className="text-[#1a1b1f] text-2xl font-black hover:text-[#001fcc] transition-colors">
                  {SITE_CONFIG.business.phone}
                </a>
              </div>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#001fcc]" fill="#001fcc" color="white" />
                    <span className="text-[#1a1b1f] font-bold text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 bg-white">
            <CommonContactForm
              formType="ai_automation"
              title="Start Your AI Automation Project"
              subtitle=""
              buttonText="Send Request"
              showPlatformType={true}
              selectLabel="AI Service Required"
              selectName="platformType"
              selectOptions={[
                'OpenAI API Integration',
                'Gemini API Integration',
                'Claude API Integration',
                'RAG Knowledge System',
                'Workflow Automation'
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:max-w-xl">
            <h3 className="text-4xl font-black text-[#1a1b1f] mb-8 tracking-tighter">
              Production-Ready AI Delivery
            </h3>
            <ul className="space-y-6">
              {[
                'Vendor-neutral architecture for long-term flexibility',
                'Operational controls for secure enterprise deployment',
                'Quality and cost governance built into delivery lifecycle'
              ].map((item) => (
                <li key={item} className="flex items-center gap-4 text-lg font-bold text-gray-700">
                  <CheckCircle2 className="text-[#001fcc] shrink-0" size={24} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:gap-16">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-[#001fcc] mb-2 tracking-tighter">80+</div>
              <div className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">AI Workflows</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-[#001fcc] mb-2 tracking-tighter">40%</div>
              <div className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Process Acceleration</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiAutomationPage;
