
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES, ICON_MAP } from '../config/constants';

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="text-teal-400 font-bold tracking-widest uppercase text-xs mb-3">What We Do</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Excellent IT Solutions <br /> For Your Business</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We provide a wide range of services to help you build and scale your digital infrastructure with the latest technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="group bg-gray-900/50 border border-white/5 p-8 rounded-3xl hover:border-teal-500/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Card Hover Background */}
              <div className="absolute -right-12 -bottom-12 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl group-hover:bg-teal-500/20 transition-all" />
              
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-teal-400 mb-6 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                {ICON_MAP[service.icon]}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <a 
                href={service.link}
                className="inline-flex items-center text-sm font-bold text-teal-400 hover:text-white transition-colors group/link"
              >
                Learn More 
                <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center p-1 pl-6 bg-gray-900 border border-white/5 rounded-full">
            <span className="text-gray-400 text-sm">Need a custom solution for your business?</span>
            <button className="ml-6 px-6 py-2 bg-teal-500 text-white text-sm font-bold rounded-full hover:bg-teal-600 transition-colors">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

