import React from 'react';
import { CheckCircle2, Store, ShoppingCart, Layers, ShieldCheck, BarChart3, Truck, CreditCard } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import CommonContactForm from '../components/CommonContactForm';

interface EcommercePageProps {
  onBackHome: () => void;
}

const EcommercePage: React.FC<EcommercePageProps> = ({ onBackHome }) => {
  const deliveryPoints = [
    'Custom storefronts for D2C, B2B, and hybrid commerce models',
    'Shopify, WooCommerce, and custom platform implementation',
    'Multivendor marketplace architecture with vendor operations',
    'Payment, shipping, tax, ERP, and CRM integration',
    'Checkout optimization and conversion-focused UX',
    'Analytics, reporting, and long-term support'
  ];

  const corePillars = [
    {
      title: 'Platform Engineering',
      description: 'Build platform foundations that remain stable through product growth, catalog expansion, and campaign peaks.',
      icon: <Layers size={24} />
    },
    {
      title: 'Order and Fulfillment',
      description: 'Automate order capture, inventory sync, shipping workflows, and return handling across channels.',
      icon: <Truck size={24} />
    },
    {
      title: 'Secure Payments',
      description: 'Integrate trusted gateways with secure checkout, fraud controls, and compliance-ready transaction flows.',
      icon: <CreditCard size={24} />
    }
  ];

  const platformCards = [
    {
      title: 'Shopify Development',
      description: 'Custom Shopify storefronts, app integrations, checkout extensions, and high-converting product pages.'
    },
    {
      title: 'WordPress Commerce',
      description: 'Content-led ecommerce architecture with SEO-ready page structures and flexible marketing workflows.'
    },
    {
      title: 'WooCommerce Development',
      description: 'Tailored WooCommerce solutions for complex catalog, payment, shipping, and promotions logic.'
    },
    {
      title: 'Multivendor Marketplace',
      description: 'Vendor onboarding, commission logic, payout rules, and marketplace controls with role-based access.'
    }
  ];

  const stackServices = [
    'Catalog setup, taxonomy, and product information architecture',
    'Custom cart and checkout funnel optimization',
    'Subscription and recurring order implementation',
    'Inventory and warehouse synchronization',
    'Promotion engine and coupon strategy implementation',
    'Search and filtering optimization for product discovery',
    'Technical SEO and Core Web Vitals improvements',
    'Lifecycle support, performance monitoring, and release management'
  ];

  const benefits = [
    'Scalable architecture from launch to enterprise volume',
    'Strong payment and transaction security model',
    'Business-ready admin operations and reporting',
    'Continuous optimization for conversion and retention'
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[500px] flex items-center overflow-hidden bg-gradient-to-r from-[#00055c] via-[#000d8c] to-[#0019ff] py-32 px-6 lg:px-12">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] h-full opacity-40 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 400 400" preserveAspectRatio="none">
            <pattern id="dotPatternEcommerce" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dotPatternEcommerce)" mask="url(#fadeMaskEcommerce)" />
            <defs>
              <linearGradient id="fadeGradientEcommerce" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="black" />
                <stop offset="100%" stopColor="white" />
              </linearGradient>
              <mask id="fadeMaskEcommerce">
                <rect width="100%" height="100%" fill="url(#fadeGradientEcommerce)" />
              </mask>
            </defs>
          </svg>
        </div>

        <div className="absolute top-0 right-[-10%] w-[60%] h-full bg-gradient-to-l from-white/5 to-transparent skew-x-[-20deg] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1 bg-[#010745] rounded mb-10 border border-white/10">
              <span className="text-[12px] font-black uppercase tracking-[0.2em] text-white">E-commerce</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[88px] font-black text-white leading-[1] tracking-tighter mb-8">
              E-commerce <br /> Solutions
            </h1>
            <p className="text-xl md:text-[28px] font-medium leading-tight max-w-3xl text-white/95 mb-12">
              Build reliable commerce platforms that connect storefront, checkout, operations, and analytics into one high-performance system.
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

      <section className="bg-white py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch">
          <div className="flex-[1.2]">
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-black text-[#1a1b1f] leading-[1.05] tracking-tight mb-8">
              Engineering commerce <br /> for real operations
            </h2>
            <p className="text-gray-500 text-[18px] leading-relaxed mb-8 font-medium max-w-2xl">
              We design ecommerce ecosystems that support merchandising, fulfillment, payments, and reporting as one connected business platform.
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
                { title: 'Catalog Architecture', desc: 'Structure categories, attributes, and variants for discoverability and scale.' },
                { title: 'Checkout Reliability', desc: 'Reduce drop-offs with fast and trusted checkout experiences.' },
                { title: 'Operations Automation', desc: 'Integrate order, shipping, invoicing, and return workflows.' },
                { title: 'Growth Analytics', desc: 'Track funnels, cohorts, and campaign contribution with actionable dashboards.' }
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
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop"
                alt="E-commerce platform architecture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-32 px-6 lg:px-12 border-t border-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-stretch">
          <div className="flex-[1.2]">
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-black text-[#1a1b1f] leading-[1.05] tracking-tight mb-8">
              Delivery lifecycle <br /> built for scale
            </h2>
            <p className="text-gray-500 text-[18px] leading-relaxed mb-12 font-medium max-w-2xl">
              Every ecommerce implementation follows a clear execution model from discovery to launch and optimization.
            </p>
            <div className="space-y-8">
              {corePillars.map((item) => (
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
                alt="E-commerce lifecycle dashboard"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#f8faff] px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-black text-[#1a1b1f] tracking-tighter mb-6">
              Platform-Specific Development
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              Choose a platform strategy that matches your business model, internal team capability, and growth timeline.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {platformCards.map((card) => (
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
              Complete E-commerce Service Stack
            </h3>
            <p className="text-gray-500 text-[18px] font-medium max-w-3xl">
              We support the entire commerce lifecycle with technical depth across customer experience, platform operations, and growth analytics.
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

      <section className="bg-white px-6 pb-24 pt-8" data-consultation-form>
        <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[640px]">
          <div className="flex-1 flex flex-col">
            <div className="bg-[#1a1b1f] p-12 md:p-16">
              <h2 className="text-4xl md:text-5xl lg:text-[64px] font-black text-white leading-[1.05] tracking-tighter">
                Build Your Commerce Platform
              </h2>
            </div>
            <div className="bg-[#e8edff] flex-1 p-12 md:p-16">
              <p className="text-[#1a1b1f] text-lg font-medium mb-12 max-w-md leading-relaxed">
                Share your ecommerce goals and constraints. We provide an implementation roadmap with architecture, scope, and launch priorities.
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
              formType="ecommerce"
              title="Start Your E-commerce Project"
              subtitle=""
              buttonText="Send Request"
              showPlatformType={true}
              selectLabel="E-commerce Requirement"
              selectName="platformType"
              selectOptions={[
                'New E-commerce Build',
                'Shopify Development',
                'WooCommerce Development',
                'Multivendor Marketplace',
                'Operations and Integrations'
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:max-w-xl">
            <h3 className="text-4xl font-black text-[#1a1b1f] mb-8 tracking-tighter">
              Commerce Engineering That Performs
            </h3>
            <ul className="space-y-6">
              {[
                'Conversion-first UX with measurable funnel improvements',
                'Reliable integration architecture for critical systems',
                'Ongoing release and optimization support after launch'
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
              <div className="text-5xl md:text-6xl font-black text-[#001fcc] mb-2 tracking-tighter">120+</div>
              <div className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Commerce Builds</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-[#001fcc] mb-2 tracking-tighter">99.9%</div>
              <div className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Checkout Uptime</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommercePage;
