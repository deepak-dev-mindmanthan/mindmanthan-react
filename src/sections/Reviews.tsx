import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CONTENT_CONFIG } from '../config/contentConfig';

const Reviews: React.FC = () => {
  return (
    <section className="bg-white py-8 md:py-24 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <span className="inline-block px-4 py-1.5 bg-[#f1f5f9] rounded-md text-[#64748b] text-[11px] font-bold uppercase tracking-[0.2em] mb-12">
          Client Feedback
        </span>

        <blockquote className="text-xl md:text-4xl lg:text-[42px] font-medium md:font-semibold text-[#1a1b1f] leading-[1.3] md:leading-[1.25] mb-16 max-w-5xl tracking-tight">
          "{CONTENT_CONFIG.company.shortName} delivered our website, mobile app, and API integrations as one connected platform. The rollout
          was smooth, performance improved immediately, and their support team remains highly responsive."
        </blockquote>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
          <div className="flex items-center gap-5">
            <img loading="lazy" decoding="async"
              src="/assets/external/reviews-client-avatar.jpg"
              alt="Client"
              className="w-16 h-16 rounded-full object-cover shadow-sm"
              width={64}
              height={64}
            />
            <div>
              <h4 className="text-[17px] font-bold text-[#1a1b1f]">Rahul Mehta</h4>
              <p className="text-[14px] font-medium text-gray-500">Operations Head, Enterprise Client</p>
            </div>
          </div>

          <div className="flex items-center gap-10">
            <div className="flex gap-4">
              <button type="button" aria-label="Previous review" className="w-12 h-12 rounded-full bg-[#f1f5f9] flex items-center justify-center text-gray-400 hover:bg-[#e2e8f0] hover:text-[#1a1b1f] transition-all">
                <ArrowLeft size={20} strokeWidth={2.5} />
              </button>
              <button type="button" aria-label="Next review" className="w-12 h-12 rounded-full bg-[#f1f5f9] flex items-center justify-center text-gray-400 hover:bg-[#e2e8f0] hover:text-[#1a1b1f] transition-all">
                <ArrowRight size={20} strokeWidth={2.5} />
              </button>
            </div>

            <button type="button" className="text-[#001fcc] font-bold text-[14px] hover:underline tracking-tight">
              View all reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
