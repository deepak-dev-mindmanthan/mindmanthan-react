import React from 'react';

interface ResourcesDropdownProps {
  onScheduleClick?: () => void;
  onFaqClick?: () => void;
  onEventsClick?: () => void;
}

const ResourcesDropdown: React.FC<ResourcesDropdownProps> = ({ onScheduleClick, onFaqClick, onEventsClick }) => {
  const links = [
    { label: 'Schedule a Consultation' },
    { label: 'Events' },
    { label: 'FAQ' },
  ];

  return (
    <div className="absolute top-full left-0 w-80 pt-2 opacity-0 invisible translate-y-4 group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 transition-all duration-300 z-[100]">
      <div className="bg-[#1a1b1f] rounded-lg shadow-2xl overflow-hidden py-10 px-10 flex flex-col gap-10">
        {links.map((link) => (
          link.label === 'Schedule a Consultation' ? (
            <button
              key={link.label}
              onClick={(e) => { e.preventDefault(); onScheduleClick && onScheduleClick(); }}
              className="text-[17px] font-black text-white hover:text-teal-400 transition-colors leading-tight tracking-widest uppercase text-left"
            >
              {link.label}
            </button>
          ) : link.label === 'FAQ' ? (
            <button
              key={link.label}
              onClick={(e) => { e.preventDefault(); onFaqClick && onFaqClick(); }}
              className="text-[17px] font-black text-white hover:text-teal-400 transition-colors leading-tight tracking-widest uppercase text-left"
            >
              {link.label}
            </button>
          ) : link.label === 'Events' ? (
            <button
              key={link.label}
              onClick={(e) => { e.preventDefault(); onEventsClick && onEventsClick(); }}
              className="text-[17px] font-black text-white hover:text-teal-400 transition-colors leading-tight tracking-widest uppercase text-left"
            >
              {link.label}
            </button>
          ) : (
            <a
              key={link.label}
              href="#"
              className="text-[17px] font-black text-white hover:text-teal-400 transition-colors leading-tight tracking-widest uppercase"
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