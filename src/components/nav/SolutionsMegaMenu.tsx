import React from 'react';
import { Cpu, Search, Code2, Smartphone } from 'lucide-react';

const TargetIcon = () => (
  <div className="relative w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-lg border border-gray-100">
    <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="40" stroke="#1e293b" strokeWidth="1" />
      <circle cx="50" cy="50" r="30" stroke="#1e293b" strokeWidth="1" />
      <circle cx="50" cy="50" r="20" stroke="#1e293b" strokeWidth="1" />
      <circle cx="50" cy="50" r="8" fill="#001fcc" />
    </svg>
  </div>
);

interface SolutionsMegaMenuProps {
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
  isOpen?: boolean;
  onItemClick?: () => void;
}

const SolutionsMegaMenu: React.FC<SolutionsMegaMenuProps> = ({
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
  isOpen = false,
  onItemClick
}) => {
  const solutions = [
    { label: 'Custom Software Development', action: onSoftwareClick },
    { label: 'Mobile App Development', action: onMobileAppClick },
    { label: 'Website & Web App Development', action: onWebAppClick },
    { label: 'IoT Solutions', action: onIotSolutionsClick },
    { label: 'Workflow Automation', action: onDigitalTransformationClick },
    { label: 'Security & Infrastructure', action: onSecurityClick },
    { label: 'Cloud & DevOps Services', action: onCloudDevopsClick },
    { label: 'API Integration & Support', action: onApiIntegrationSupportClick },
    { label: 'Maintenance & Technical Support', action: onConsultingClick },
    { label: 'iOS App Development', action: onIOSDevelopmentClick },
    { label: 'Android App Development', action: onAndroidDevelopmentClick }
  ];

  const industries = [
    { title: 'Custom Software (HRMS & ERP)', icon: <Code2 size={24} className="text-[#001fcc]" />, action: onSoftwareClick },
    { title: 'Apps & Mobility Platforms', icon: <Smartphone size={24} className="text-[#001fcc]" />, action: onMobileAppClick },
    { title: 'AI + IoT Solutions', icon: <Cpu size={24} className="text-[#001fcc]" />, action: onIotSolutionsClick },
    { title: 'SEO & Growth Services', icon: <Search size={24} className="text-[#001fcc]" />, action: onConsultingClick }
  ];

  const caseStudies = [
    { text: 'Insurance workflow and claims modernization platform', action: onInsuranceCaseStudyClick },
    { text: 'IoT operations dashboard for multi-site business', action: onCoffeeCaseStudyClick },
    { text: 'Unified website and mobile app platform for travel operations', action: onLondonTravelCaseStudyClick }
  ];

  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 w-[98vw] max-w-[1540px] pt-2 transition-all duration-300 z-[100] ${
        isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'
      }`}
      onClick={onItemClick}
    >
      <div className="bg-[#e8edff] shadow-lg border-t border-gray-100 flex flex-col lg:flex-row min-h-0">
        <div className="flex-[0.9] p-8 lg:p-10">
          <h3 className="text-[14px] font-black text-[#010417] mb-6 tracking-widest uppercase">Solutions</h3>
          <ul className="space-y-2.5">
            {solutions.map((item) => (
              <li key={item.label}>
                <button
                  type="button"
                  onClick={() => {
                    item.action?.();
                    onItemClick?.();
                  }}
                  className="text-[15px] font-bold text-gray-700 hover:text-[#001fcc] transition-colors leading-tight block text-left bg-transparent border-none p-0"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-[1.3] p-8 lg:p-10 bg-[#e0e7ff]/30">
          <h3 className="text-[14px] font-black text-[#010417] mb-6 tracking-widest uppercase">Service Focus</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industries.map((item) => (
              <button
                type="button"
                key={item.title}
                onClick={() => {
                  item.action?.();
                  onItemClick?.();
                }}
                className="bg-white p-5 border border-blue-100 hover:shadow-md transition-all hover:border-[#001fcc] cursor-pointer flex flex-col items-start gap-2 h-full min-h-[110px] text-left"
              >
                {item.icon}
                <span className="text-[15px] font-bold text-gray-800 leading-tight">{item.title}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 bg-[#f8f9fa] p-8 lg:p-10 relative">
          <div className="absolute top-1/2 -left-12 -translate-y-1/2 hidden lg:block z-20 scale-90">
            <TargetIcon />
          </div>

          <h3 className="text-[14px] font-black text-[#010417] mb-6 tracking-widest uppercase">Featured Case Studies</h3>
          <div className="space-y-5">
            {caseStudies.map((item, idx) => (
              <button
                type="button"
                key={idx}
                className="group/cs cursor-pointer text-left bg-transparent border-none p-0"
                onClick={() => {
                  item.action?.();
                  onItemClick?.();
                }}
              >
                <p className="text-[14px] font-bold text-gray-800 leading-relaxed mb-4 group-hover/cs:text-[#001fcc] transition-colors">
                  {item.text}
                </p>
                {idx < caseStudies.length - 1 && <div className="h-[1px] w-full bg-gray-200" />}
              </button>
            ))}
          </div>

          <div className="mt-6">
            <button
              onClick={(e) => {
                e.preventDefault();
                onPortfolioClick?.();
                onItemClick?.();
              }}
              className="text-[#001fcc] font-bold text-[18px] border-b-[2.5px] border-[#e8edff] hover:border-[#001fcc] pb-0.5 transition-all duration-300"
            >
              View more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsMegaMenu;

