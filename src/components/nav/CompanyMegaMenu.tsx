import React from 'react';

interface CompanyMegaMenuProps {
  onAboutUsClick?: () => void;
}

const CompanyMegaMenu: React.FC<CompanyMegaMenuProps> = ({ onAboutUsClick }) => {
  const companyLinks = [
    { label: 'About us', path: '#', onClick: onAboutUsClick },
    { label: 'Why US', path: '#' },
    { label: 'Our Team', path: '#' },
    { label: 'Partners & Certifications', path: '#' },
    { label: 'Careers', path: '#', badge: 'WE ARE HIRING' },
    { label: 'Reviews & Awards', path: '#' },
  ];

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[98vw] max-w-[1540px] pt-2 opacity-0 invisible translate-y-4 group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 transition-all duration-300 z-[100]">
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
                <a 
                  href={link.path} 
                  onClick={(e) => {
                    e.preventDefault();
                    if (link.onClick) {
                      link.onClick();
                    }
                  }}
                  className="text-[15px] font-bold text-[#1a1b1f] hover:text-[#001fcc] transition-colors leading-tight cursor-pointer"
                >
                  {link.label}
                </a>
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
              Tecnologia has been recognized as a Leader in the 2022 Gartner®
            </p>
            <a href="#" className="text-[#001fcc] font-bold text-[14px] underline underline-offset-4 hover:text-[#0017a8] transition-colors">
              View the report
            </a>
          </div>

          {/* Geometric Pattern - Simplified version of the Gartner grid */}
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
