import React from 'react';

const RecognitionGrid: React.FC = () => {
  const technologies = [
    'JavaScript', 'TypeScript', 'Node.JS', 'React',
    'Swift', 'Java', 'Objective-C', 'RxJava'
  ];

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* BLOCK 1: Organizations recognized our work */}
          <div className="bg-[#1a1b1f] rounded-[3rem] p-12 md:p-16 flex flex-col justify-between min-h-[600px] text-white">
            <div>
              <h2 className="text-4xl md:text-6xl font-black leading-[1.05] tracking-tighter mb-16">
                Organizations <br /> recognized our <br /> work
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-12">
                <div>
                  <div className="text-[28px] font-black mb-4">Forbes</div>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest leading-relaxed">
                    Forbes Member <br /> Council 2022
                  </p>
                </div>
                <div>
                  <div className="text-[28px] font-black mb-4">Google</div>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest leading-relaxed">
                    Developers Certified <br /> Agency
                  </p>
                </div>
                <div>
                  <div className="text-[28px] font-black mb-4">Clutch</div>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest leading-relaxed">
                    Top App Development <br /> Company in USA 2023
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <button className="bg-[#d9e2ff] text-[#001fcc] px-8 py-3.5 rounded-lg font-bold text-[14px] hover:bg-white transition-all active:scale-95">
                View more awards
              </button>
            </div>
          </div>

          {/* BLOCK 2: Gartner Recognition */}
          <div className="bg-[#f1f5f9] rounded-[3rem] p-12 md:p-16 flex flex-col justify-between min-h-[600px] relative overflow-hidden">
            <div className="max-w-md relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-[#1a1b1f] leading-[1.1] tracking-tighter mb-12">
                Mind Manthan has been recognized as a Leader in the 2022 Gartner®
              </h2>
              <button type="button" className="text-[#001fcc] font-bold text-[14px] underline underline-offset-4 hover:text-[#0017a8]">
                View the report
              </button>
            </div>

            {/* EXACT Gartner Pattern Graphic from Screenshot */}
            <div className="absolute right-[-40px] bottom-[-40px] w-[450px] h-[450px] pointer-events-none">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <g fill="#1a1b1f">
                  {[...Array(14)].map((_, row) => {
                    const numInRow = row + 1;
                    // Size scales down as we go further down the pyramid
                    const baseSize = 10;
                    const size = Math.max(1.5, baseSize - row * 0.6);
                    
                    const spacingX = 16;
                    const spacingY = 14;
                    const centerX = 120; // Shifted slightly right to match layout
                    const startY = 40;

                    return [...Array(numInRow)].map((col, colIdx) => {
                      const posX = centerX + (colIdx - row / 2) * spacingX;
                      const posY = startY + row * spacingY;
                      
                      return (
                        <rect
                          key={`${row}-${colIdx}`}
                          x={posX}
                          y={posY}
                          width={size}
                          height={size}
                          // Rotate 45 degrees around center of each rect
                          transform={`rotate(45, ${posX + size/2}, ${posY + size/2})`}
                        />
                      );
                    });
                  })}
                </g>
              </svg>
            </div>
          </div>

          {/* BLOCK 3: Technologies */}
          <div className="bg-[#e8edff] rounded-[3rem] p-12 md:p-16 flex flex-col justify-between min-h-[600px]">
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-[#1a1b1f] leading-[1.05] tracking-tighter mb-12">
                We use latest technologies to run your project smoothly
              </h2>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-8 py-3 bg-white rounded-full text-[14px] font-bold text-gray-700 shadow-sm border border-transparent hover:border-[#001fcc] hover:text-[#001fcc] transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* BLOCK 4: Careers */}
          <div className="bg-[#1a1b1f] rounded-[3rem] p-12 md:p-16 flex flex-col justify-between min-h-[600px] text-white relative overflow-hidden group">
            <div className="max-w-md relative z-10">
              <h2 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tighter mb-10">
                Create a great career and grow your future with Mind Manthan
              </h2>
              <button className="bg-[#d9e2ff] text-[#001fcc] px-8 py-3.5 rounded-lg font-bold text-[14px] hover:bg-white transition-all active:scale-95">
                View open positions
              </button>
            </div>

            {/* Careers Inset Image Frame */}
            <div className="absolute right-0 bottom-0 w-[60%] h-[50%] md:w-[50%] md:h-[60%] rounded-tl-[3rem] overflow-hidden border-t-8 border-l-8 border-[#1a1b1f]">
              <img loading="lazy" decoding="async"
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop" 
                alt="Our Team"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                width={1200}
                height={800}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1522071823991-b1ae5e6a3048?q=80&w=800&auto=format&fit=crop';
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RecognitionGrid;


