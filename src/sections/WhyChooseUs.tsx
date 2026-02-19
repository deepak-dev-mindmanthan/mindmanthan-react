
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { STATS } from '../config/constants';

const WhyChooseUs: React.FC = () => {
  const features = [
    "24/7 Premium Support System",
    "Expert Professional Team Members",
    "Tailored Software Solutions",
    "Cutting-edge Security Protocols"
  ];

  return (
    <section className="py-24 bg-gradient-tech">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img loading="lazy" decoding="async" src="/assets/external/why-choose-us-image-1.jpg" alt="Tech" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
                <div className="bg-teal-500 p-8 rounded-2xl text-white">
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <div className="text-sm font-medium uppercase tracking-wider">Years of Excellence</div>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <img loading="lazy" decoding="async" src="/assets/external/why-choose-us-image-2.jpg" alt="Tech" className="rounded-2xl shadow-lg w-full h-80 object-cover" />
                <img loading="lazy" decoding="async" src="/assets/external/why-choose-us-image-3.jpg" alt="Tech" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="text-teal-400 font-bold tracking-widest uppercase text-xs mb-3">Why Choose Us</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">We Provide High-Quality <br /> IT Services</h2>
            <p className="text-gray-400 mb-8 text-lg">
              Our commitment to excellence and innovation sets us apart. We don't just provide services; we partner with you to achieve sustainable growth through technology.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-white font-medium">
                  <div className="w-6 h-6 bg-teal-500/20 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle2 className="w-4 h-4 text-teal-500" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
              {STATS.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;



