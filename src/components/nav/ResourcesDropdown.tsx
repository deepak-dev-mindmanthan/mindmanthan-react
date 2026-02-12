import React from 'react';

interface ResourcesDropdownProps {
  onScheduleClick?: () => void;
  onFaqClick?: () => void;
  onEventsClick?: () => void;
  isOpen?: boolean;
  onItemClick?: () => void;
}

const ResourcesDropdown: React.FC<ResourcesDropdownProps> = ({
  onScheduleClick,
  onFaqClick,
  onEventsClick,
  isOpen = false,
  onItemClick,
}) => {
  const links = [
    { label: 'Schedule a Consultation' },
    { label: 'Events' },
    { label: 'FAQ' },
  ];

  return (
    <div
      className={`absolute top-full left-0 w-80 pt-2 transition-all duration-300 z-[100] ${
        isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-4"
      }`}
      onClick={onItemClick}
    >
      <div className="bg-[#f2f4ff] rounded-lg shadow-2xl overflow-hidden py-8 px-8 flex flex-col gap-6 border border-blue-100">
        {links.map((link) => (
          link.label === 'Schedule a Consultation' ? (
            <button
              key={link.label}
              onClick={(e) => {
                e.preventDefault();
                onScheduleClick && onScheduleClick();
                if (onItemClick) onItemClick();
              }}
              className="text-[15px] font-bold text-[#1a1b1f] hover:text-[#001fcc] transition-colors leading-tight tracking-widest uppercase text-left"
            >
              {link.label}
            </button>
          ) : link.label === 'FAQ' ? (
            <button
              key={link.label}
              onClick={(e) => {
                e.preventDefault();
                onFaqClick && onFaqClick();
                if (onItemClick) onItemClick();
              }}
              className="text-[15px] font-bold text-[#1a1b1f] hover:text-[#001fcc] transition-colors leading-tight tracking-widest uppercase text-left"
            >
              {link.label}
            </button>
          ) : link.label === 'Events' ? (
            <button
              key={link.label}
              onClick={(e) => {
                e.preventDefault();
                onEventsClick && onEventsClick();
                if (onItemClick) onItemClick();
              }}
              className="text-[15px] font-bold text-[#1a1b1f] hover:text-[#001fcc] transition-colors leading-tight tracking-widest uppercase text-left"
            >
              {link.label}
            </button>
          ) : (
            <a
              key={link.label}
              href="#"
              className="text-[15px] font-bold text-[#1a1b1f] hover:text-[#001fcc] transition-colors leading-tight tracking-widest uppercase"
            >
              {link.label}
            </a>
          )
        ))}
      </div>
    </div>
  );
};

export default ResourcesDropdown;
