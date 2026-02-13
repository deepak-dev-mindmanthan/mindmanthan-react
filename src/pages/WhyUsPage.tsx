import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import le1 from '../assets/images/le1.png';
import le2 from '../assets/images/le2.png';
import { SITE_CONFIG } from '../config/siteConfig';

interface WhyUsPageProps {
  onNavigateHome?: () => void;
  onExploreServices?: () => void;
}

const WhyUsPage: React.FC<WhyUsPageProps> = ({ onNavigateHome, onExploreServices }) => {
  const contactFormRef = useRef<HTMLElement>(null);

  const scrollToContactForm = () => {
    contactFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleExploreServices = () => {
    console.log('Explore our services clicked');
    onExploreServices?.();
  };

  const stats = [
    { year: '2010', label: 'Founded' },
    { year: '500+', label: 'Clients Trust Us' },
    { year: '1,000+', label: 'Projects Completed' },
    { year: 'Leader', label: 'Industry Recognition' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-white text-center py-20 lg:py-24 px-6 lg:px-12 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm uppercase tracking-widest text-gray-500 mb-8 font-medium">WHY US</div>
          <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6 text-[#1a1b1f]">
            We're the most trusted software partners in the industry
          </h1>
          <p className="text-xl text-gray-600">
            Everyone has a story. Here is ours.
          </p>
        </div>
      </div>

      {/* Image and Text Section */}
      <div className="py-20 lg:py-32 bg-white -mt-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <img loading="lazy" decoding="async" 
              src={le1} 
              alt="Team collaboration" 
              className="w-full h-auto rounded-lg shadow-lg mb-12 object-cover"
            />
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              With an unwavering passion to help your people succeed, years of technical experience backed by our custom solutions, process and unparalleled customer service, we deliver every time.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-black text-[#1a1b1f] mb-16 text-center">
            Our Impact
          </h2>
          <p className="text-center text-lg text-gray-600 mb-16">
            Drive you to achieve greater revenues, reduce inefficiencies and costs, and maximize profits.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="text-4xl lg:text-5xl font-black text-[#001fcc] mb-4">
                  {stat.year}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Three Pillars Section */}
      <div className="py-20 lg:py-32 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12">
            {/* People Card */}
            <div className="text-center">
              <div className="mb-8 flex justify-center">
                <svg className="w-16 h-16 text-[#001fcc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 12H9m6 0a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-[#1a1b1f] mb-4">People</h3>
              <p className="text-gray-600 leading-relaxed">
                You deserve the best. We have the best. Simply put, we care — even single one of us, from the account managers to the technicians. We hire, train and have the highest skilled team focused on putting your needs first.
              </p>
            </div>

            {/* Purpose Card */}
            <div className="text-center">
              <div className="mb-8 flex justify-center">
                <svg className="w-16 h-16 text-[#001fcc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-[#1a1b1f] mb-4">Purpose</h3>
              <p className="text-gray-600 leading-relaxed">
                Your security and peace of mind drive us to be better everyday. Simplifying the complex, saving you money and staying ahead of rapidly changing technology are why we wake up each morning. We're geeks with a cause.
              </p>
            </div>

            {/* Process Card */}
            <div className="text-center">
              <div className="mb-8 flex justify-center">
                <svg className="w-16 h-16 text-[#001fcc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 14h8M6 10h12M4 6h16" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-[#1a1b1f] mb-4">Process</h3>
              <p className="text-gray-600 leading-relaxed">
                It's not just what we do, but how we do it. Our time tested delivery methods, communication process and premium software and hardware tools ensure consistent results and customer satisfaction again and again.
              </p>
            </div>
          </div>
        </div>
      </div>

      
      
        {/* How We Do It - text left, image right */}
        <div className="py-12 lg:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-black text-[#1a1b1f] mb-6">How we do it</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  By strategically deploying and supporting technology, and ultimately by becoming your virtual CIO.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  That stability and long-term view carry over to our services and solutions, which can scale as your business grows.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We combine technology and business expertise with exceptional care and communications to build long-term, trusted relationships. One company, with one goal: enable our clients to unleash their power through the transformative power of technology.
                </p>
                <button type="button" onClick={handleExploreServices} className="relative inline-block text-[#001fcc] font-bold group cursor-pointer bg-none border-none p-0">
                  <span>Explore our services</span>
                  <span className="absolute left-0 -bottom-1 h-1 bg-[#1a1b1f] w-0 group-hover:w-full transition-all duration-300" />
                </button>
              </div>

              <div>
                <img loading="lazy" decoding="async"
                  src={le2}
                  alt="Team collaboration"
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>

      

      {/* Our Impact (placed just above footer) */}
      <div className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="relative bg-[#1f2023] text-white rounded-lg overflow-hidden p-10 lg:p-16">
            <div className="mb-6">
              <div className="inline-block bg-[#111214] text-xs text-gray-300 px-4 py-2 rounded-md">OUR IMPACT</div>
            </div>

            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-1/2">
                <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight text-[#e6e6f8]">
                  Drive you to achieve greater revenues, reduce inefficiencies and costs, and maximize profits.
                </h2>

                <div className="mt-8">
                  <button onClick={scrollToContactForm} className="inline-block bg-white text-[#1a1b1f] font-bold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition-colors cursor-pointer">Schedule a Free Consultation</button>
                </div>
              </div>

              <div className="lg:w-1/2 relative hidden lg:block">
                <div
                  style={{
                    position: 'absolute',
                    right: 32,
                    top: '10%',
                    width: 420,
                    height: 420,
                    backgroundImage: 'radial-gradient(#dcdaf0 2px, transparent 2px)',
                    backgroundSize: '24px 24px',
                    clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)',
                    opacity: 0.9,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section ref={contactFormRef} data-consultation-form className="py-20 lg:py-32 bg-white">
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
                    <label htmlFor="whyus-first-name" className="block text-[13px] font-bold text-gray-600 uppercase tracking-widest mb-3">First Name</label>
                    <input aria-label="Form field" id="whyus-first-name" type="text" className="w-full px-5 py-3 bg-white border border-gray-300 rounded-lg focus:border-[#001fcc] focus:ring-1 focus:ring-[#001fcc] outline-none transition-all" />
                  </div>
                  <div>
                    <label htmlFor="whyus-last-name" className="block text-[13px] font-bold text-gray-600 uppercase tracking-widest mb-3">Last Name</label>
                    <input aria-label="Form field" id="whyus-last-name" type="text" className="w-full px-5 py-3 bg-white border border-gray-300 rounded-lg focus:border-[#001fcc] focus:ring-1 focus:ring-[#001fcc] outline-none transition-all" />
                  </div>
                </div>

                <div>
                  <label htmlFor="whyus-company" className="block text-[13px] font-bold text-gray-600 uppercase tracking-widest mb-3">Company / Organization</label>
                  <input aria-label="Form field" id="whyus-company" type="text" className="w-full px-5 py-3 bg-white border border-gray-300 rounded-lg focus:border-[#001fcc] focus:ring-1 focus:ring-[#001fcc] outline-none transition-all" />
                </div>

                <div>
                  <label htmlFor="whyus-email" className="block text-[13px] font-bold text-gray-600 uppercase tracking-widest mb-3">Company Email</label>
                  <input aria-label="Form field" id="whyus-email" type="email" className="w-full px-5 py-3 bg-white border border-gray-300 rounded-lg focus:border-[#001fcc] focus:ring-1 focus:ring-[#001fcc] outline-none transition-all" />
                </div>

                <div>
                  <label htmlFor="whyus-phone" className="block text-[13px] font-bold text-gray-600 uppercase tracking-widest mb-3">Phone</label>
                  <input aria-label="Form field" id="whyus-phone" type="tel" className="w-full px-5 py-3 bg-white border border-gray-300 rounded-lg focus:border-[#001fcc] focus:ring-1 focus:ring-[#001fcc] outline-none transition-all" />
                </div>

                <div>
                  <label htmlFor="whyus-service" className="block text-[13px] font-bold text-gray-600 uppercase tracking-widest mb-3">How Can We Help You?</label>
                  <select aria-label="Form selection" id="whyus-service" className="w-full px-5 py-3 bg-white border border-gray-300 rounded-lg focus:border-[#001fcc] focus:ring-1 focus:ring-[#001fcc] outline-none transition-all appearance-none cursor-pointer">
                    <option>Select Option</option>
                    <option>Software Development</option>
                    <option>Mobile App Development</option>
                    <option>Web App Development</option>
                    <option>Consulting</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="whyus-message" className="block text-[13px] font-bold text-gray-600 uppercase tracking-widest mb-3">Message</label>
                  <textarea aria-label="Form message" id="whyus-message" rows={4} placeholder="To better assist you, please describe how we can help..." className="w-full px-5 py-3 bg-white border border-gray-300 rounded-lg focus:border-[#001fcc] focus:ring-1 focus:ring-[#001fcc] outline-none transition-all resize-none"></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-[#001fcc] text-white font-black text-base uppercase tracking-widest rounded-lg hover:bg-[#0017a8] active:scale-95 transition-all">
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="py-20 lg:py-32 bg-gradient-to-br from-[#1a1b1f] via-[#2d3748] to-[#1a1b1f] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-8">
            Partner with Us for Comprehensive Solutions
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            We're happy to answer any questions you may have and help you determine which of our services best fit your needs.
          </p>
          <a 
            href={`tel:${SITE_CONFIG.business.phoneHref}`} 
            className="inline-block text-lg font-bold text-[#2dd4bf] hover:text-cyan-300 transition-colors mb-8"
          >
            Call us at: {SITE_CONFIG.business.phone}
          </a>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContactForm}
              className="bg-[#001fcc] text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Schedule a Free Consultation
            </button>
            <button
              type="button"
              onClick={scrollToContactForm}
              className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-[#1a1b1f] transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsPage;


