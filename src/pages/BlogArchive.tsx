import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, Search } from 'lucide-react';

interface BlogCard {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

interface BlogArchiveProps {
  onReadMoreClick?: (id: number) => void;
}

const BlogArchive: React.FC<BlogArchiveProps> = ({ onReadMoreClick }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // All blogs - this will be replaced with API calls from admin panel
  const allBlogs: BlogCard[] = [
    {
      id: 1,
      category: 'Product Engineering',
      title: "Identify the best technologies for your business with Mind Manthan's new tool",
      excerpt: 'Choosing the right technology stack is crucial for your business success. Our new tool helps identify the perfect match for your needs.',
      image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=800&auto=format&fit=crop',
      date: 'March 15, 2024'
    },
    {
      id: 2,
      category: 'AI',
      title: 'How Chat GPT is Revolutionizing the Way We Find Information',
      excerpt: 'ChatGPT has transformed how we search for information. Discover the revolutionary impact of AI-powered conversations on digital landscape.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
      date: 'March 10, 2024'
    },
    {
      id: 3,
      category: 'Company',
      title: "Clutch Recognizes Mind Manthan Among New York's Top Development for 2023",
      excerpt: 'We are thrilled to announce that Mind Manthan has been recognized as one of New York\'s leading development companies.',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800&auto=format&fit=crop',
      date: 'March 5, 2024'
    },
    {
      id: 4,
      category: 'Development',
      title: 'Best Practices for Building Scalable Web Applications',
      excerpt: 'Learn the essential best practices and architectural patterns that will help you build scalable and maintainable web applications.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
      date: 'February 28, 2024'
    },
    {
      id: 5,
      category: 'Technology',
      title: 'The Future of Cloud Computing in 2024',
      excerpt: 'Explore the emerging trends in cloud computing and how they will shape the future of enterprise software development.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?q=80&w=800&auto=format&fit=crop',
      date: 'February 20, 2024'
    },
    {
      id: 6,
      category: 'Mobile',
      title: 'Building Cross-Platform Mobile Apps with React Native',
      excerpt: 'Discover how React Native enables developers to build high-performance mobile applications for both iOS and Android.',
      image: 'https://images.unsplash.com/photo-1517694712028-52b4b6f45ab1?q=80&w=800&auto=format&fit=crop',
      date: 'February 15, 2024'
    },
    {
      id: 7,
      category: 'Security',
      title: 'Cybersecurity Best Practices for Enterprise Applications',
      excerpt: 'Comprehensive guide to implementing security best practices in your enterprise applications to protect sensitive data.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop',
      date: 'February 10, 2024'
    },
    {
      id: 8,
      category: 'DevOps',
      title: 'Containerization with Docker: A Complete Guide',
      excerpt: 'Learn how to effectively use Docker to containerize your applications and streamline your deployment process.',
      image: 'https://images.unsplash.com/photo-1558618667-e404220d52d4?q=80&w=800&auto=format&fit=crop',
      date: 'February 5, 2024'
    },
    {
      id: 9,
      category: 'Database',
      title: 'Optimizing Database Performance: Indexing Strategies',
      excerpt: 'Master advanced database indexing techniques to improve query performance and optimize your database operations.',
      image: 'https://images.unsplash.com/photo-1560949519-19d2b4be14eb?q=80&w=800&auto=format&fit=crop',
      date: 'January 30, 2024'
    }
  ];

  // Filter blogs based on search term
  const filteredBlogs = allBlogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#f4f7ff] to-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#010417] mb-6 tracking-tight">
            Blog & Resources
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed mb-12">
            Explore our comprehensive collection of insights, tutorials, and best practices in software development and technology.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input aria-label="Form field"
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#001fcc] focus:border-transparent text-lg"
            />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 px-6 bg-white">
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


