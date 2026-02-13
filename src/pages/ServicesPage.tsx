import React from 'react';
import { CheckCircle2, Network, Users, Shield, Code, Smartphone, Cloud } from 'lucide-react';
import service1 from '../assets/images/service1.png';
import { SITE_CONFIG } from '../config/siteConfig';

interface ServicesPageProps {
  onNavigateHome?: () => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigateHome }) => {
  const services = [
    {
      title: 'NFT Development',
      description: "Non Fungible Tokens are in Trend. We've been building them since 2016",
      icon: CheckCircle2,
    },
    {
      title: 'Managed Services',
      description: 'Free up your internal resources to focus on the business by letting us handle day to day support services, management, and monitoring of your IT.',
      icon: Network,
    },
    {
      title: 'IT Consulting & Advisory',
      description: 'The right technology, implemented properly, appropriately managed and monitored, can lead to significant gains in growth',
      icon: Users,
    },
    {
      title: 'Cyber Security',
      description: 'Our experts can identify vulnerabilities, assess risks, and implement robust security measures to safeguard your systems and data.',
      icon: Shield,
    },
    {
      title: 'Web Development',
      description: 'Our web development services can help you establish an impactful online presence and reach your target audience effectively.',
      icon: Code,
    },
    {
      title: 'Mobile Development',
      description: 'We can help you create a customized mobile app that aligns with your brand and goals, with expertise in various mobile platforms.',
      icon: Smartphone,
    },
    {
      title: 'Cloud Services',
      description: 'With our expertise in cloud technologies, we can help you find the right cloud solutions that meet your business needs and goals.',
      icon: Cloud,
    },
  ];

  const stats = [
    { value: '10+', label: 'Years in business' },
    { value: '500+', label: 'Clients Served' },
    { value: '1,000+', label: 'Projects Completed' },
    { value: '#1', label: 'Development Company' },
  ];

  const technologies = ['JavaScript', 'TypeScript', 'Node.JS', 'React', 'Swift', 'Java', 'Objective-C', 'RxJava'];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-medium">Solutions</div>
            <h1 className="text-5xl lg:text-6xl font-black text-[#1a1b1f] mb-6 leading-tight">
              Services & Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take your company to new heights by investing in our reliable and efficient technology solutions.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <img loading="lazy" decoding="async"
              src={service1}
              alt="Team working in office"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Description Section */}
          <div className="mt-16 mb-12">
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              Mind manthan is your trusted partner for IT management, data security, and cloud technology with one goal in mind: to transform the way your business works in order to save you time and money.
            </p>

            <h2 className="text-3xl lg:text-4xl font-black text-[#1a1b1f] mb-12 leading-tight max-w-2xl">
              Comprehensive IT services for businesses
            </h2>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
              <div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  When we say comprehensive, we mean comprehensive. Mind manthan has the experience and expertise to provide an excellent experience across spheres, for truly holistic IT.
                </p>
              </div>
              <div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Some MSPs struggle to offer consulting or network services. But your organization needs the entire experience to stop worrying about IT. Learn more about our services below.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#e8f0ff] to-[#f0f6ff]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div key={idx} className="bg-white rounded-lg p-10 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="mb-6">
                    <IconComponent className="w-14 h-14 text-[#001fcc]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-black text-[#1a1b1f] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <button type="button" className="text-[#001fcc] font-bold hover:text-[#0012a8] transition-colors text-sm">
                    Learn more
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why choose services section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-black text-[#1a1b1f] mb-6">
                Why choose services from Mind manthan?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                Mind manthan services provide businesses with an edge over the competition with a variety of benefits. Opting for outsourced IT services improves the efficiency of business and builds trust with customers and clients. Our services can be tailored to meet specific needs to match your goals.
              </p>
              <button
                onClick={onNavigateHome}
                className="inline-block bg-[#001fcc] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#0012a8] transition-colors"
              >
                Get in touch
              </button>
            </div>

            <div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img loading="lazy" decoding="async"
                  src={service1}
                  alt="Team working in office"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#001fcc] to-[#0012a8] text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-5xl lg:text-6xl font-black mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-[#1a1b1f] mb-4">
              We use latest technologies to run your project smoothly
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="px-8 py-4 border-2 border-[#001fcc] text-[#001fcc] font-bold rounded-lg hover:bg-[#001fcc] hover:text-white transition-all duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section data-consultation-form className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-lg overflow-hidden shadow-lg">
            {/* Left Side - Benefits */}
            <div className="bg-gradient-to-br from-[#e8f0ff] to-[#f0f6ff] p-12 lg:p-16 flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-black text-[#1a1b1f] mb-8">Schedule a Free Consultation</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  We're happy to answer any questions you may have and help you determine which of our services best fit your needs.
                </p>
              </div>

              <div>
                <div className="mb-8">
                  <div className="text-sm font-bold text-gray-600 mb-2">Call us at:</div>
                  <div className="text-3xl font-black text-[#1a1b1f]">{SITE_CONFIG.business.phone}</div>
                </div>

                <div>
                  <div className="text-sm font-bold text-gray-600 mb-4">Your benefits:</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#001fcc]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-800 font-bold">Client-oriented</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#001fcc]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-800 font-bold">Results-driven</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#001fcc]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-800 font-bold">Independent</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#001fcc]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-800 font-bold">Problem-solving</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#001fcc]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-800 font-bold">Competent</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#001fcc]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-800 font-bold">Transparent</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white p-12 lg:p-16">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] font-bold text-gray-600 uppercase tracking-widest mb-3">First Name</label>
                    <input aria-label="Form field" type="text" className="w-full px-5 py-3 bg-white border border-gray-300 rounded-lg focus:border-[#001fcc] focus:ring-1 focus:ring-[#001fcc] outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-gray-600 uppercase tracking-widest mb-3">Last Name</label>
                    <input aria-label="Form field" type="text" className="w-full px-5 py-3 bg-white border border-gray-300 rounded-lg focus:border-[#001fcc] focus:ring-1 focus:ring-[#001fcc] outline-none transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-gray-600 uppercase tracking-widest mb-3">Company / Organization</label>
                  <input aria-label="Form field" type="text" className="w-full px-5 py-3 bg-white border border-gray-300 rounded-lg focus:border-[#001fcc] focus:ring-1 focus:ring-[#001fcc] outline-none transition-all" />
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-gray-600 uppercase tracking-widest mb-3">Company Email</label>
                  <input aria-label="Form field" type="email" className="w-full px-5 py-3 bg-white border border-gray-300 rounded-lg focus:border-[#001fcc] focus:ring-1 focus:ring-[#001fcc] outline-none transition-all" />
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-gray-600 uppercase tracking-widest mb-3">Phone</label>
                  <input aria-label="Form field" type="tel" className="w-full px-5 py-3 bg-white border border-gray-300 rounded-lg focus:border-[#001fcc] focus:ring-1 focus:ring-[#001fcc] outline-none transition-all" />
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-gray-600 uppercase tracking-widest mb-3">How Can We Help You?</label>
                  <select aria-label="Form selection" className="w-full px-5 py-3 bg-white border border-gray-300 rounded-lg focus:border-[#001fcc] focus:ring-1 focus:ring-[#001fcc] outline-none transition-all appearance-none cursor-pointer">
                    <option>Select Option</option>
                    <option>Software Development</option>
                    <option>Mobile App Development</option>
                    <option>Web App Development</option>
                    <option>Consulting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-gray-600 uppercase tracking-widest mb-3">Message</label>
                  <textarea aria-label="Form message" rows={4} placeholder="To better assist you, please describe how we can help..." className="w-full px-5 py-3 bg-white border border-gray-300 rounded-lg focus:border-[#001fcc] focus:ring-1 focus:ring-[#001fcc] outline-none transition-all resize-none"></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-[#001fcc] text-white font-black text-base uppercase tracking-widest rounded-lg hover:bg-[#0017a8] active:scale-95 transition-all">
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-[#1a1b1f] mb-8">
            Got a project?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Let's talk about how we can help you succeed
          </p>
          <button
            onClick={onNavigateHome}
            className="inline-block bg-[#001fcc] text-white font-bold px-10 py-4 rounded-lg hover:bg-[#0012a8] transition-colors text-lg"
          >
            Schedule a Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;


