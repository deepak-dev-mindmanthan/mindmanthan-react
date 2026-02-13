import React from 'react';

const StatsBanner: React.FC<{ onGetInTouchClick?: () => void }> = ({ onGetInTouchClick }) => {
  const stats = [
    { value: '10', label: 'Years', sublabel: 'in business' },
    { value: '7+', label: 'Years', sublabel: 'in app development' },
    { value: '10+', label: 'Startups', sublabel: 'unicorns built' },
    { value: '#1', label: 'Development', sublabel: 'company in USA' },
  ];

  return (
    <section className="bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-[#010417] leading-[1.1] tracking-tighter max-w-2xl">
            Mobile app development for funded companies
          </h2>
        </div>

        <div className="border-t border-gray-100 pt-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 flex-1">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  {/* Vertical Divider */}
                  <div className="w-[1px] h-10 bg-gray-300 mt-1"></div>
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-black text-[#010417] tracking-tight">{stat.value}</span>
                      <span className="text-lg font-bold text-[#010417] tracking-tight">{stat.label}</span>
                    </div>
                    <div className="text-gray-500 text-[15px] font-medium leading-tight mt-1">
                      {stat.sublabel}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex-shrink-0">
              <button onClick={onGetInTouchClick} className="bg-[#001fcc] text-white px-10 py-4 rounded-lg font-bold text-[15px] hover:bg-[#0017a8] transition-all active:scale-95 shadow-lg shadow-blue-500/20">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
