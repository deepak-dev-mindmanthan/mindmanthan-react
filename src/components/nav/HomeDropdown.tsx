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
      <div className="bg-[#f2f4ff] rounded-lg shadow-2xl overflow-hidden py-8 px-8 flex flex-col gap-6 border border-blue-100">
        <button
          onClick={(e) => {
            e.preventDefault();
            onServicesClick && onServicesClick();
            if (onItemClick) onItemClick();
          }}
          className="text-[15px] font-bold text-[#1a1b1f] hover:text-[#001fcc] transition-colors leading-tight tracking-widest text-left"
        >
          IT SERVICES
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            onAndroidClick && onAndroidClick();
            if (onItemClick) onItemClick();
          }}
          className="text-[15px] font-bold text-[#1a1b1f] hover:text-[#001fcc] transition-colors leading-tight tracking-widest text-left"
        >
          APP DEVELOPMENT
        </button>
      </div>
    </div>
  );
};

export default HomeDropdown;
