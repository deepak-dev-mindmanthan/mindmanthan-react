import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, Search } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogs';

interface BlogArchiveProps {
  onReadMoreClick?: (id: number) => void;
}

const BlogArchive: React.FC<BlogArchiveProps> = ({ onReadMoreClick }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter blogs based on search term
  const filteredBlogs = BLOG_POSTS.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="pt-32 pb-12 px-6 bg-gradient-to-br from-[#f4f7ff] to-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#010417] mb-6 tracking-tight">
            Blog & Resources
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed mb-12">
            Explore our comprehensive collection of insights, tutorials, and best practices in software development and technology.
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-2xl">
            <div className="h-12 sm:h-14 rounded-lg border border-gray-300 focus-within:ring-2 focus-within:ring-[#001fcc] focus-within:border-transparent bg-white flex items-center">
              <div className="pl-5 px-2 sm:pl-6 pr-4 sm:pr-5 text-gray-400 flex items-center">
                <Search size={18} />
              </div>
              <input
                aria-label="Form field"
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-full pr-4 sm:pr-6 rounded-r-lg border-none outline-none focus:outline-none text-base sm:text-lg bg-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No blogs found matching your search. Try different keywords.</p>
            </div>
          ) : (
            <>
              <p className="text-gray-600 mb-8">
                Showing <span className="font-bold text-[#010417]">{filteredBlogs.length}</span> blog posts
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer flex flex-col h-full border border-gray-100"
                  >
                    {/* Image Section */}
                    <div className="relative h-40 overflow-hidden bg-gray-100">
                      <img loading="lazy" decoding="async"
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        width={800}
                        height={450}
                      />
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-red-500 text-white text-xs font-bold rounded">
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 flex flex-col flex-1">
                      {/* Date */}
                      <span className="text-xs text-gray-500 mb-2">{blog.date}</span>

                      {/* Title */}
                      <h3 className="text-sm md:text-base font-bold text-[#010417] leading-tight mb-3 group-hover:text-[#001fcc] transition-colors line-clamp-2">
                        {blog.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4 flex-1 line-clamp-2">
                        {blog.excerpt}
                      </p>

                      {/* Divider */}
                      <div className="border-t border-gray-100 pt-4 mb-4" />

                      {/* Footer with "Read More" and Social Icons */}
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => onReadMoreClick?.(blog.id)}
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
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogArchive;



