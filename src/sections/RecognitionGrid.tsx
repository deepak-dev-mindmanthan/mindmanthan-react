import React from 'react';

const RecognitionGrid: React.FC = () => {
  const technologies = ['React', 'TypeScript', 'Node.js', 'Java', 'Swift', 'Kotlin', 'AWS', 'Docker'];

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#1a1b1f] rounded-[3rem] p-12 md:p-16 flex flex-col justify-between min-h-[500px] text-white">
            <div>
              <h2 className="text-4xl md:text-6xl font-black leading-[1.05] tracking-tighter mb-10">
                Trusted Delivery
                <br />
                Across Critical
                <br />
                IT Projects
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We execute end-to-end software initiatives for custom systems, enterprise platforms,
                websites, mobile apps, and IoT-enabled solutions.
              </p>
            </div>
          </div>

          <div className="bg-[#f1f5f9] rounded-[3rem] p-12 md:p-16 min-h-[500px]">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1b1f] leading-[1.1] tracking-tighter mb-8">
              Service Areas
            </h2>
            <ul className="space-y-3 text-gray-700 font-semibold">
              <li>Custom Software Development</li>
              <li>Website and Web Application Development</li>
              <li>Android, iOS, and Hybrid Mobile Apps</li>
              <li>IoT and Workflow Automation</li>
              <li>Cloud, DevOps, and Infrastructure Security</li>
              <li>API Integration and Long-Term Support</li>
            </ul>
          </div>

          <div className="bg-[#e8edff] rounded-[3rem] p-12 md:p-16 min-h-[500px]">
            <h2 className="text-5xl md:text-6xl font-black text-[#1a1b1f] leading-[1.05] tracking-tighter mb-12">
              Technology Stack
            </h2>
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

          <div className="bg-[#1a1b1f] rounded-[3rem] p-12 md:p-16 min-h-[500px] text-white relative overflow-hidden group">
            <div className="max-w-md relative z-10">
              <h2 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tighter mb-10">
                Build Faster,
                <br />
                Scale Safely
              </h2>
              <p className="text-gray-300 leading-relaxed">
                From planning to production, we focus on secure architecture, reliable delivery,
                and measurable business outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognitionGrid;

