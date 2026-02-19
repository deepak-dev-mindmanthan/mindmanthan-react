import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { CONTENT_CONFIG } from '../config/contentConfig';
import about1 from '../assets/images/about1.jpg';
import about2 from '../assets/images/about2.jpg';
import about3 from '../assets/images/about3.jpg';

interface TeamPageProps {
  onContactClick: () => void;
}

const TeamPage: React.FC<TeamPageProps> = ({ onContactClick }) => {
  const leaders = [
    {
      name: 'Aarav Mehta',
      role: 'Founder & Delivery Lead',
      image: about1,
      focus: 'Product strategy, enterprise delivery, and client success.'
    },
    {
      name: 'Neha Kapoor',
      role: 'Head of Engineering',
      image: about2,
      focus: 'Scalable architecture, security-first engineering, and quality.'
    },
    {
      name: 'Rohan Iyer',
      role: 'Design & Experience Lead',
      image: about3,
      focus: 'Human-centered UX, visual systems, and usability research.'
    }
  ];

  const principles = [
    'Cross-functional squads with dedicated QA and PM ownership',
    'Weekly reporting with transparent timelines and velocity metrics',
    'Security and compliance baked into every delivery phase',
    'Long-term support with continuous optimization'
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-white text-center pt-32 pb-12 md:pb-18 lg:pb-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm uppercase tracking-widest text-gray-500 mb-8 font-medium">Our Team</div>
          <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6 text-[#1a1b1f]">
            The people behind {CONTENT_CONFIG.company.shortName}
          </h1>
          <p className="text-xl text-gray-600">
            Senior engineers, product strategists, and delivery leaders focused on measurable outcomes.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12 lg:py-18 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {leaders.map((leader) => (
              <div key={leader.name} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                <div className="h-64 bg-gray-100 overflow-hidden">
                  <img loading="lazy" decoding="async" src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-[#1a1b1f] mb-2">{leader.name}</h3>
                  <p className="text-[#001fcc] font-bold mb-4">{leader.role}</p>
                  <p className="text-gray-600 leading-relaxed">{leader.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-18 lg:py-24 px-6 lg:px-12 bg-[#f8faff]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1a1b1f] mb-6 tracking-tight">
              How we operate
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              We partner with teams that demand clarity, speed, and accountability. Our delivery model is built for long-term impact.
            </p>
            <ul className="space-y-5">
              {principles.map((item) => (
                <li key={item} className="flex items-start gap-4 text-gray-700 font-medium">
                  <CheckCircle2 className="text-[#001fcc] mt-1" size={22} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-white">
            <img loading="lazy" decoding="async" src={about2} alt="Team collaboration" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-18 lg:py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-black text-[#1a1b1f] mb-6 tracking-tight">
            Ready to work with a senior delivery team?
          </h3>
          <p className="text-gray-600 text-lg mb-10">
            We align quickly, plan clearly, and deliver with precision.
          </p>
          <button
            onClick={onContactClick}
            className="bg-[#001fcc] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#0015a8] transition-colors"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
