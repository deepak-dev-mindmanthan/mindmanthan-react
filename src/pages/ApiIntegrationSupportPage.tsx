import React from 'react';
import CommonContactForm from '../components/CommonContactForm';

interface ApiIntegrationSupportPageProps {
  onBackHome: () => void;
}

const ApiIntegrationSupportPage: React.FC<ApiIntegrationSupportPageProps> = ({ onBackHome }) => {
  const capabilities = [
    'Third-party API integration (payments, SMS, CRM, ERP)',
    'Custom API development with secure authentication',
    'Webhook architecture and event-driven workflows',
    'Data synchronization across web, mobile, and internal systems',
    'API monitoring, issue resolution, and long-term support contracts',
    'Performance optimization and versioned API lifecycle management'
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-40 pb-20 px-6 bg-gradient-to-r from-[#00055c] via-[#000d8c] to-[#0019ff] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block px-4 py-1 bg-[#010745] rounded mb-8 border border-white/10">
            <span className="text-[12px] font-black uppercase tracking-[0.2em]">API Integration & Support</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[1] tracking-tighter mb-8">Reliable API Integration and Technical Support</h1>
          <p className="text-xl max-w-3xl text-white/90">
            Integrate your software ecosystem securely and keep it stable with ongoing monitoring, optimization, and support.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-black text-[#1a1b1f] mb-8">What We Deliver</h2>
            <ul className="space-y-4 text-gray-600 text-lg">
              {capabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <button onClick={onBackHome} className="mt-10 bg-[#001fcc] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#0015a8] transition-colors">
              Back to Home
            </button>
          </div>
          <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-lg">
            <img loading="lazy" decoding="async"
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop"
              alt="API integration architecture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-24" data-consultation-form>
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-xl">
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
      </section>
    </div>
  );
};

export default ApiIntegrationSupportPage;

