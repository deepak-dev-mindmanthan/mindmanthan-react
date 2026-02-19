import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Database,
  Link2,
  Shield,
  Star,
  Workflow,
  Zap
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { CONTENT_CONFIG } from '../config/contentConfig';
import CommonContactForm from '../components/CommonContactForm';

interface ApiIntegrationSupportPageProps {
  onBackHome: () => void;
}

interface TestimonialData {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  logo: React.ReactNode;
}

const ToolItem: React.FC<{ title: string; index: number }> = ({ title, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={`group flex items-start gap-10 py-16 border-b border-gray-100 last:border-b-0 transition-all duration-[1100ms] cubic-bezier(0.25, 1, 0.5, 1) transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'
      }`}
    >
      <div className="w-10 h-10 rounded-full bg-[#001fcc] flex items-center justify-center shrink-0 mt-1 shadow-xl shadow-blue-500/10 group-hover:scale-110 transition-transform duration-500">
        <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
      </div>

      <div className="flex-1">
        <h4 className="text-[26px] font-black text-[#1a1b1f] mb-4 group-hover:text-[#001fcc] transition-colors tracking-tighter">
          {title}
        </h4>
        <p className="text-gray-500 text-[17px] font-medium leading-relaxed max-w-xl">
          We design API ecosystems that are secure, observable, and reliable under real production traffic with structured support after go-live.
        </p>
      </div>
    </div>
  );
};

const ApiIntegrationSupportPage: React.FC<ApiIntegrationSupportPageProps> = ({ onBackHome }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const scrollToConsultationForm = () => {
    const section = document.querySelector('[data-consultation-form]');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToPortfolioSection = () => {
    const section = document.querySelector('[data-portfolio-section]');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const testimonials: TestimonialData[] = [
    {
      id: 'rehan',
      name: 'Rehan Kapoor',
      role: 'Head of Engineering',
      company: 'PayFlow Commerce',
      text: `${CONTENT_CONFIG.company.shortName} integrated our payments, CRM, and notification systems into a single API layer. Failure rates dropped and our incident triage became significantly faster.`,
      logo: (
        <div className="w-16 h-16 bg-[#1a1b1f] rounded-md flex items-center justify-center shadow-md">
          <Link2 className="text-white" size={32} />
        </div>
      )
    },
    {
      id: 'maria',
      name: 'Maria Chen',
      role: 'Product Director',
      company: 'HealthStack',
      text: 'They standardized our API contracts, implemented monitoring, and created replay-safe workflows. The support model is proactive and has kept critical integrations stable.',
      logo: (
        <div className="w-16 h-16 bg-blue-600 rounded-md flex items-center justify-center shadow-md">
          <Workflow className="text-white" size={32} />
        </div>
      )
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const integrationStack = [
    'API Contract Design & Governance',
    'OAuth2, JWT, and Access Control',
    'Webhook & Event-Driven Workflows',
    'Queueing, Retry, and Circuit Breakers',
    'Endpoint Monitoring & Alerting',
    'Versioning and Lifecycle Management'
  ];

  const benefits = [
    'Stable Integrations',
    'Secure Data Flow',
    'Faster Incident Response',
    'Vendor Change Resilience',
    'Scalable API Layer',
    'Managed Support'
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[500px] flex items-center overflow-hidden bg-gradient-to-r from-[#00055c] via-[#000d8c] to-[#0019ff] py-32 px-6 lg:px-12">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] h-full opacity-40 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 400 400" preserveAspectRatio="none">
            <pattern id="dotPatternApi" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dotPatternApi)" mask="url(#fadeMaskApi)" />
            <defs>
              <linearGradient id="fadeGradientApi" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="black" />
                <stop offset="100%" stopColor="white" />
              </linearGradient>
              <mask id="fadeMaskApi">
                <rect width="100%" height="100%" fill="url(#fadeGradientApi)" />
              </mask>
            </defs>
          </svg>
        </div>

        <div className="absolute top-0 right-[-10%] w-[60%] h-full bg-gradient-to-l from-white/5 to-transparent skew-x-[-20deg] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1 bg-[#010745] rounded mb-10 border border-white/5">
              <span className="text-white text-[12px] font-black uppercase tracking-[0.2em]">
                API Integration & Support
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-[88px] font-black text-white leading-[1] tracking-tighter mb-10">
              API Integration <br /> and Support
            </h2>

            <p className="text-white text-xl md:text-[28px] font-medium leading-tight max-w-3xl mb-14 opacity-95">
              Connect payments, CRM, ERP, and core systems with secure APIs, resilient workflows, and long-term production support.
            </p>

            <button
              type="button"
              onClick={scrollToConsultationForm}
              className="bg-[#e8edff] text-[#001fcc] px-10 py-4 rounded font-black text-sm uppercase tracking-widest hover:bg-white transition-all active:scale-95 shadow-2xl shadow-black/20"
            >
              Get an API Strategy Call
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-18 lg:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch">
          <div className="flex-[1.2]">
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-black text-[#1a1b1f] leading-[1.05] tracking-tight mb-8">
              Connect systems <br /> without fragile glue code
            </h2>
            <p className="text-gray-500 text-[18px] leading-relaxed mb-8 font-medium max-w-2xl">
              Integration projects break when contracts are inconsistent and reliability patterns are missing. We build robust API layers that stay stable as your ecosystem grows.
            </p>

            <ul className="space-y-4 mb-16">
              {[
                'Secure third-party integrations with standardized contracts.',
                'Idempotent workflows and retries for production safety.',
                'Unified monitoring for API latency and failure visibility.',
                'Support workflows for vendor API changes and regressions.'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-[11px] shrink-0"></div>
                  <span className="text-gray-500 font-medium text-[17px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {[
                { title: 'API Governance', desc: 'Consistent contracts, schemas, versioning, and error semantics.' },
                { title: 'Reliability Controls', desc: 'Retries, queues, fallback handling, and circuit breakers.' },
                { title: 'Security Hardening', desc: 'Auth, token strategy, secrets handling, and least-privilege access.' },
                { title: 'Operational Support', desc: 'Monitoring, incident response, and ongoing performance tuning.' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 bg-[#001fcc] rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/10">
                      <Check size={18} strokeWidth={4} />
                    </div>
                    <h4 className="text-[20px] font-black text-[#1a1b1f] tracking-tight">{item.title}</h4>
                  </div>
                  <p className="text-gray-500 text-[15px] leading-relaxed font-medium pl-14">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full flex">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl w-full h-full min-h-[500px] lg:min-h-[600px] bg-gray-100">
              <img
                src="/assets/external/unsplash-ef010cbdcc31.jpg"
                alt="API integration architecture dashboard"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-18 lg:py-24 px-6 lg:px-12 border-t border-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-stretch">
          <div className="flex-[1.2]">
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-black text-[#1a1b1f] leading-[1.05] tracking-tight mb-8">
              Full Lifecycle <br /> Integration Engineering
            </h2>
            <p className="text-gray-500 text-[18px] leading-relaxed mb-12 font-medium max-w-2xl">
              We support the full integration lifecycle, from API design and onboarding to production monitoring and long-term support.
            </p>

            <div className="space-y-8">
              {[
                { title: 'Integration Architecture', desc: 'Map dependencies, contracts, and fallback logic before coding starts.' },
                { title: 'Production Reliability', desc: 'Implement resilient workflows with observability and alerting baked in.' },
                { title: 'Managed Support', desc: 'Handle vendor/API changes, version upgrades, and incident recovery.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-14 h-14 bg-[#e8edff] rounded-2xl flex items-center justify-center text-[#001fcc] shrink-0 group-hover:bg-[#001fcc] group-hover:text-white transition-all duration-300">
                    {idx === 0 ? <Database size={24} /> : idx === 1 ? <Zap size={24} /> : <Shield size={24} />}
                  </div>
                  <div>
                    <h4 className="text-[22px] font-black text-[#1a1b1f] mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-[16px] leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={scrollToPortfolioSection}
              className="mt-12 bg-[#1a1b1f] text-white px-10 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-[#001fcc] transition-all shadow-xl shadow-gray-400/10"
            >
              View Integration Portfolio
            </button>
          </div>

          <div className="flex-1 w-full flex">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl w-full h-full min-h-[500px] lg:min-h-[600px] bg-gray-100">
              <img
                src="/assets/external/unsplash-43490279c0fa.jpg"
                alt="API workflow and service orchestration"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-18 lg:py-24 bg-[#f8faff] px-6" data-portfolio-section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-black text-[#1a1b1f] tracking-tighter mb-6">
              Integration Capabilities We Deliver
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              Production-ready API capabilities designed for secure data flow, stability, and operational transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Third-Party Integrations', icon: <Link2 size={32} />, desc: 'Payments, CRMs, ERPs, messaging, and partner APIs.' },
              { title: 'Custom API Development', icon: <Database size={32} />, desc: 'Well-structured internal APIs with contract consistency.' },
              { title: 'Support & Monitoring', icon: <Workflow size={32} />, desc: 'Latency/error tracking, alerting, and incident workflows.' }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-50 group">
                <div className="text-[#001fcc] mb-8 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-black text-[#1a1b1f] mb-4 uppercase tracking-tighter">
                  {service.title}
                </h4>
                <p className="text-gray-500 font-medium leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-18 lg:py-24 bg-white px-6 border-t border-gray-100 overflow-visible">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="flex-1 lg:sticky lg:top-40">
              <h2 className="text-4xl md:text-5xl lg:text-[54px] font-black text-[#1a1b1f] leading-[1.1] tracking-tighter mb-10">
                API stack built for <br /> reliability and support
              </h2>
              <p className="text-gray-500 text-[19px] leading-relaxed max-w-md font-medium">
                We use proven patterns and tooling to maintain stable integrations under changing vendor ecosystems.
              </p>
            </div>

            <div className="flex-1 w-full">
              <div className="flex flex-col">
                {integrationStack.map((item, idx) => (
                  <ToolItem key={item} title={item} index={idx} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-18 lg:py-24 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-[44px] font-black text-[#1a1b1f] leading-[1.1] tracking-tighter mb-12">
            What our integration partners say
          </h2>

          <div className="relative overflow-hidden min-h-[450px] flex flex-col items-center">
            <div className="mb-12 transition-all duration-500 transform scale-100">
              {testimonials[currentTestimonial].logo}
            </div>

            <div className="max-w-5xl mx-auto mb-12 px-4 transition-opacity duration-500">
              <p className="text-[28px] md:text-[34px] font-medium text-[#1a1b1f] leading-[1.3] tracking-tight mb-10 min-h-[160px]">
                {testimonials[currentTestimonial].text}
              </p>

              <div className="mb-16">
                <h4 className="text-[18px] font-black text-[#1a1b1f] mb-1">{testimonials[currentTestimonial].name}</h4>
                <p className="text-gray-500 font-medium">
                  {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-10">
            <div className="flex gap-4">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={prevTestimonial}
                className="w-14 h-14 rounded-full bg-[#f1f5f9] flex items-center justify-center text-gray-400 hover:bg-[#e2e8f0] hover:text-[#1a1b1f] transition-all active:scale-90"
              >
                <ArrowLeft size={24} strokeWidth={2.5} />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={nextTestimonial}
                className="w-14 h-14 rounded-full bg-[#f1f5f9] flex items-center justify-center text-gray-400 hover:bg-[#e2e8f0] hover:text-[#1a1b1f] transition-all active:scale-90"
              >
                <ArrowRight size={24} strokeWidth={2.5} />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Reviewed on</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-red-500 text-red-500" />
                ))}
              </div>
              <div className="h-8 w-[1px] bg-gray-200 mx-2"></div>
              <div className="flex items-center gap-3">
                <span className="text-[17px] font-black text-[#1a1b1f]">4.9</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-8 md:pb-12 lg:pb-24 pt-16" data-consultation-form>
        <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[640px] lg:min-h-[800px]">
          <div className="flex-1 flex flex-col">
            <div className="bg-[#1a1b1f] p-12 md:p-16">
              <h2 className="text-4xl md:text-5xl lg:text-[64px] font-black text-white leading-[1.05] tracking-tighter">
                Stabilize and Scale Your API Ecosystem
              </h2>
            </div>
            <div className="bg-[#e8edff] flex-1 p-12 md:p-16">
              <p className="text-[#1a1b1f] text-lg font-medium mb-12 max-w-md leading-relaxed">
                Need secure integrations and reliable support for business-critical APIs? We can design and maintain your full integration layer.
              </p>

              <div className="mb-16">
                <span className="text-[#1a1b1f] text-xl font-bold block mb-2">Call us at:</span>
                <a href={`tel:${SITE_CONFIG.business.phoneHref}`} className="text-[#1a1b1f] text-2xl font-black hover:text-[#001fcc] transition-colors">
                  {SITE_CONFIG.business.phone}
                </a>
              </div>

              <div>
                <h4 className="text-[#1a1b1f] text-lg font-bold mb-8">Your benefits:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#001fcc]" fill="#001fcc" color="white" />
                      <span className="text-[#1a1b1f] font-bold text-base">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={onBackHome}
                className="mt-10 bg-[#001fcc] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#0015a8] transition-colors"
              >
                Back to Home
              </button>
            </div>
          </div>

          <div className="flex-1 bg-white">
            <CommonContactForm
              formType="api_integration_support"
              title="Start Your API Integration Project"
              subtitle=""
              buttonText="Send Request"
              showPlatformType={true}
              selectLabel="Service Required"
              selectName="platformType"
              selectOptions={[
                'Payment Gateway Integration',
                'Third-Party API Integration',
                'Custom API Development',
                'Support & Monitoring',
                'Performance Optimization'
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-18 lg:py-24 bg-white px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:max-w-xl">
            <h3 className="text-3xl sm:text-4xl font-black text-[#1a1b1f] mb-8 tracking-tighter">
              Integration Trust Built on Stable Production Systems.
            </h3>
            <ul className="space-y-6">
              {[
                'Contract-driven integrations with clear ownership',
                'Monitoring and alerting tied to business SLAs',
                'Structured support for vendor/API lifecycle changes'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-lg font-bold text-gray-700">
                  <CheckCircle2 className="text-[#001fcc] shrink-0" size={24} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:gap-16">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-[#001fcc] mb-2 tracking-tighter">99.9%</div>
              <div className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">API Availability</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-[#001fcc] mb-2 tracking-tighter">60%</div>
              <div className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Faster Triage</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApiIntegrationSupportPage;
