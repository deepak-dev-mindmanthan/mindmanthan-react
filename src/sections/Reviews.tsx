import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <section className="bg-white py-32 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Badge */}
        <span className="inline-block px-4 py-1.5 bg-[#f1f5f9] rounded-md text-[#64748b] text-[11px] font-bold uppercase tracking-[0.2em] mb-12">
          What our customers say
        </span>

        {/* The Quote */}
        <blockquote className="text-3xl md:text-5xl lg:text-[48px] font-bold text-[#1a1b1f] leading-[1.2] mb-16 max-w-5xl tracking-tight">
          “We were very impressed by their robust recruitment process, which is one of the main reasons we chose to work with them: They have a strong team of highly qualified resources.”
        </blockquote>

        {/* Customer Info & Navigation Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
          {/* Profile */}
          <div className="flex items-center gap-5">
            <img loading="lazy" decoding="async"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" 
              alt="Kevin Parks" 
              className="w-16 h-16 rounded-full object-cover shadow-sm"
              width={64}
              height={64}
            />
            <div>
              <h4 className="text-[17px] font-bold text-[#1a1b1f]">Kevin Parks</h4>
              <p className="text-[14px] font-medium text-gray-500">Co-Founder & COO, Skole</p>
            </div>
          </div>

          {/* Controls */}
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


