import React from 'react';

interface HomeDropdownProps {
  onServicesClick?: () => void;
  onAndroidClick?: () => void;
}

const HomeDropdown: React.FC<HomeDropdownProps> = ({ onServicesClick, onAndroidClick }) => {
  return (
    <div className="absolute top-full left-0 w-72 pt-2 opacity-0 invisible translate-y-4 group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 transition-all duration-300 z-[100]">
      <div className="bg-[#1a1b1f] rounded-lg shadow-2xl overflow-hidden py-10 px-10 flex flex-col gap-10">
        <button
          onClick={(e) => { e.preventDefault(); onServicesClick && onServicesClick(); }}
          className="text-[17px] font-black text-white hover:text-teal-400 transition-colors leading-tight tracking-widest text-left"
        >
          IT SERVICES
        </button>

        <button
          onClick={(e) => { e.preventDefault(); onAndroidClick && onAndroidClick(); }}
          className="text-[17px] font-black text-white hover:text-teal-400 transition-colors leading-tight tracking-widest text-left"
        >
          APP DEVELOPMENT
        </button>
      </div>
    </div>
  );
};

export default HomeDropdown;