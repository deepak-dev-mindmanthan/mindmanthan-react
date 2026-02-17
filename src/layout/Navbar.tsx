import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_LINKS } from '../config/constants';
import { CONTENT_CONFIG } from '../config/contentConfig';
import SolutionsMegaMenu from '../components/nav/SolutionsMegaMenu';
import CompanyMegaMenu from '../components/nav/CompanyMegaMenu';
import ResourcesDropdown from '../components/nav/ResourcesDropdown';
import HomeDropdown from '../components/nav/HomeDropdown';

interface NavbarProps {
  onLogoClick?: () => void;
  onSoftwareClick?: () => void;
  onMobileAppClick?: () => void;
  onApiIntegrationSupportClick?: () => void;
  onWebAppClick?: () => void;
  onIotSolutionsClick?: () => void;
  onIOSDevelopmentClick?: () => void;
  onAndroidDevelopmentClick?: () => void;
  onDigitalTransformationClick?: () => void;
  onSecurityClick?: () => void;
  onCloudDevopsClick?: () => void;
  onConsultingClick?: () => void;
  onInsuranceCaseStudyClick?: () => void;
  onCoffeeCaseStudyClick?: () => void;
  onLondonTravelCaseStudyClick?: () => void;
  onPortfolioClick?: () => void;
  onBlogClick?: () => void;
  onAboutUsClick?: () => void;
  onWhyUsClick?: () => void;
  onServicesClick?: () => void;
  onContactClick?: () => void;
  onFaqClick?: () => void;
  onEventsClick?: () => void;
  onGetInTouchClick?: () => void;
  isLight?: boolean;
  isHomePage?: boolean;
}

const MindManthanLogo = ({ isLight = false }: { isLight?: boolean }) => {
  const primaryColor = isLight ? "#2563eb" : "#ffffff";
  const textColor = isLight ? "text-[#2563eb]" : "text-white";
  const subTextColor = isLight ? "text-gray-400" : "text-white/70";

  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="relative w-12 h-12 flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke={primaryColor}
            strokeWidth="2.5"
            strokeDasharray="1 8"
            strokeLinecap="round"
            className="animate-[spin_20s_linear_infinite] drop-shadow-[0_0_3px_rgba(45,212,191,0.5)]"
          />
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="1.5"
            strokeDasharray="40 120"
            className="opacity-30 animate-[spin_10s_linear_infinite_reverse]"
          />
        </svg>

        <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
          <path
            d="M8 30V12L20 22L32 12V30"
            stroke={isLight ? "#1a1b1f" : "white"}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-500 group-hover:stroke-blue-600"
          />
          <circle r="2" fill={primaryColor}>
            <animateMotion
              path="M8 30V12L20 22L32 12V30"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      <div className="flex flex-col leading-tight">
        <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${textColor} group-hover:text-blue-600`}>
          {CONTENT_CONFIG.company.shortName}
        </span>
      </div>
    </div>
  );
};

const Navbar: React.FC<NavbarProps> = ({ 
  onLogoClick, 
  onSoftwareClick, 
  onMobileAppClick,
  onApiIntegrationSupportClick,
  onWebAppClick,
  onIotSolutionsClick,
  onIOSDevelopmentClick,
  onAndroidDevelopmentClick,
  onDigitalTransformationClick,
  onSecurityClick,
  onCloudDevopsClick,
  onConsultingClick,
  onInsuranceCaseStudyClick,
  onCoffeeCaseStudyClick,
  onLondonTravelCaseStudyClick,
  onPortfolioClick,
  onBlogClick,
  onAboutUsClick,
  onWhyUsClick,
  onServicesClick,
  onContactClick,
  onGetInTouchClick,
  onFaqClick,
  onEventsClick,
  isLight = false,
  isHomePage = true 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpenSection, setMobileOpenSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const heroThreshold = isHomePage ? window.innerHeight * 0.8 : 500;
      const aboutThreshold = heroThreshold + 700;
      setIsScrolled(scrollPos > heroThreshold);

      if (isMobileMenuOpen) {
        setIsHidden(false);
        lastScrollY.current = scrollPos;
        return;
      }

      const minScrollDelta = 8;
      const showAtTopOffset = 80;

      if (scrollPos <= showAtTopOffset || scrollPos <= aboutThreshold) {
        setIsHidden(false);
      } else if (scrollPos > lastScrollY.current + minScrollDelta) {
        setIsHidden(true);
      } else if (scrollPos < lastScrollY.current - minScrollDelta) {
        setIsHidden(false);
      }

      lastScrollY.current = scrollPos;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const activeBg = isMobileMenuOpen
    ? 'bg-white/95 backdrop-blur-md border-b border-blue-50 shadow-sm py-3'
    : isScrolled
      ? 'bg-white/95 backdrop-blur-md border-b border-blue-50 shadow-sm py-3'
      : isLight
        ? 'bg-white/95 backdrop-blur-md border-b border-blue-50 shadow-sm py-3'
        : 'bg-transparent py-5';

  const isLightHeader = isScrolled || isLight || isMobileMenuOpen;
  const linkColor = isLightHeader ? 'text-[#1a1b1f]' : 'text-white';
  const hoverColor = 'hover:text-[#2563eb]';
  const ctaBg = isLight ? 'bg-[#001fcc] text-white' : 'bg-white text-black';
  const closeDropdown = () => setActiveDropdown(null);
  const toggleMobileSection = (label: string) => {
    setMobileOpenSection((prev) => (prev === label ? null : label));
  };
  const handleMobileAction = (action?: () => void) => {
    setIsMobileMenuOpen(false);
    setMobileOpenSection(null);
    if (action) action();
  };
  const handleGetInTouch = () => {
    const action =
      !isHomePage && onContactClick ? onContactClick : onGetInTouchClick;
    handleMobileAction(action);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${activeBg} ${
          isHidden ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onLogoClick}
              aria-label="Go to homepage"
              className="relative z-[70] flex-shrink-0 bg-transparent border-none p-0 text-left"
            >
              <MindManthanLogo isLight={isLightHeader} />
            </button>

            <div className="hidden lg:flex items-center space-x-12">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className={`${(link.label === 'Solutions' || link.label === 'Company') ? '' : 'relative'} group/nav`}
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
                >
                  <a 
                    href={link.path}
                    onClick={(e) => {
                      if (link.label === 'Home' && onLogoClick) {
                        e.preventDefault();
                        onLogoClick();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        closeDropdown();
                      } else if (link.label === 'Portfolio' && onPortfolioClick) {
                        e.preventDefault();
                        onPortfolioClick();
                        closeDropdown();
                      } else if (link.label === 'Blog' && onBlogClick) {
                        e.preventDefault();
                        onBlogClick();
                        closeDropdown();
                      } else if (link.label === 'Solutions' && onServicesClick) {
                        e.preventDefault();
                        onServicesClick();
                        closeDropdown();
                      } else if (link.label === 'Company' && onAboutUsClick) {
                        e.preventDefault();
                        onAboutUsClick();
                        closeDropdown();
                      } else if (!link.hasDropdown) {
                        closeDropdown();
                      }
                    }}
                    className={`text-[15px] font-medium transition-all flex items-center gap-1 py-4 group ${linkColor} ${hoverColor}`}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown size={14} className="group-hover:rotate-180 transition-all duration-300 opacity-60" />
                    )}
                  </a>

                  {link.hasDropdown && (
                    <>
                      {link.label === 'Solutions' ? (
                        <SolutionsMegaMenu
                          isOpen={activeDropdown === 'Solutions'}
                          onItemClick={closeDropdown}
                          onSoftwareClick={onSoftwareClick} 
                          onMobileAppClick={onMobileAppClick}
                          onApiIntegrationSupportClick={onApiIntegrationSupportClick}
                          onWebAppClick={onWebAppClick}
                          onIotSolutionsClick={onIotSolutionsClick}
                          onIOSDevelopmentClick={onIOSDevelopmentClick}
                          onAndroidDevelopmentClick={onAndroidDevelopmentClick}
                          onDigitalTransformationClick={onDigitalTransformationClick}
                          onSecurityClick={onSecurityClick}
                          onCloudDevopsClick={onCloudDevopsClick}
                          onConsultingClick={onConsultingClick}
                          onInsuranceCaseStudyClick={onInsuranceCaseStudyClick}
                          onCoffeeCaseStudyClick={onCoffeeCaseStudyClick}
                          onLondonTravelCaseStudyClick={onLondonTravelCaseStudyClick}
                          onPortfolioClick={onPortfolioClick}
                        />
                      ) : link.label === 'Company' ? (
                        <CompanyMegaMenu
                          isOpen={activeDropdown === 'Company'}
                          onItemClick={closeDropdown}
                          onAboutUsClick={onAboutUsClick}
                          onWhyUsClick={onWhyUsClick}
                          onContactClick={onContactClick || onGetInTouchClick}
                        />
                      ) : link.label === 'Resources' ? (
                        <ResourcesDropdown
                          isOpen={activeDropdown === 'Resources'}
                          onItemClick={closeDropdown}
                          onScheduleClick={onContactClick || onGetInTouchClick}
                          onFaqClick={onFaqClick || onGetInTouchClick}
                          onEventsClick={onEventsClick || onGetInTouchClick}
                        />
                      ) : link.label === 'Home' ? (
                        <HomeDropdown
                          isOpen={activeDropdown === 'Home'}
                          onItemClick={closeDropdown}
                          onServicesClick={onServicesClick}
                          onAndroidClick={onAndroidDevelopmentClick}
                        />
                      ) : null}
                    </>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center flex-shrink-0">
              <button
                onClick={() => {
                  handleGetInTouch();
                }}
                className="px-6 py-2.5 rounded-lg font-semibold text-[14px] text-white bg-blue-600 hover:bg-blue-700 transition-all active:scale-95 shadow-sm"
              >
                {CONTENT_CONFIG.cta.getInTouch}
              </button>
            </div>

            <div className="lg:hidden flex items-center gap-3">
              <button
                onClick={() => {
                  handleGetInTouch();
                }}
                className="px-3 py-2 rounded-md text-[12px] font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                {CONTENT_CONFIG.cta.getInTouch}
              </button>
              <button
                type="button"
                aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 relative z-[70] ${
                  isScrolled || isLight || isMobileMenuOpen ? 'text-[#1a1b1f]' : 'text-white'
                }`}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 z-[95] lg:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className={`absolute inset-x-0 top-16 bottom-0 bg-[#f4f7ff] backdrop-blur-xl transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}></div>
        <div className={`relative h-full overflow-y-auto transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <div className="pt-24 pb-16 px-0 flex flex-col items-start space-y-1">
            <div className="w-full flex items-center justify-start pb-4">
              {/* spacer for header alignment */}
            </div>
            {NAV_LINKS.map((link) => {
              if (!link.hasDropdown) {
                return (
                  <div key={link.label} className="w-full text-left">
                    <button
                      className="w-full text-left text-[#1a1b1f] text-2xl font-medium hover:text-[#001fcc] hover:bg-blue-100/60 transition-colors py-3 px-4 px-2"
                      onClick={(e) => {
                        e.preventDefault();
                        if (link.label === 'Portfolio') {
                          handleMobileAction(onPortfolioClick);
                        } else if (link.label === 'Blog') {
                          handleMobileAction(onBlogClick);
                        } else if (link.label === 'Home') {
                          handleMobileAction(onLogoClick);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                          setIsMobileMenuOpen(false);
                        }
                      }}
                    >
                      {link.label}
                    </button>
                  </div>
                );
              }

              if (link.label === 'Home') {
                return (
                  <div key={link.label} className="w-full text-left">
                    <button
                      className="w-full text-left text-[#1a1b1f] text-2xl font-medium hover:text-[#001fcc] hover:bg-blue-100/60 transition-colors inline-flex items-center gap-3 py-3 px-4 px px-2"
                      onClick={() => toggleMobileSection('Home')}
                    >
                      {link.label}
                      <ChevronDown
                        size={20}
                        className={`transition-transform ${mobileOpenSection === 'Home' ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div
                      className={`mt-3 flex flex-col items-start gap-3 overflow-hidden transition-all duration-300 ${
                        mobileOpenSection === 'Home' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                        <button
                          onClick={() => handleMobileAction(onServicesClick)}
                          className="w-full text-left text-[#334155] text-base font-semibold hover:text-[#001fcc] hover:bg-blue-100/60 transition-colors rounded-md px-6 py-3"
                        >
                          IT Services
                        </button>
                        <button
                          onClick={() => handleMobileAction(onAndroidDevelopmentClick)}
                          className="w-full text-left text-[#334155] text-base font-semibold hover:text-[#001fcc] hover:bg-blue-100/60 transition-colors rounded-md px-6 py-3"
                        >
                          App Development
                        </button>
                    </div>
                  </div>
                );
              }

              if (link.label === 'Solutions') {
                return (
                  <div key={link.label} className="w-full text-left">
                    <button
                      className="w-full text-left text-[#1a1b1f] text-2xl font-medium hover:text-[#001fcc] hover:bg-blue-100/60 transition-colors inline-flex items-center gap-3 py-3 px-4 px-2"
                      onClick={() => toggleMobileSection('Solutions')}
                    >
                      {link.label}
                      <ChevronDown
                        size={20}
                        className={`transition-transform ${mobileOpenSection === 'Solutions' ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div
                      className={`mt-3 flex flex-col items-start gap-3 overflow-hidden transition-all duration-300 ${
                        mobileOpenSection === 'Solutions' ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                        <button
                          onClick={() => handleMobileAction(onServicesClick)}
                          className="w-full text-left text-[#1e293b] text-base font-semibold hover:text-[#001fcc] hover:bg-blue-100/60 transition-colors rounded-md px-6 py-3"
                        >
                          All Services
                        </button>
                        <button onClick={() => handleMobileAction(onSoftwareClick)} className="w-full text-left text-[#334155] text-base font-semibold hover:text-[#001fcc] hover:bg-blue-100/60 transition-colors rounded-md px-6 py-3">
                          Custom Software Development
                        </button>
                        <button onClick={() => handleMobileAction(onMobileAppClick)} className="w-full text-left text-[#334155] text-base font-semibold hover:text-[#001fcc] hover:bg-blue-100/60 transition-colors rounded-md px-6 py-3">
                          Mobile App Development
                        </button>
                        <button onClick={() => handleMobileAction(onApiIntegrationSupportClick)} className="w-full text-left text-[#334155] text-base font-semibold hover:text-[#001fcc] hover:bg-blue-100/60 transition-colors rounded-md px-6 py-3">
                          API Integration & Support
                        </button>
                        <button onClick={() => handleMobileAction(onWebAppClick)} className="w-full text-left text-[#334155] text-base font-semibold hover:text-[#001fcc] hover:bg-blue-100/60 transition-colors rounded-md px-6 py-3">
                          Web App Development
                        </button>
                        <button onClick={() => handleMobileAction(onIotSolutionsClick)} className="w-full text-left text-[#334155] text-base font-semibold hover:text-[#001fcc] hover:bg-blue-100/60 transition-colors rounded-md px-6 py-3">
                          IoT Solutions
                        </button>
                        <button onClick={() => handleMobileAction(onIOSDevelopmentClick)} className="w-full text-left text-[#334155] text-base font-semibold hover:text-[#001fcc] hover:bg-blue-100/60 transition-colors rounded-md px-6 py-3">
                          iOS Development
                        </button>
                        <button onClick={() => handleMobileAction(onAndroidDevelopmentClick)} className="w-full text-left text-[#334155] text-base font-semibold hover:text-[#001fcc] hover:bg-blue-100/60 transition-colors rounded-md px-6 py-3">
                          Android Development
                        </button>
                        <button onClick={() => handleMobileAction(onDigitalTransformationClick)} className="w-full text-left text-[#334155] text-base font-semibold hover:text-[#001fcc] hover:bg-blue-100/60 transition-colors rounded-md px-6 py-3">
                          Digital Transformation
                        </button>
                        <button onClick={() => handleMobileAction(onSecurityClick)} className="w-full text-left text-[#334155] text-base font-semibold hover:text-[#001fcc] hover:bg-blue-100/60 transition-colors rounded-md px-6 py-3">
                          Security
                        </button>
                        <button onClick={() => handleMobileAction(onCloudDevopsClick)} className="w-full text-left text-[#334155] text-base font-semibold hover:text-[#001fcc] hover:bg-blue-100/60 transition-colors rounded-md px-6 py-3">
                          Cloud & DevOps
                        </button>
                        <button onClick={() => handleMobileAction(onConsultingClick)} className="w-full text-left text-[#334155] text-base font-semibold hover:text-[#001fcc] hover:bg-blue-100/60 transition-colors rounded-md px-6 py-3">
                          Consulting
                        </button>
                        <div className="mt-2 px-6 text-xs uppercase tracking-[0.25em] text-gray-400">
                          Case Studies
                        </div>
                        <button onClick={() => handleMobileAction(onInsuranceCaseStudyClick)} className="w-full text-left text-[#334155] text-base font-semibold hover:text-[#001fcc] hover:bg-blue-100/60 transition-colors rounded-md px-6 py-3">
                          Insurance Workflow Platform
                        </button>
                        <button onClick={() => handleMobileAction(onCoffeeCaseStudyClick)} className="w-full text-left text-[#334155] text-base font-semibold hover:text-[#001fcc] hover:bg-blue-100/60 transition-colors rounded-md px-6 py-3">
                          Coffee Supply Chain Platform
                        </button>
                        <button onClick={() => handleMobileAction(onLondonTravelCaseStudyClick)} className="w-full text-left text-[#334155] text-base font-semibold hover:text-[#001fcc] hover:bg-blue-100/60 transition-colors rounded-md px-6 py-3">
                          Travel App Platform
                        </button>
                    </div>
                  </div>
                );
              }

              if (link.label === 'Company') {
                return (
                  <div key={link.label} className="w-full text-left">
                    <button
                      className="w-full text-left text-[#1a1b1f] text-2xl font-medium hover:text-[#001fcc] hover:bg-blue-100/60 transition-colors inline-flex items-center gap-3 py-3 px-4 px-2"
                      onClick={() => toggleMobileSection('Company')}
                    >
                      {link.label}
                      <ChevronDown
                        size={20}
                        className={`transition-transform ${mobileOpenSection === 'Company' ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div
                      className={`mt-3 flex flex-col items-start gap-3 overflow-hidden transition-all duration-300 ${
                        mobileOpenSection === 'Company' ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                        <button onClick={() => handleMobileAction(onAboutUsClick)} className="w-full text-left text-[#334155] text-base font-semibold hover:text-[#001fcc] hover:bg-blue-100/60 transition-colors rounded-md px-6 py-3">
                          About Us
                        </button>
                        <button onClick={() => handleMobileAction(onWhyUsClick)} className="w-full text-left text-[#334155] text-base font-semibold hover:text-[#001fcc] hover:bg-blue-100/60 transition-colors rounded-md px-6 py-3">
                          Why Us
                        </button>
                    </div>
                  </div>
                );
              }

              if (link.label === 'Resources') {
                return (
                  <div key={link.label} className="w-full text-left">
                    <button
                      className="w-full text-left text-[#1a1b1f] text-2xl font-medium hover:text-[#001fcc] hover:bg-blue-100/60 transition-colors inline-flex items-center gap-3 px-2 py-3 px-4"
                      onClick={() => toggleMobileSection('Resources')}
                    >
                      {link.label}
                      <ChevronDown
                        size={20}
                        className={`transition-transform ${mobileOpenSection === 'Resources' ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div
                      className={`mt-3 flex flex-col items-start gap-3 overflow-hidden transition-all duration-300 ${
                        mobileOpenSection === 'Resources' ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                        <button onClick={() => handleMobileAction(onGetInTouchClick)} className="w-full text-left text-[#334155] text-base font-semibold hover:text-[#001fcc] hover:bg-blue-100/60 transition-colors rounded-md px-6 py-3">
                          Schedule a Consultation
                        </button>
                        <button onClick={() => handleMobileAction(onEventsClick)} className="w-full text-left text-[#334155] text-base font-semibold hover:text-[#001fcc] hover:bg-blue-100/60 transition-colors rounded-md px-6 py-3">
                          Events
                        </button>
                        <button onClick={() => handleMobileAction(onFaqClick)} className="w-full text-left text-[#334155] text-base font-semibold hover:text-[#001fcc] hover:bg-blue-100/60 transition-colors rounded-md px-6 py-3">
                          FAQ
                        </button>
                    </div>
                  </div>
                );
              }

              return null;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;





