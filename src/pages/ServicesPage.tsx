import React from 'react';
import { Code, Globe, Smartphone, Shield, Cloud, Workflow, Database, Search, Palette, ShoppingCart, Link2, Wrench, CheckCircle2 } from 'lucide-react';
import CommonContactForm from '../components/CommonContactForm';
import serviceBannerImage from '../assets/images/service1.png';
import serviceWhyChooseImage from '../assets/images/service2.png';
import { CONTENT_CONFIG } from '../config/contentConfig';

interface ServicesPageProps {
  onNavigateHome?: () => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigateHome }) => {
  const services = [
    { title: 'Custom Software Development', description: 'End-to-end tailored software solutions and business-specific workflow systems.', icon: Code },
    { title: 'Web Development', description: 'Corporate websites, business portals, web apps, admin panels, and SEO-ready architecture.', icon: Globe },
    { title: 'Mobile App Development', description: 'Android, iOS, and hybrid applications for consumer and enterprise use cases.', icon: Smartphone },
    { title: 'HRMS & ERP Solutions', description: 'Custom HRMS, payroll, attendance, task management, ERP, and CRM systems.', icon: Database },
    { title: 'Data Security & Infrastructure', description: 'Access control, encrypted storage, secure deployments, and hybrid infrastructure setup.', icon: Shield },
    { title: 'Workflow Automation', description: 'Automation pipelines, internal systems, dashboards, and automated reporting tools.', icon: Workflow },
    { title: 'SEO Services', description: 'Technical, on-page, off-page, local, and e-commerce SEO with strategy and audits.', icon: Search },
    { title: 'UI/UX Design & Branding', description: 'Logo, brand identity, wireframes, prototyping, and scalable design systems.', icon: Palette },
    { title: 'Cloud & DevOps', description: 'AWS/Azure/GCP deployment, CI/CD, containerization, optimization, and monitoring.', icon: Cloud },
    { title: 'E-Commerce Development', description: 'Custom stores, Shopify/WooCommerce builds, payment integration, and marketplaces.', icon: ShoppingCart },
    { title: 'API Development & Integration', description: 'Third-party integrations, custom APIs, payment APIs, and messaging APIs.', icon: Link2 },
    { title: 'Maintenance & Technical Support', description: 'System monitoring, bug fixing, performance optimization, and support contracts.', icon: Wrench },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <div className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-medium">Solutions</div>
          <h1 className="text-5xl lg:text-6xl font-black text-[#1a1b1f] mb-6 leading-tight">IT Services for Apps, Websites, and IoT</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {CONTENT_CONFIG.company.legalName} delivers secure, scalable, and system-driven digital services aligned to your business workflows.
          </p>
        </div>
      </section>

      <section className="pb-16 lg:pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="overflow-hidden rounded-xl shadow-lg border border-gray-100">
            <img
              src={serviceBannerImage}
              alt={`${CONTENT_CONFIG.company.shortName} services banner showing software, web, mobile, and IoT delivery`}
              className="w-full h-[260px] sm:h-[340px] lg:h-[440px] object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#e8f0ff] to-[#f0f6ff]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div key={idx} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <IconComponent className="w-12 h-12 text-[#001fcc] mb-5" strokeWidth={1.5} />
                  <h3 className="text-2xl font-black text-[#1a1b1f] mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-medium">Why Choose Our Services</div>
              <h2 className="text-4xl lg:text-5xl font-black text-[#1a1b1f] mb-6 leading-tight">
                Why businesses choose {CONTENT_CONFIG.company.shortName} for IT execution
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We combine product thinking, engineering discipline, and domain-aligned execution to build reliable systems for Indian and global businesses.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#001fcc] mt-0.5 shrink-0" />
                  <p className="text-gray-700">Architecture-first delivery for scalable web, app, IoT, and enterprise systems.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#001fcc] mt-0.5 shrink-0" />
                  <p className="text-gray-700">Transparent process with milestone-based planning, sprint reviews, and measurable outcomes.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#001fcc] mt-0.5 shrink-0" />
                  <p className="text-gray-700">Long-term support with maintenance, optimization, security updates, and change management.</p>
                </div>
              </div>

              <button
                onClick={onNavigateHome}
                className="inline-block bg-[#001fcc] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#0012a8] transition-colors"
              >
                Talk to Services Team
              </button>
            </div>

            <div className="order-1 lg:order-2">
              <img
                src={serviceWhyChooseImage}
                alt="Team planning and delivery workshop for digital transformation services"
                className="w-full h-auto rounded-xl shadow-lg object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section data-consultation-form className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-lg overflow-hidden shadow-lg">
            <div className="bg-gradient-to-br from-[#e8f0ff] to-[#f0f6ff] p-12 lg:p-16">
              <h2 className="text-4xl font-black text-[#1a1b1f] mb-8">{CONTENT_CONFIG.cta.scheduleConsultation}</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Tell us your requirement and we will propose the right roadmap for software, app, web, IoT,
                security, automation, or DevOps implementation.
              </p>
              <button
                onClick={onNavigateHome}
                className="inline-block bg-[#001fcc] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#0012a8] transition-colors"
              >
                {CONTENT_CONFIG.cta.getInTouch}
              </button>
            </div>
            <div className="bg-white">
              <CommonContactForm
                formType="services_page"
                title=""
                subtitle=""
                buttonText="Send Request"
                showFirstLastName={true}
                showServiceInterest={true}
                showCompanyName={true}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

