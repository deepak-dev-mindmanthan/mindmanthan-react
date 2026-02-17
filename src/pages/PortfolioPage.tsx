import React from 'react';
import { ExternalLink } from 'lucide-react';

interface PortfolioPageProps {
  onBackHome?: () => void;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ onBackHome }) => {
  const projects = [
    {
      id: 1,
      title: 'Enterprise Workflow Suite',
      description: 'Custom software platform for approval workflows, dashboarding, and automated operational reporting.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'API'],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000',
      link: '#'
    },
    {
      id: 2,
      title: 'Corporate Web Platform',
      description: 'SEO-focused website architecture with CMS workflows, analytics tracking, and high-performance rendering.',
      tags: ['Web', 'SEO', 'TypeScript', 'Analytics'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000',
      link: '#'
    },
    {
      id: 3,
      title: 'Android + iOS Field App',
      description: 'Mobile app ecosystem with real-time updates, role-based access, and offline-first operational flows.',
      tags: ['Android', 'iOS', 'Hybrid', 'CI/CD'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000',
      link: '#'
    },
    {
      id: 4,
      title: 'IoT Monitoring and Alerts',
      description: 'IoT platform integrating sensors, dashboards, and automated alerting for proactive maintenance.',
      tags: ['IoT', 'Cloud', 'Dashboards', 'Automation'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
      link: '#'
    },
    {
      id: 5,
      title: 'Cloud and DevOps Transformation',
      description: 'Migration to cloud-native infrastructure with containerized workloads and full observability stack.',
      tags: ['AWS', 'Docker', 'Monitoring', 'Security'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
      link: '#'
    },
    {
      id: 6,
      title: 'E-Commerce Integration Hub',
      description: 'Custom e-commerce backend with payment gateway integration and third-party API orchestration.',
      tags: ['E-Commerce', 'Payments', 'API', 'Support'],
      image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=1000',
      link: '#'
    }
  ];

  return (
    <div className="w-full">
      <section className="py-24 px-6 bg-gradient-to-br from-[#f4f7ff] to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#010417] mb-6 tracking-tight">Our Portfolio</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Selected projects in custom software, websites, mobile apps, IoT platforms, and enterprise integration.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-[#001fcc] transition-all duration-300 shadow-lg hover:shadow-2xl h-full flex flex-col">
                <div className="relative h-48 md:h-56 overflow-hidden bg-gray-100">
                  <img loading="lazy" decoding="async"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-black text-[#010417] mb-3 group-hover:text-[#001fcc] transition-colors">{project.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-[#e8edff] text-[#001fcc] text-xs font-bold rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a href={project.link} className="inline-flex items-center gap-2 text-[#001fcc] font-bold hover:gap-3 transition-all">
                    View Project
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-r from-[#001fcc] to-[#0015a8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Need a Similar Build?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">We can design, develop, and support your next software, app, website, or IoT project.</p>
          <button onClick={onBackHome} className="bg-white text-[#001fcc] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all active:scale-95">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;





