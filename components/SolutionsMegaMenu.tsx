import React from 'react';
import { Shield, RefreshCw, Cpu, TrendingUp, Database, Smartphone } from 'lucide-react';

const TargetIcon = () => (
  <div className="relative w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-lg border border-gray-100">
    <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="40" stroke="#1e293b" strokeWidth="1" />
      <circle cx="50" cy="50" r="30" stroke="#1e293b" strokeWidth="1" />
      <circle cx="50" cy="50" r="20" stroke="#1e293b" strokeWidth="1" />
      <circle cx="50" cy="50" r="8" fill="#001fcc" />
      <path d="M85 15 L55 45" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
      <path d="M52 48 L62 48 L62 38" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M82 12 L90 20" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </div>
);

interface SolutionsMegaMenuProps {
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
}

const SolutionsMegaMenu: React.FC<SolutionsMegaMenuProps> = ({ 
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
  onPortfolioClick
}) => {
  const solutions = [
    { label: 'Custom Software Development', path: '#', isSoftware: true },
    { label: 'Mobile App Development', path: '#', isMobile: true },
    { label: 'Staff Augmentation', path: '#', isStaffAug: true },
    { label: 'Web App Development', path: '#', isWebApp: true },
    { label: 'Blockchain', path: '#', isBlockchain: true },
    { label: 'IOS Development', path: '#', isIOS: true },
    { label: 'Android Development', path: '#', isAndroid: true }
  ];

  const industries = [
    {
      title: 'CRM & ERP Development',
      icon: <Database size={24} className="text-[#001fcc]" />,
      isTelemedicine: true
    },
    {
      title: 'IOS & Android Apps',
      icon: <Smartphone size={24} className="text-[#001fcc]" />,
      isDating: true
    },
    {
      title: 'AI & IOT Solutions',
      icon: <Cpu size={24} className="text-[#001fcc]" />,
      isFintech: true
    },
    {
      title: 'SEO & Digital Marketing',
      icon: <TrendingUp size={24} className="text-[#001fcc]" />,
      isConsulting: true
    }
  ];

  const caseStudies = [
    { text: 'Major Insurance Provider Saves $750k per Month With Big Data Migration', isInsurance: true, isCoffee: false, isLondon: false },
    { text: 'Maximizing Efficiency with Proper Technology Implementation – Coffee Success Story', isInsurance: false, isCoffee: true, isLondon: false },
    { text: 'Strategic Move to an AI-supported application for Public Safety Travel App in London', isInsurance: false, isCoffee: false, isLondon: true }
  ];

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[98vw] max-w-[1540px] pt-2 opacity-0 invisible translate-y-4 group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 transition-all duration-300 z-[100]">
      <div className="bg-[#e8edff] shadow-lg border-t border-gray-100 flex flex-col lg:flex-row min-h-0">
        
        <div className="flex-[0.8] p-8 lg:p-10">
          <h3 className="text-[14px] font-black text-[#010417] mb-6 tracking-widest uppercase">Solutions</h3>
          <ul className="space-y-2.5">
            {solutions.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.path} 
                  onClick={(e) => {
                    if (item.isSoftware && onSoftwareClick) { e.preventDefault(); onSoftwareClick(); }
                    else if (item.isMobile && onMobileAppClick) { e.preventDefault(); onMobileAppClick(); }
                    else if (item.isStaffAug && onStaffAugmentationClick) { e.preventDefault(); onStaffAugmentationClick(); }
                    else if (item.isWebApp && onWebAppClick) { e.preventDefault(); onWebAppClick(); }
                    else if (item.isBlockchain && onBlockchainClick) { e.preventDefault(); onBlockchainClick(); }
                    else if (item.isIOS && onIOSDevelopmentClick) { e.preventDefault(); onIOSDevelopmentClick(); }
                    else if (item.isAndroid && onAndroidDevelopmentClick) { e.preventDefault(); onAndroidDevelopmentClick(); }
                  }}
                  className="text-[15px] font-bold text-gray-700 hover:text-[#001fcc] transition-colors leading-tight block"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-[1.4] p-8 lg:p-10 bg-[#e0e7ff]/30">
          <h3 className="text-[14px] font-black text-[#010417] mb-6 tracking-widest uppercase">Industry Focus</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industries.map((item) => (
              <div 
                key={item.title} 
                onClick={() => {
                   if (item.isTelemedicine && onDigitalTransformationClick) onDigitalTransformationClick(); // Map to existing prop or add new one? Keeping existing for now to avoid errors, user can update props later if needed.
                   if (item.isDating && onSecurityClick) onSecurityClick(); // Map to existing prop
                   if (item.isFintech && onFintechClick) onFintechClick();
                   if (item.isConsulting && onConsultingClick) onConsultingClick();
                }}
                className="bg-white p-5 border border-blue-100 hover:shadow-md transition-all hover:border-[#001fcc] group/card cursor-pointer flex flex-col items-start gap-2 h-full min-h-[110px]"
              >
                <div className="mb-0.5">
                  {item.icon}
                </div>
                <span className="text-[15px] font-bold text-gray-800 leading-tight">
                  {item.title}
                </span>
              </div>
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
              <div 
                key={idx} 
                className="group/cs cursor-pointer"
                onClick={(e) => {
                  if (item.isInsurance && onInsuranceCaseStudyClick) {
                    e.preventDefault();
                    onInsuranceCaseStudyClick();
                  } else if (item.isCoffee && onCoffeeCaseStudyClick) {
                    e.preventDefault();
                    onCoffeeCaseStudyClick();
                  } else if (item.isLondon && onLondonTravelCaseStudyClick) {
                    e.preventDefault();
                    onLondonTravelCaseStudyClick();
                  }
                }}
              >
                <p className="text-[14px] font-bold text-gray-800 leading-relaxed mb-4 group-hover/cs:text-[#001fcc] transition-colors">
                  {item.text}
                </p>
                {idx < caseStudies.length - 1 && <div className="h-[1px] w-full bg-gray-200" />}
              </div>
            ))}
          </div>

          <div className="mt-6">
            <button 
              onClick={(e) => {
                e.preventDefault();
                if (onPortfolioClick) onPortfolioClick();
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