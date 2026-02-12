import React from 'react';

interface HomeDropdownProps {
  onServicesClick?: () => void;
  onAndroidClick?: () => void;
  isOpen?: boolean;
  onItemClick?: () => void;
}

const HomeDropdown: React.FC<HomeDropdownProps> = ({
  onServicesClick,
  onAndroidClick,
  isOpen = false,
  onItemClick,
}) => {
  return (
    <div
      className={`absolute top-full left-0 w-72 pt-2 transition-all duration-300 z-[100] ${
        isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-4"
      }`}
      onClick={onItemClick}
    >
      <div className="bg-[#1a1b1f] rounded-lg shadow-2xl overflow-hidden py-10 px-10 flex flex-col gap-10">
        <button
          onClick={(e) => {
            e.preventDefault();
            onServicesClick && onServicesClick();
            if (onItemClick) onItemClick();
          }}
          className="text-[17px] font-black text-white hover:text-teal-400 transition-colors leading-tight tracking-widest text-left"
        >
          IT SERVICES
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            onAndroidClick && onAndroidClick();
            if (onItemClick) onItemClick();
          }}
          className="text-[17px] font-black text-white hover:text-teal-400 transition-colors leading-tight tracking-widest text-left"
        >
          APP DEVELOPMENT
        </button>
      </div>
    </div>
  );
};

export default HomeDropdown;
