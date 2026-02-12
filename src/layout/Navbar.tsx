import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_LINKS } from '../config/constants';
import SolutionsMegaMenu from '../components/nav/SolutionsMegaMenu';
import CompanyMegaMenu from '../components/nav/CompanyMegaMenu';
import ResourcesDropdown from '../components/nav/ResourcesDropdown';
import HomeDropdown from '../components/nav/HomeDropdown';

interface NavbarProps {
  onLogoClick?: () => void;
  onSoftwareClick?: () => void;
  onMobileAppClick?: () => void;
  onStaffAugmentationClick?: () => void;
  onWebAppClick?: () => void;
  onBlockchainClick?: () => void;
  onIOSDevelopmentClick?: () => void;
  onAndroidDevelopmentClick?: () => void;
  onDigitalTransformationClick?: () => void;
  onSecurityClick?: () => void;
  onFintechClick?: () => void;
  onConsultingClick?: () => void;
  onInsuranceCaseStudyClick?: () => void;
  onCoffeeCaseStudyClick?: () => void;
  onLondonTravelCaseStudyClick?: () => void;
  onPortfolioClick?: () => void;
  onAboutUsClick?: () => void;
  onServicesClick?: () => void;
  onContactClick?: () => void;
  onFaqClick?: () => void;
  onEventsClick?: () => void;
  onGetInTouchClick?: () => void;
  isLight?: boolean;
  isHomePage?: boolean;
}

const MindManthanLogo = ({ isLight = false }: { isLight?: boolean }) => {
  const primaryColor = isLight ? "#001fcc" : "#2dd4bf";
  const textColor = isLight ? "text-[#1a1b1f]" : "text-white";
  const subTextColor = isLight ? "text-gray-400" : "text-white/60";

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
          Mind Manthan
        </span>
      </div>
    </div>
  );
};

const Navbar: React.FC<NavbarProps> = ({ 
  onLogoClick, 
  onSoftwareClick, 
  onMobileAppClick,
  onStaffAugmentationClick,
  onWebAppClick,
  onBlockchainClick,
  onIOSDevelopmentClick,
  onAndroidDevelopmentClick,
  onDigitalTransformationClick,
  onSecurityClick,
  onFintechClick,
  onConsultingClick,
  onInsuranceCaseStudyClick,
  onCoffeeCaseStudyClick,
  onLondonTravelCaseStudyClick,
  onPortfolioClick,
  onAboutUsClick,
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const heroThreshold = isHomePage ? window.innerHeight * 0.8 : 500;
      const aboutThreshold = heroThreshold + 700;
      setIsScrolled(scrollPos > heroThreshold);
      setIsHidden(scrollPos > aboutThreshold);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const activeBg = isLight 
    ? 'bg-white/95 backdrop-blur-md border-b border-blue-50 shadow-sm py-3' 
    : isScrolled 
      ? 'bg-[#010417] py-3 shadow-2xl backdrop-blur-md border-b border-white/5' 
      : 'bg-transparent py-5';

  const linkColor = isLight ? 'text-[#1a1b1f]' : 'text-white';
  const hoverColor = isLight ? 'hover:text-[#001fcc]' : 'hover:text-teal-400';
  const ctaBg = isLight ? 'bg-[#001fcc] text-white' : 'bg-white text-black';

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${activeBg} ${
          isHidden ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center">
            <div onClick={onLogoClick} className="relative z-[70] flex-shrink-0">
              <MindManthanLogo isLight={isLight} />
            </div>

            <div className="hidden lg:flex items-center space-x-12">
              {NAV_LINKS.map((link) => (
                <div 
                  key={link.label} 
                  className={`${(link.label === 'Solutions' || link.label === 'Company') ? '' : 'relative'} group/nav`}
                >
                  <a 
                    href={link.path}
                    onClick={(e) => {
                      if (link.label === 'Home' && onLogoClick) {
                        e.preventDefault();
                        onLogoClick();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else if (link.label === 'Portfolio' && onPortfolioClick) {
                        e.preventDefault();
                        onPortfolioClick();
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
                          onSoftwareClick={onSoftwareClick} 
                          onMobileAppClick={onMobileAppClick}
                          onStaffAugmentationClick={onStaffAugmentationClick}
                          onWebAppClick={onWebAppClick}
                          onBlockchainClick={onBlockchainClick}
                          onIOSDevelopmentClick={onIOSDevelopmentClick}
                          onAndroidDevelopmentClick={onAndroidDevelopmentClick}
                          onDigitalTransformationClick={onDigitalTransformationClick}
                          onSecurityClick={onSecurityClick}
                          onFintechClick={onFintechClick}
                          onConsultingClick={onConsultingClick}
                          onInsuranceCaseStudyClick={onInsuranceCaseStudyClick}
                          onCoffeeCaseStudyClick={onCoffeeCaseStudyClick}
                          onLondonTravelCaseStudyClick={onLondonTravelCaseStudyClick}
                          onPortfolioClick={onPortfolioClick}
                        />
                      ) : link.label === 'Company' ? (
                        <CompanyMegaMenu onAboutUsClick={onAboutUsClick} />
                      ) : link.label === 'Resources' ? (
                        <ResourcesDropdown onScheduleClick={onContactClick || onGetInTouchClick} onFaqClick={onFaqClick || onGetInTouchClick} onEventsClick={onEventsClick || onGetInTouchClick} />
                      ) : link.label === 'Home' ? (
                        <HomeDropdown onServicesClick={onServicesClick} onAndroidClick={onAndroidDevelopmentClick} />
                      ) : null}
                    </>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center flex-shrink-0">
              <button
                onClick={() => {
                  if (!isHomePage && onContactClick) {
                    onContactClick();
                  } else if (onGetInTouchClick) {
                    onGetInTouchClick();
                  }
                }}
                className="px-6 py-2.5 rounded-lg font-semibold text-[14px] text-white bg-blue-600 hover:bg-blue-700 transition-all active:scale-95 shadow-sm"
              >
                Get in touch
              </button>
            </div>

            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 relative z-[70] ${isLight && !isMobileMenuOpen ? 'text-[#1a1b1f]' : 'text-white'}`}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 z-[95] transition-all duration-500 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-[#010417] backdrop-blur-xl"></div>
        <div className="relative h-full flex flex-col items-center justify-center p-8 overflow-y-auto">
          <div className="flex flex-col items-center space-y-8 py-20">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="text-center">
                <a 
                  key={link.label} 
                  href={link.path} 
                  className="text-white text-3xl font-semibold hover:text-blue-400 transition-colors"
                  onClick={(e) => {
                    if (link.label === 'Home' && onLogoClick) {
                      e.preventDefault();
                      onLogoClick();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setIsMobileMenuOpen(false);
                    } else if (link.label === 'Portfolio' && onPortfolioClick) {
                      e.preventDefault();
                      onPortfolioClick();
                      setIsMobileMenuOpen(false);
                    } else if (!link.hasDropdown) {
                      setIsMobileMenuOpen(false);
                    }
                  }}
                >
                  {link.label}
                </a>
              </div>
            ))}
            <button onClick={onGetInTouchClick} className="mt-8 bg-blue-600 text-white px-12 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
