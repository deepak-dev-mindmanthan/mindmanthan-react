import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface PortfolioPageProps {
  onBackHome?: () => void;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ onBackHome }) => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with real-time inventory management, payment processing, and customer analytics.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
      link: '#'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'A secure mobile banking application with biometric authentication, real-time notifications, and transaction management.',
      tags: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000',
      link: '#'
    },
    {
      id: 3,
      title: 'AI-Powered Analytics Dashboard',
      description: 'Advanced analytics platform with machine learning predictions, real-time data visualization, and custom reporting.',
      tags: ['React', 'Python', 'TensorFlow', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
      link: '#'
    },
    {
      id: 4,
      title: 'Cloud Infrastructure Management',
      description: 'Enterprise cloud management platform for multi-cloud environments with automated deployment and monitoring.',
      tags: ['React', 'AWS', 'Kubernetes', 'Docker'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
      link: '#'
    },
    {
      id: 5,
      title: 'Social Media Analytics Tool',
      description: 'Comprehensive social media management and analytics platform with influencer tracking and ROI measurement.',
      tags: ['Vue.js', 'Express', 'PostgreSQL', 'Redis'],
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565191c?auto=format&fit=crop&q=80&w=1000',
      link: '#'
    },
    {
      id: 6,
      title: 'Healthcare Telemedicine Platform',
      description: 'HIPAA compliant telemedicine platform with video consultations, prescription management, and medical records.',
      tags: ['React', 'WebRTC', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000',
      link: '#'
    }
  ];

  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#f4f7ff] to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#010417] mb-6 tracking-tight">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Showcase of our recent projects and successful client engagements across various industries and technologies.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-[#001fcc] transition-all duration-300 shadow-lg hover:shadow-2xl h-full flex flex-col"
              >
                {/* Project Image */}
                <div className="relative h-48 md:h-56 overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                {/* Project Info */}
                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-black text-[#010417] mb-3 group-hover:text-[#001fcc] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#e8edff] text-[#001fcc] text-xs font-bold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-[#001fcc] font-bold hover:gap-3 transition-all"
                  >
                    View Project
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#001fcc] to-[#0015a8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Interested in Our Work?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you build something amazing. Get in touch with our team today.
          </p>
          <button
            onClick={onBackHome}
            className="bg-white text-[#001fcc] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all active:scale-95"
          >
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
