import React from 'react';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { getBlogById } from '../data/blogs';
import { CONTENT_CONFIG } from '../config/contentConfig';

interface BlogPageProps {
  blogId?: number;
  onBackHome?: () => void;
  onBackToHome?: () => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ blogId = 1, onBackHome, onBackToHome }) => {
  const blog = getBlogById(blogId);

  if (!blog) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#010417] mb-4">Blog not found</h1>
          <button
            onClick={onBackHome}
            className="text-[#001fcc] font-bold hover:underline"
          >
            Back to home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img loading="lazy" decoding="async"
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* Blog Content */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-[#001fcc] font-bold mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </button>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-6 items-center text-gray-600 mb-8">
            <span className="inline-block px-4 py-2 bg-[#e8edff] text-[#001fcc] text-xs font-bold rounded-full uppercase tracking-widest">
              {blog.category}
            </span>
            <div className="flex items-center gap-2 text-sm">
              <Calendar size={16} />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <User size={16} />
              <span>{blog.author}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#010417] mb-8 tracking-tight leading-[1.1]">
            {blog.title}
          </h1>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {blog.content.split('\n').map((paragraph, idx) => {
              if (paragraph.startsWith('##')) {
                return (
                  <h2 key={idx} className="text-3xl font-bold text-[#010417] mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('-')) {
                return (
                  <li key={idx} className="text-gray-700 text-lg leading-relaxed mb-3 ml-6">
                    {paragraph.replace('- ', '')}
                  </li>
                );
              }
              if (paragraph.trim() === '') {
                return <div key={idx} className="mb-4" />;
              }
              return (
                <p key={idx} className="text-gray-700 text-lg leading-relaxed mb-6">
                  {paragraph.trim()}
                </p>
              );
            })}
          </div>

          {/* Author Bio */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="bg-[#f4f7ff] p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-[#010417] mb-2">About the Author</h3>
              <p className="text-gray-700">
                {blog.author} is an experienced software development expert at {CONTENT_CONFIG.company.shortName} with a passion for sharing insights about technology and business innovation.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-[#001fcc] to-[#0015a8] rounded-2xl p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-blue-100 mb-8 text-lg">
              Get in touch with our team and discuss how we can help with your next project.
            </p>
            <button className="bg-white text-[#001fcc] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all">
              {CONTENT_CONFIG.cta.contactUs}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;



