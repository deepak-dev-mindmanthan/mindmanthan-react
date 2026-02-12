import React from 'react';

const CoreValues: React.FC = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="relative bg-[#1f2023] text-white rounded-lg overflow-hidden p-10 lg:p-16">
          <div className="mb-6">
            <div className="inline-block bg-[#111214] text-xs text-gray-300 px-4 py-2 rounded-md">OUR CORE VALUES</div>
          </div>

          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight text-[#e6e6f8]">
                Our culture is built around five key attributes that differentiate us from our competition.
              </h2>
            </div>

            <div className="lg:w-1/2 relative hidden lg:block">
              <div
                style={{
                  position: 'absolute',
                  right: 32,
                  top: '10%',
                  width: 420,
                  height: 420,
                  backgroundImage: 'radial-gradient(#dcdaf0 2px, transparent 2px)',
                  backgroundSize: '24px 24px',
                  clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)',
                  opacity: 0.9,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
