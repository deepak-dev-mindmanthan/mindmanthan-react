import React from 'react';
import { CONTENT_CONFIG } from '../../config/contentConfig';

interface CompanyMegaMenuProps {
  onAboutUsClick?: () => void;
  onWhyUsClick?: () => void;
  onContactClick?: () => void;
  onEventsClick?: () => void;
  isOpen?: boolean;
  onItemClick?: () => void;
}

const CompanyMegaMenu: React.FC<CompanyMegaMenuProps> = ({
  onAboutUsClick,
  onWhyUsClick,
  onContactClick,
  onEventsClick,
  isOpen = false,
  onItemClick,
}) => {
  const companyLinks = [
    { label: 'About us', onClick: onAboutUsClick },
    { label: 'Why Us', onClick: onWhyUsClick },
    { label: 'Our Team', onClick: onAboutUsClick },
    { label: 'Partners & Certifications', onClick: onAboutUsClick },
    { label: 'Careers', onClick: onEventsClick, badge: 'WE ARE HIRING' },
    { label: 'Reviews & Awards', onClick: onAboutUsClick },
  ];

  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 w-[98vw] max-w-[1540px] pt-2 transition-all duration-300 z-[100] ${
        isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-4"
      }`}
      onClick={onItemClick}
    >
      <div className="bg-[#e8edff] shadow-none border-t border-gray-100 overflow-hidden flex flex-col lg:flex-row min-h-0">
        
        {/* Left Headline Column */}
        <div className="flex-1 p-10 lg:p-12 flex items-center">
          <h2 className="text-4xl lg:text-[52px] font-black text-[#1a1b1f] leading-[1.1] tracking-tight">
            Redefining industries <br /> through custom <br /> product development.
          </h2>
        </div>

        {/* Middle Links Column */}
        <div className="flex-[0.8] p-10 lg:p-12 flex flex-col justify-center">
          <ul className="space-y-4">
            {companyLinks.map((link) => (
              <li key={link.label} className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    if (link.onClick) {
                      link.onClick();
                    }
                    if (onItemClick) onItemClick();
                  }}
                  className="text-[15px] font-bold text-[#1a1b1f] hover:text-[#001fcc] transition-colors leading-tight cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  {link.label}
                </button>
                {link.badge && (
                  <span className="bg-[#001fcc] text-white text-[9px] font-black px-2 py-1 rounded uppercase tracking-wider">
                    {link.badge}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Recognition Column */}
        <div className="flex-[0.8] bg-white p-10 lg:p-12 relative overflow-hidden flex flex-col justify-start">
          <div className="relative z-10 max-w-xs">
            <p className="text-[20px] font-bold text-[#1a1b1f] leading-snug mb-8">
              {CONTENT_CONFIG.company.shortName} is trusted for secure and scalable software delivery across app, web, and IoT projects.
            </p>
            <button
              onClick={() => {
                if (onContactClick) onContactClick();
                if (onItemClick) onItemClick();
              }}
              className="text-[#001fcc] font-bold text-[14px] underline underline-offset-4 hover:text-[#0017a8] transition-colors text-left"
            >
              Talk to our team
            </button>
          </div>

          {/* Geometric Pattern */}
          <div className="absolute right-0 bottom-[-20px] w-[200px] h-[200px] opacity-100 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <g fill="#1a1b1f">
                {[...Array(8)].map((_, row) => {
                  const numInRow = row + 1;
                  const size = 3;
                  const spacing = 6;
                  const startY = 10;
                  const centerX = 80;

                  return [...Array(numInRow)].map((__, colIdx) => {
                    const posX = centerX + (colIdx - row / 2) * spacing;
                    const posY = startY + row * spacing;
                    return (
                      <rect
                        key={`${row}-${colIdx}`}
                        x={posX}
                        y={posY}
                        width={size}
                        height={size}
                        transform={`rotate(45, ${posX + size/2}, ${posY + size/2})`}
                      />
                    );
                  });
                })}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyMegaMenu;



