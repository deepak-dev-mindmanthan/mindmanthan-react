import React from 'react';

const FAQSection: React.FC = () => {
  return (
    <section id="faq-section" data-faq-section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">How can I schedule a consultation?</h3>
            <p className="text-gray-600 mt-2">Use the "Schedule a Consultation" link in the Resources menu or fill the contact form on our Contact page.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">What services do you provide?</h3>
            <p className="text-gray-600 mt-2">We provide custom software development, mobile and web apps, cloud solutions, and managed IT services.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Do you work with startups?</h3>
            <p className="text-gray-600 mt-2">Yes — we partner with startups and enterprises to deliver scalable software products.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
