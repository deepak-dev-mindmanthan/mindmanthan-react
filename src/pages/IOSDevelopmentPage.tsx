import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, Globe, Cpu, Shield, Smartphone, Check, ArrowLeft, Star, Laptop, Zap, Apple, Layout, Code } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { CONTENT_CONFIG } from '../config/contentConfig';
import CommonContactForm from '../components/CommonContactForm';

interface IOSDevelopmentPageProps {
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

const IOSTechItem: React.FC<{ title: string; index: number }> = ({ title, index }) => {
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
          Our iOS engineering team specializes in Swift and SwiftUI, delivering pixel-perfect interfaces and robust performance that leverages the latest Apple hardware capabilities.
        </p>
      </div>
    </div>
  );
};

const IOSDevelopmentPage: React.FC<IOSDevelopmentPageProps> = ({ onBackHome }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const scrollToConsultationForm = () => {
    const section = document.querySelector('[data-consultation-form]');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToIosLabSection = () => {
    const section = document.querySelector('[data-ios-lab-section]');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const testimonials: TestimonialData[] = [
    {
      id: 'steve',
      name: 'Steven Grant',
      role: 'CEO',
      company: 'LuxLifestyle',
      text: `${CONTENT_CONFIG.company.shortName} helped us dominate the App Store. The iOS application they built is not just an app; it is an experience that matches our brand's premium feel. Their mastery of SwiftUI and Core Animation is truly exceptional.`,
      logo: (
        <div className="w-16 h-16 bg-black rounded-md flex items-center justify-center shadow-md">
          <Apple className="text-white" size={32} fill="white" />
        </div>
      )
    },
    {
      id: 'sarah',
      name: 'Sarah Lindon',
      role: 'CTO',
      company: 'SecureHealth',
      text: 'Privacy and security were our top priorities for our iOS medical platform. The team implemented advanced encryption and biometric authentication that exceeded Apple\'s strict standards. A pleasure to work with.',
      logo: (
        <div className="w-16 h-16 bg-[#001fcc] rounded-md flex items-center justify-center shadow-md">
          <Shield className="text-white" size={32} />
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

  const iosStack = [
    "Swift & SwiftUI",
    "Objective-C Migration",
    "Core Data & Realm",
    "Apple Pay Integration",
    "ARKit & Metal",
    "WatchOS & TVOS"
  ];

  const benefits = [
    "Apple Design Guidelines",
    "Native Performance",
    "Premium Security",
    "Hardware Acceleration",
    "iCloud Ecosystem",
    "App Store Optimization"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden bg-gradient-to-r from-[#00055c] via-[#000d8c] to-[#0019ff] py-32 px-6 lg:px-12">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] h-full opacity-40 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 400 400" preserveAspectRatio="none">
            <pattern id="dotPatternIOS" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dotPatternIOS)" mask="url(#fadeMaskIOS)" />
            <defs>
              <linearGradient id="fadeGradientIOS" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="black" />
                <stop offset="100%" stopColor="white" />
              </linearGradient>
              <mask id="fadeMaskIOS">
                <rect width="100%" height="100%" fill="url(#fadeGradientIOS)" />
              </mask>
            </defs>
          </svg>
        </div>
        
        <div className="absolute top-0 right-[-10%] w-[60%] h-full bg-gradient-to-l from-white/5 to-transparent skew-x-[-20deg] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1 bg-[#010745] rounded mb-10 border border-white/5">
              <span className="text-white text-[12px] font-black uppercase tracking-[0.2em]">
                Apple Ecosystem Specialists
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-[88px] font-black text-white leading-[1] tracking-tighter mb-10">
              iOS <br /> Development
            </h2>

            <p className="text-white text-xl md:text-[28px] font-medium leading-tight max-w-3xl mb-14 opacity-95">
              Build premium applications for iPhone, iPad, and Apple Watch. We deliver the native quality your users demand.
            </p>

            <button
              type="button"
              onClick={scrollToConsultationForm}
              className="bg-[#e8edff] text-[#001fcc] px-10 py-4 rounded font-black text-sm uppercase tracking-widest hover:bg-white transition-all active:scale-95 shadow-2xl shadow-black/20"
            >
              Start Your iOS Journey
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-12 md:py-18 lg:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch">
          <div className="flex-[1.2]">
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-black text-[#1a1b1f] leading-[1.05] tracking-tight mb-8">
              Premium standards <br /> for Apple users
            </h2>
            <p className="text-gray-500 text-[18px] leading-relaxed mb-8 font-medium max-w-2xl">
              iOS users have the highest expectations for design and performance. We ensure your application stands out by adhering to the Human Interface Guidelines while pushing technical boundaries:
            </p>
            
            <ul className="space-y-4 mb-16">
              {[
                "Native Swift engineering for unmatched execution speed.",
                "Sleek animations and transitions that define the iOS feel.",
                "Seamless integration with iCloud, Siri, and Apple Pay.",
                "Rigorous testing on latest devices and beta OS versions."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-[11px] shrink-0"></div>
                  <span className="text-gray-500 font-medium text-[17px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {[
                { title: 'Swift & SwiftUI', desc: 'Modern reactive programming to build efficient and maintainable codebases.' },
                { title: 'Hardware Access', desc: 'Direct integration with FaceID, LiDAR, ProMotion, and the Neural Engine.' },
                { title: 'Privacy First', desc: 'Implementation of App Tracking Transparency and robust sandboxing.' },
                { title: 'App Store Success', desc: 'We handle the entire submission process, ensuring guideline compliance.' }
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

          <div className="flex-1 w-full min-h-[450px] flex relative">
            <div className="w-full rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100 border border-gray-100">
              <img loading="lazy" decoding="async" 
                src="/assets/external/blog-post-5.jpg" 
                alt="iPhone App Showcase"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Adjusted Process Section - Image Removed, Content Centered */}
      <section className="bg-white py-12 md:py-18 lg:py-24 px-6 lg:px-12 border-t border-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-black text-[#1a1b1f] leading-[1.05] tracking-tight mb-8">
              Native Precision <br /> Lifecycle
            </h2>
            <p className="text-gray-500 text-[18px] leading-relaxed mb-12 font-medium">
              Building for iOS requires attention to detail that web development simply doesn't. We manage the entire lifecycle to ensure your app is a first-class citizen on the platform.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {[
                { title: 'Human Interface Design', desc: 'Interfaces that follow Apple\'s design principles to ensure instant familiarity for users.', icon: <Layout size={24} /> },
                { title: 'Store Optimization', desc: 'Strategic metadata and keyword selection to help your app climb the App Store charts.', icon: <Code size={24} /> },
                { title: 'Hardware Integration', desc: 'Leveraging the full power of M-series and A-series chips for advanced tasks.', icon: <Zap size={24} /> }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                   <div className="w-14 h-14 bg-[#e8edff] rounded-2xl flex items-center justify-center text-[#001fcc] shrink-0 group-hover:bg-[#001fcc] group-hover:text-white transition-all duration-300 mb-6">
                      {item.icon}
                   </div>
                   <div>
                     <h4 className="text-[22px] font-black text-[#1a1b1f] mb-3">{item.title}</h4>
                     <p className="text-gray-500 text-[16px] leading-relaxed font-medium">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={scrollToIosLabSection}
              className="mt-16 bg-[#1a1b1f] text-white px-10 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-[#001fcc] transition-all shadow-xl shadow-gray-400/10"
            >
              Explore Our iOS Lab
            </button>
          </div>
        </div>
      </section>

      {/* Modern Stack Grid */}
      <section className="py-12 md:py-18 lg:py-24 bg-[#f8faff] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-black text-[#1a1b1f] tracking-tighter mb-6">
              Native iOS Capabilities
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              We leverage every capability of the Apple ecosystem to create truly integrated experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Interactive Widgets', icon: <Layout size={32} />, desc: 'Keep your users engaged directly from their home screen.' },
              { title: 'Biometric Security', icon: <Shield size={32} />, desc: 'Seamless and secure login using FaceID and TouchID.' },
              { title: 'Core Motion', icon: <Smartphone size={32} />, desc: 'Leverage gyroscope and accelerometer for dynamic interactions.' }
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

      {/* Tech List Section */}
      <section className="py-12 md:py-18 lg:py-24 bg-white px-6 border-t border-gray-100 overflow-visible" data-ios-lab-section>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="flex-1 lg:sticky lg:top-40">
              <h2 className="text-4xl md:text-5xl lg:text-[54px] font-black text-[#1a1b1f] leading-[1.1] tracking-tighter mb-10">
                Precision iOS <br /> engineering
              </h2>
              <p className="text-gray-500 text-[19px] leading-relaxed max-w-md font-medium">
                We handle the entire Apple development lifecycle, from Initial Prototyping to App Store Connect optimization.
              </p>
            </div>

            <div className="flex-1 w-full">
              <div className="flex flex-col">
                {iosStack.map((tech, idx) => (
                  <IOSTechItem key={tech} title={tech} index={idx} />
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
            What our iOS partners say
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
                <p className="text-gray-500 font-medium">{testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}</p>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-10">
            <div className="flex gap-4">
              <button type="button" aria-label="Previous testimonial" 
                onClick={prevTestimonial}
                className="w-14 h-14 rounded-full bg-[#f1f5f9] flex items-center justify-center text-gray-400 hover:bg-[#e2e8f0] hover:text-[#1a1b1f] transition-all active:scale-90"
              >
                <ArrowLeft size={24} strokeWidth={2.5} />
              </button>
              <button type="button" aria-label="Next testimonial" 
                onClick={nextTestimonial}
                className="w-14 h-14 rounded-full bg-[#f1f5f9] flex items-center justify-center text-gray-400 hover:bg-[#e2e8f0] hover:text-[#1a1b1f] transition-all active:scale-90"
              >
                <ArrowRight size={24} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Contact Form */}
      <section className="bg-white px-6 pb-12 md:pb-18 lg:pb-24 pt-16" data-consultation-form>
        <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[640px] lg:min-h-[800px]">
          <div className="flex-1 flex flex-col">
            <div className="bg-[#1a1b1f] p-12 md:p-16">
              <h2 className="text-4xl md:text-5xl lg:text-[64px] font-black text-white leading-[1.05] tracking-tighter">
                Launch Your App on the Store
              </h2>
            </div>
            <div className="bg-[#e8edff] flex-1 p-12 md:p-16">
              <p className="text-[#1a1b1f] text-lg font-medium mb-12 max-w-md leading-relaxed">
                We'll guide you through the Apple development roadmap. From initial architecture to the final App Store submission.
              </p>
              
              <div className="mb-16">
                <span className="text-[#1a1b1f] text-xl font-bold block mb-2">Call us at:</span>
                <a href={`tel:${SITE_CONFIG.business.phoneHref}`} className="text-[#1a1b1f] text-2xl font-black hover:text-[#001fcc] transition-colors">{SITE_CONFIG.business.phone}</a>
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
              formType="ios_development"
              title="Start Your iOS Project"
              subtitle=""
              buttonText="Send iOS Request"
              showPlatformType={true}
              selectLabel="Service Required"
              selectName="platformType"
              selectOptions={[
                "iPhone App Development",
                "iPad Development",
                "Apple Watch App",
                "Apple TV Application",
                "MacOS Software"
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default IOSDevelopmentPage;







