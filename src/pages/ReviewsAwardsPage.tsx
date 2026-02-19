import React from 'react';
import { Star, Trophy, Quote } from 'lucide-react';
import { CONTENT_CONFIG } from '../config/contentConfig';

interface ReviewsAwardsPageProps {
  onBackHome: () => void;
}

const ReviewsAwardsPage: React.FC<ReviewsAwardsPageProps> = ({ onBackHome }) => {
  const reviews = [
    {
      name: 'Rahul Mehta',
      role: 'Operations Head, Enterprise Client',
      quote: `${CONTENT_CONFIG.company.shortName} delivered a modern platform with clear timelines and proactive communication. The product has been stable since launch and our teams adopted it quickly.`
    },
    {
      name: 'Sophia Lee',
      role: 'Product Director, SaaS Startup',
      quote: 'They handled everything from architecture to launch. The QA and release process was transparent, and every sprint moved us toward measurable KPIs.'
    },
    {
      name: 'Arjun Nair',
      role: 'CTO, Logistics Platform',
      quote: 'The engineering team is sharp, responsive, and delivery-focused. Their ability to integrate complex APIs saved us months of work.'
    }
  ];

  const awards = [
    'Top Custom Software Partner - 2025',
    'Best IoT Implementation Partner - 2024',
    'Excellence in Digital Transformation - 2024',
    'Trusted Delivery Award - 2023'
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-white text-center py-20 lg:py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm uppercase tracking-widest text-gray-500 mb-8 font-medium">Reviews & Awards</div>
          <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6 text-[#1a1b1f]">
            Trusted delivery, proven outcomes
          </h1>
          <p className="text-xl text-gray-600">
            A track record of results across industries, platforms, and product teams.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-[#f8faff]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">
          {reviews.map((review) => (
            <div key={review.name} className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#e8edff] text-[#001fcc] flex items-center justify-center mb-6">
                <Quote size={22} />
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">{review.quote}</p>
              <h4 className="text-lg font-black text-[#1a1b1f]">{review.name}</h4>
              <p className="text-sm text-gray-500">{review.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1a1b1f] mb-6 tracking-tight">
              Awards & recognition
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Our delivery teams are recognized for execution quality, security, and innovation.
            </p>
            <ul className="space-y-5">
              {awards.map((award) => (
                <li key={award} className="flex items-start gap-4 text-gray-700 font-medium">
                  <Trophy className="text-[#001fcc] mt-1" size={22} />
                  {award}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#1a1b1f] text-white rounded-[2.5rem] p-10 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Star className="text-[#e8edff]" size={28} />
              <span className="text-sm uppercase tracking-widest text-white/70 font-bold">Client Satisfaction</span>
            </div>
            <h3 className="text-5xl font-black mb-2">4.9/5</h3>
            <p className="text-white/70 leading-relaxed mb-8">
              Based on long-term delivery partnerships and multi-year retainers.
            </p>
            <div className="text-white font-bold">{CONTENT_CONFIG.company.shortName} review average</div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-black text-[#1a1b1f] mb-6 tracking-tight">
            Want to see delivery results first-hand?
          </h3>
          <p className="text-gray-600 text-lg mb-10">
            We can share case studies, timelines, and references relevant to your industry.
          </p>
          <button
            onClick={onBackHome}
            className="bg-[#001fcc] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#0015a8] transition-colors"
          >
            Back to Home
          </button>
        </div>
      </section>
    </div>
  );
};

export default ReviewsAwardsPage;
