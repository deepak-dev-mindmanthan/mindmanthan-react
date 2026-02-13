import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

interface InsightCardProps {
  category: string;
  title: string;
  image: string;
  id: number;
  excerpt: string;
  onLearnMoreClick?: (id: number) => void;
}

const InsightCard: React.FC<InsightCardProps> = ({ id, category, title, image, excerpt, onLearnMoreClick }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer flex flex-col h-full border border-gray-100">
    {/* Image Section */}
    <div className="relative h-40 overflow-hidden bg-gray-100">
      <img loading="lazy" decoding="async"
        src={image} 
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        width={800}
        height={450}
      />
      {/* Category Badge */}
      <div className="absolute top-4 left-4">
        <span className="inline-block px-3 py-1 bg-red-500 text-white text-xs font-bold rounded">
          {category}
        </span>
      </div>
    </div>

    {/* Content Section */}
    <div className="p-5 flex flex-col flex-1">
      {/* Title */}
      <h3 className="text-sm md:text-base font-bold text-[#010417] leading-tight mb-3 group-hover:text-[#001fcc] transition-colors line-clamp-2">
        {title}
      </h3>

      {/* Excerpt */}
      <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4 flex-1 line-clamp-2">
        {excerpt}
      </p>

      {/* Divider */}
      <div className="border-t border-gray-100 pt-4 mb-4" />

      {/* Footer with "Read More" and Social Icons */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => onLearnMoreClick?.(id)}
          className="text-xs md:text-sm font-bold text-[#1a1b1f] hover:text-[#001fcc] transition-colors bg-none border-none p-0 cursor-pointer"
        >
          Read More
        </button>

        {/* Social Share Icons */}
        <div className="flex items-center gap-2">
          <button type="button" aria-label="Share on Facebook" className="text-gray-400 hover:text-blue-600 transition-colors">
            <Facebook size={14} />
          </button>
          <button type="button" aria-label="Share on Twitter" className="text-gray-400 hover:text-blue-400 transition-colors">
            <Twitter size={14} />
          </button>
          <button type="button" aria-label="Share on LinkedIn" className="text-gray-400 hover:text-blue-700 transition-colors">
            <Linkedin size={14} />
          </button>
        </div>
      </div>
    </div>
  </div>
);

const LatestInsights: React.FC<{ onLearnMoreClick?: (id: number) => void; onViewAllClick?: () => void }> = ({ onLearnMoreClick, onViewAllClick }) => {
  const insights = [
    {
      id: 1,
      category: 'Product Engineering',
      title: "Identify the best technologies for your business with Mind Manthan's new tool",
      excerpt: 'Choosing the right technology stack is crucial for your business success. Our new tool helps identify the perfect match for your needs.',
      image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 2,
      category: 'AI',
      title: 'How Chat GPT is Revolutionizing the Way We Find Information',
      excerpt: 'ChatGPT has transformed how we search for information. Discover the revolutionary impact of AI-powered conversations on digital landscape.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 3,
      category: 'Company',
      title: "Clutch Recognizes Mind Manthan Among New York's Top Development for 2023",
      excerpt: 'We are thrilled to announce that Mind Manthan has been recognized as one of New York\'s leading development companies.',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800&auto=format&fit=crop',
    }
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex justify-between items-center">
          <h2 className="text-5xl md:text-6xl font-black text-[#010417] leading-[1.1] tracking-tighter">
            Latest Insight
          </h2>
          <button
            onClick={onViewAllClick}
            className="bg-[#001fcc] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#0015a8] transition-all active:scale-95 text-sm md:text-base"
          >
            View All Blogs
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight) => (
            <InsightCard key={insight.id} {...insight} onLearnMoreClick={onLearnMoreClick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;


