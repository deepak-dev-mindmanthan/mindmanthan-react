import React, { useState } from 'react';
import { Calendar, User, ArrowLeft } from 'lucide-react';

interface Blog {
  id: number;
  title: string;
  category: string;
  image: string;
  author: string;
  date: string;
  content: string;
  excerpt: string;
}

interface BlogPageProps {
  blogId?: number;
  onBackHome?: () => void;
  onBackToHome?: () => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ blogId = 1, onBackHome, onBackToHome }) => {
  // Sample blog data - this will be replaced with API calls from admin panel
  const blogs: Record<number, Blog> = {
    1: {
      id: 1,
      title: "Identify the best technologies for your business with Mind Manthan's new tool",
      category: 'Product Engineering',
      image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1200&auto=format&fit=crop',
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      excerpt: "Choosing the right technology stack for your business is crucial for long-term success. Our new tool helps you identify the perfect match.",
      content: `
Choosing the right technology stack for your business is one of the most critical decisions you'll make. With so many options available, it can be overwhelming to determine which technologies will best serve your needs.

At Mind Manthan, we understand the challenges businesses face when evaluating new technologies. That's why we've developed a comprehensive tool designed to help you identify the best technologies for your specific business requirements.

## Why Technology Selection Matters

In today's fast-paced digital landscape, the technologies you choose can make or break your business. The right stack can boost productivity, improve scalability, and enhance user experience. Conversely, choosing the wrong technologies can lead to costly mistakes and technical debt.

## How Our Tool Works

Our new technology evaluation tool uses advanced algorithms and industry best practices to analyze your business needs and recommend the most suitable technologies. Here's what it does:

1. **Requirements Analysis** - We assess your current infrastructure, team expertise, and business goals
2. **Technology Mapping** - We map out available technologies that match your requirements
3. **Cost-Benefit Analysis** - We provide detailed cost and benefit projections for each option
4. **Implementation Roadmap** - We create a practical implementation plan with timelines

## Key Features

- Real-time technology trend analysis
- Compatibility checking with existing systems
- ROI projections
- Expert recommendations based on industry standards
- Custom reporting and documentation

## Getting Started

Ready to find the perfect technology stack for your business? Contact our team today to get a personalized consultation and see how our tool can transform your technical decision-making process.
      `
    },
    2: {
      id: 2,
      title: 'How Chat GPT is Revolutionizing the Way We Find Information',
      category: 'AI',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
      author: 'Michael Chen',
      date: 'March 10, 2024',
      excerpt: 'ChatGPT has changed how we search for and consume information online. Discover the revolutionary impact of AI-powered conversations.',
      content: `
Artificial Intelligence has fundamentally transformed how we search for and interact with information. ChatGPT stands at the forefront of this revolution, changing the way millions of people find answers, learn new concepts, and solve problems.

## The Information Revolution

Traditional search engines served us well for decades, but ChatGPT introduces a fundamentally different approach. Instead of browsing through multiple links, users can now have natural conversations with an AI that understands context, nuance, and intent.

## Key Advantages of ChatGPT

### 1. Conversational Intelligence
Unlike keyword-based searches, ChatGPT understands conversational language and can provide comprehensive answers in a dialog format.

### 2. Context Awareness
The AI maintains context throughout a conversation, allowing for follow-up questions and deeper exploration of topics.

### 3. Personalized Responses
ChatGPT adapts its responses based on the conversation history and user preferences.

### 4. Time Efficiency
Getting information through natural conversation is often faster than traditional search and browsing.

## Impact on Various Industries

- **Education**: Students can get personalized tutoring and explanations
- **Business**: Professionals can quickly research topics and generate ideas
- **Software Development**: Developers can get code examples and debugging help
- **Content Creation**: Writers can brainstorm and research more efficiently

## The Future of Information Retrieval

As AI continues to evolve, we can expect even more sophisticated tools that combine ChatGPT's conversational abilities with specialized domain knowledge. The future of how we find information is here, and it's conversational.
      `
    },
    3: {
      id: 3,
      title: "Clutch Recognizes Mind Manthan Among New York's Top Development for 2023",
      category: 'Company',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1200&auto=format&fit=crop',
      author: 'David Rodriguez',
      date: 'March 5, 2024',
      excerpt: 'We are thrilled to announce that Mind Manthan has been recognized as one of New York\'s top development companies.',
      content: `
We are excited and honored to announce that Mind Manthan has been recognized by Clutch as one of New York's top development companies for 2023!

## What This Recognition Means

This prestigious recognition from Clutch, a leading B2B research and review platform, validates our commitment to delivering exceptional software development services. It reflects our teams's dedication, expertise, and the trust our clients place in us.

## Our Journey

For years, we've been focused on delivering high-quality software solutions that drive real business results. This recognition is a testament to:

- Our talented team of developers and designers
- Our client-centric approach to project delivery
- Our commitment to innovation and best practices
- The successful projects we've delivered

## What Our Clients Say

Our clients consistently praise our:
- Technical expertise and problem-solving
- Communication and transparency
- Ability to meet deadlines and budgets
- Willingness to go above and beyond

## Looking Forward

This recognition motivates us to continue raising the bar for software development excellence. We're committed to:

1. **Continuous Learning** - Staying current with the latest technologies
2. **Client Success** - Making our clients' success our success
3. **Team Development** - Investing in our team's growth and expertise
4. **Innovation** - Pushing boundaries and exploring new technologies

## Thank You

We want to thank our incredible team, loyal clients, and partners who made this recognition possible. Together, we're building the future of software development.

Join us on this exciting journey and discover how Mind Manthan can help transform your business through innovative software solutions.
      `
    }
  };

  const blog = blogs[blogId];

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
                {blog.author} is an experienced software development expert at Mind Manthan with a passion for sharing insights about technology and business innovation.
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
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;


