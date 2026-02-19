import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  Cloud,
  Cpu,
  Factory,
  Shield,
  Star,
  Zap
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { CONTENT_CONFIG } from '../config/contentConfig';
import CommonContactForm from '../components/CommonContactForm';

interface IotSolutionsPageProps {
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
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px'
      }
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
          We design IoT architectures that scale from pilot deployments to enterprise fleets, focusing on secure telemetry, reliable connectivity, and actionable intelligence.
        </p>
      </div>
    </div>
  );
};

const IotSolutionsPage: React.FC<IotSolutionsPageProps> = ({ onBackHome }) => {
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
      id: 'ayesha',
      name: 'Ayesha Kapoor',
      role: 'Operations Director',
      company: 'SmartLogix',
      text: `${CONTENT_CONFIG.company.shortName} delivered a real-time IoT monitoring platform that reduced our downtime by 38%. The dashboards, alerts, and device onboarding workflows were production-ready from day one.`,
      logo: (
        <div className="w-16 h-16 bg-[#1a1b1f] rounded-md flex items-center justify-center shadow-md">
          <Factory className="text-white" size={32} />
        </div>
      )
    },
    {
      id: 'vincent',
      name: 'Vincent Rao',
      role: 'VP Engineering',
      company: 'FleetPulse',
      text: 'We needed secure device provisioning and analytics at scale. Their team built a scalable IoT backend with edge validation and streaming pipelines that cut incident response time in half.',
      logo: (
        <div className="w-16 h-16 bg-blue-600 rounded-md flex items-center justify-center shadow-md">
          <Cpu className="text-white" size={32} />
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

  const tools = [
    'MQTT & Secure Device Gateways',
    'Edge Computing Pipelines',
    'Time-Series Datastores',
    'Cloud IoT (AWS, Azure, GCP)',
    'OTA Firmware Management',
    'Operational Dashboards & Alerts'
  ];

  const benefits = [
    'Secure Telemetry',
    'Edge + Cloud Ready',
    'Realtime Alerts',
    'Scalable Infrastructure',
    'Actionable Analytics',
    'Lifecycle Support'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden bg-gradient-to-r from-[#00055c] via-[#000d8c] to-[#0019ff] py-32 px-6 lg:px-12">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] h-full opacity-40 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 400 400" preserveAspectRatio="none">
            <pattern id="dotPatternIot" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dotPatternIot)" mask="url(#fadeMaskIot)" />
            <defs>
              <linearGradient id="fadeGradientIot" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="black" />
                <stop offset="100%" stopColor="white" />
              </linearGradient>
              <mask id="fadeMaskIot">
                <rect width="100%" height="100%" fill="url(#fadeGradientIot)" />
              </mask>
            </defs>
          </svg>
        </div>

        <div className="absolute top-0 right-[-10%] w-[60%] h-full bg-gradient-to-l from-white/5 to-transparent skew-x-[-20deg] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1 bg-[#010745] rounded mb-10 border border-white/5">
              <span className="text-white text-[12px] font-black uppercase tracking-[0.2em]">
                Industrial IoT Platforms
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-[88px] font-black text-white leading-[1] tracking-tighter mb-10">
              IoT Solutions <br /> for Real-Time Ops
            </h2>

            <p className="text-white text-xl md:text-[28px] font-medium leading-tight max-w-3xl mb-14 opacity-95">
              Build connected systems that stream secure data, automate workflows, and deliver instant operational visibility.
            </p>

            <button
              type="button"
              onClick={scrollToConsultationForm}
              className="bg-[#e8edff] text-[#001fcc] px-10 py-4 rounded font-black text-sm uppercase tracking-widest hover:bg-white transition-all active:scale-95 shadow-2xl shadow-black/20"
            >
              Get an IoT Strategy Call
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-12 md:py-18 lg:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch">
          <div className="flex-[1.2]">
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-black text-[#1a1b1f] leading-[1.05] tracking-tight mb-8">
              From sensors to <br /> decision-ready intelligence
            </h2>
            <p className="text-gray-500 text-[18px] leading-relaxed mb-8 font-medium max-w-2xl">
              IoT success depends on reliable data pipelines, secure device identity, and dashboards that teams actually use. We design IoT platforms that transform raw telemetry into clear, operational outcomes.
            </p>

            <ul className="space-y-4 mb-16">
              {[
                'Secure device provisioning and identity management.',
                'Streaming telemetry for real-time monitoring and alerting.',
                'Edge processing to reduce latency and bandwidth.',
                'Role-based dashboards for operations, quality, and leadership.'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-[11px] shrink-0"></div>
                  <span className="text-gray-500 font-medium text-[17px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {[
                { title: 'Device Reliability', desc: 'Robust onboarding, health checks, and automated provisioning for large fleets.' },
                { title: 'Operational Visibility', desc: 'Dashboards, alerts, and KPIs aligned to day-to-day operational goals.' },
                { title: 'Secure-by-Design', desc: 'Encrypted data pipelines, RBAC, and audit trails for compliance readiness.' },
                { title: 'Automation-Ready', desc: 'Workflow triggers and integrations that turn signals into actions.' }
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
                src="/assets/external/unsplash-4636190af475.jpg"
                alt="IoT monitoring workspace"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Proactive Management Section */}
      <section className="bg-white py-12 md:py-18 lg:py-24 px-6 lg:px-12 border-t border-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-stretch">
          <div className="flex-[1.2]">
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-black text-[#1a1b1f] leading-[1.05] tracking-tight mb-8">
              Full Lifecycle <br /> IoT Engineering
            </h2>
            <p className="text-gray-500 text-[18px] leading-relaxed mb-12 font-medium max-w-2xl">
              We manage the full IoT lifecycle from architecture and device integration to monitoring, optimization, and long-term support.
            </p>

            <div className="space-y-8">
              {[
                { title: 'Device & Edge Strategy', desc: 'Edge validation, buffering, and resilient connectivity for harsh environments.' },
                { title: 'Real-Time Operations', desc: 'Telemetry dashboards and SLA alerts that keep teams proactive.' },
                { title: 'Scaling & Optimization', desc: 'Fleet-wide updates, telemetry tuning, and cost-aware infrastructure growth.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-14 h-14 bg-[#e8edff] rounded-2xl flex items-center justify-center text-[#001fcc] shrink-0 group-hover:bg-[#001fcc] group-hover:text-white transition-all duration-300">
                    {idx === 0 ? <Cpu size={24} /> : idx === 1 ? <BarChart3 size={24} /> : <Cloud size={24} />}
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
              View IoT Portfolio
            </button>
          </div>

          <div className="flex-1 w-full flex">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl w-full h-full min-h-[500px] lg:min-h-[600px] bg-gray-100">
              <img
                src="/assets/external/unsplash-43490279c0fa.jpg"
                alt="Connected devices dashboard"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-18 lg:py-24 bg-[#f8faff] px-6" data-portfolio-section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-black text-[#1a1b1f] tracking-tighter mb-6">
              IoT Capabilities We Deliver
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              Build resilient IoT products that connect devices, data, and teams across your entire operation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Secure Telemetry', icon: <Shield size={32} />, desc: 'Encrypted data pipelines with device-level identity and access controls.' },
              { title: 'Edge Intelligence', icon: <Cpu size={32} />, desc: 'Local processing and filtering to reduce latency and bandwidth costs.' },
              { title: 'Predictive Alerts', icon: <Zap size={32} />, desc: 'Rule-based and ML-ready alerting for proactive maintenance.' }
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

      {/* Tools Section */}
      <section className="py-12 md:py-18 lg:py-24 bg-white px-6 border-t border-gray-100 overflow-visible">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="flex-1 lg:sticky lg:top-40">
              <h2 className="text-4xl md:text-5xl lg:text-[54px] font-black text-[#1a1b1f] leading-[1.1] tracking-tighter mb-10">
                IoT stack built <br /> for scale and safety
              </h2>
              <p className="text-gray-500 text-[19px] leading-relaxed max-w-md font-medium">
                We choose proven IoT frameworks and cloud services that deliver secure connectivity, low latency, and reliable analytics.
              </p>
            </div>

            <div className="flex-1 w-full">
              <div className="flex flex-col">
                {tools.map((tool, idx) => (
                  <ToolItem key={tool} title={tool} index={idx} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-12 md:py-18 lg:py-24 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-[44px] font-black text-[#1a1b1f] leading-[1.1] tracking-tighter mb-12">
            What our IoT partners say
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
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <span className="text-[17px] font-black text-[#1a1b1f]">4.9</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Contact Form */}
      <section className="bg-white px-6 pb-32 pt-16" data-consultation-form>
        <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[640px] lg:min-h-[800px]">
          <div className="flex-1 flex flex-col">
            <div className="bg-[#1a1b1f] p-12 md:p-16">
              <h2 className="text-4xl md:text-5xl lg:text-[64px] font-black text-white leading-[1.05] tracking-tighter">
                Partner with Us for IoT Excellence
              </h2>
            </div>
            <div className="bg-[#e8edff] flex-1 p-12 md:p-16">
              <p className="text-[#1a1b1f] text-lg font-medium mb-12 max-w-md leading-relaxed">
                Planning a connected product? We help you design IoT systems that deliver measurable operational impact.
              </p>

              <div className="mb-16">
                <span className="text-[#1a1b1f] text-xl font-bold block mb-2">Call us at:</span>
                <a
                  href={`tel:${SITE_CONFIG.business.phoneHref}`}
                  className="text-[#1a1b1f] text-2xl font-black hover:text-[#001fcc] transition-colors"
                >
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
            </div>
          </div>

          <div className="flex-1 bg-white">
            <CommonContactForm
              formType="iot_solutions"
              title="Start Your IoT Project"
              subtitle=""
              buttonText="Send IoT Request"
              showPlatformType={true}
              selectLabel="Solution Focus"
              selectName="platformType"
              selectOptions={[
                'Device Integration',
                'Edge & Gateway Setup',
                'Telemetry Dashboards',
                'Predictive Alerts',
                'Support & Optimization'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Trust & Stats Section */}
      <section className="py-24 bg-white px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:max-w-xl">
            <h3 className="text-3xl sm:text-4xl font-black text-[#1a1b1f] mb-8 tracking-tighter">
              IoT Trust Built on Real Results.
            </h3>
            <ul className="space-y-6">
              {[
                'Transparent telemetry and uptime reporting',
                'Pilot-first delivery with scale-ready architecture',
                'Security assessments and device lifecycle support'
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
              <div className="text-5xl md:text-6xl font-black text-[#001fcc] mb-2 tracking-tighter">250+</div>
              <div className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Devices Monitored</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-[#001fcc] mb-2 tracking-tighter">99.95%</div>
              <div className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Alert Uptime</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IotSolutionsPage;
