import React from 'react';

const FAQSection: React.FC = () => {
  return (
    <section id="faq-section" data-faq-section className="bg-white py-8 md:py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">What services do you provide?</h3>
            <p className="text-gray-600 mt-2">
              We provide custom software development, website development, mobile app development, IoT solutions,
              HRMS/ERP systems, data security, cloud and DevOps, API integration, SEO, and long-term support.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Do you build both web and mobile apps?</h3>
            <p className="text-gray-600 mt-2">
              Yes. We deliver corporate websites, web applications, Android apps, iOS apps, and hybrid mobile apps,
              including deployment and maintenance.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Can you modernize our existing systems?</h3>
            <p className="text-gray-600 mt-2">
              Yes. We modernize legacy systems, automate workflows, secure infrastructure, and integrate APIs while
              minimizing business disruption.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

