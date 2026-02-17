import React from 'react';

const JourneySection: React.FC = () => {
  return (
    <section className="bg-[#f9faff] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="flex-[1.2]">
            <h2 className="text-5xl md:text-7xl font-black text-[#010417] leading-[1.05] tracking-tighter mb-16">
              Start your next
              <br />
              software journey
            </h2>

            <p className="text-gray-600 text-lg max-w-md leading-relaxed mb-8">
              Share your requirements for app development, website modernization, IoT implementation, or automation.
              Our team will provide a practical execution roadmap.
            </p>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h3 className="text-2xl font-black text-[#010417] mb-4">Noida HQ</h3>
                <div className="text-gray-500 font-medium text-[15px] leading-relaxed mb-6">
                  A90, A Block, Sector 4
                  <br />
                  Noida, Uttar Pradesh 201301
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black text-[#010417] mb-4">Delivery Center</h3>
                <div className="text-gray-500 font-medium text-[15px] leading-relaxed mb-6">
                  Remote + Onsite Collaboration
                  <br />
                  India and Global Projects
                </div>
              </div>
            </div>

            <div className="mt-12 text-[#001fcc] font-black text-[14px]">
              End-to-end development, deployment, and support.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;

