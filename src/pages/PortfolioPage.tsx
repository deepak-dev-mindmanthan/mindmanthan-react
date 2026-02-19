import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes/routes';
import { CONTENT_CONFIG } from '../config/contentConfig';

interface PortfolioPageProps {
  onBackHome?: () => void;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ onBackHome }) => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: 'Enterprise Workflow Suite',
      category: 'Custom Software',
      description: 'Custom workflow platform for approvals, dashboards, and automated reporting across operations teams.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'API'],
      impact: '38% faster internal approvals',
      image: '/assets/external/unsplash-e076c223a692.jpg',
      route: ROUTES.customSoftware
    },
    {
      id: 2,
      title: 'Corporate Web Platform',
      category: 'Web Development',
      description: 'SEO-ready website architecture with CMS workflows, analytics integration, and optimized rendering.',
      tags: ['Web', 'SEO', 'TypeScript', 'Analytics'],
      impact: '62% growth in organic sessions',
      image: '/assets/external/unsplash-c5249f4df085.jpg',
      route: ROUTES.webApp
    },
    {
      id: 3,
      title: 'Android + iOS Field App',
      category: 'Mobile Apps',
      description: 'Mobile app ecosystem with role-based access, offline-first flows, and real-time synchronization.',
      tags: ['Android', 'iOS', 'Hybrid', 'CI/CD'],
      impact: '41% improvement in field productivity',
      image: '/assets/external/unsplash-90a1b58e7e9c.jpg',
      route: ROUTES.mobileApp
    },
    {
      id: 4,
      title: 'IoT Monitoring and Alerts',
      category: 'IoT Solutions',
      description: 'IoT platform integrating sensor telemetry, dashboards, and proactive alerting for maintenance.',
      tags: ['IoT', 'Cloud', 'Dashboards', 'Automation'],
      impact: '29% reduction in incident downtime',
      image: '/assets/external/unsplash-4636190af475.jpg',
      route: ROUTES.iotSolutions
    },
    {
      id: 5,
      title: 'Cloud and DevOps Transformation',
      category: 'Cloud & DevOps',
      description: 'Migration to cloud-native infrastructure with CI/CD, containers, and full observability stack.',
      tags: ['AWS', 'Docker', 'Monitoring', 'Security'],
      impact: '52% faster release cycle',
      image: '/assets/external/unsplash-43490279c0fa.jpg',
      route: ROUTES.cloudDevops
    },
    {
      id: 6,
      title: 'E-Commerce Integration Hub',
      category: 'API Integration',
      description: 'Integration hub for payment gateways, third-party APIs, and centralized transaction workflows.',
      tags: ['E-Commerce', 'Payments', 'API', 'Support'],
      impact: '99.95% API uptime on critical flows',
      image: '/assets/external/unsplash-887f6717d7e4.jpg',
      route: ROUTES.apiIntegrationSupport
    }
  ];

  return (
    <div className="w-full bg-white">
      <section className="pt-36 pb-20 px-6 bg-gradient-to-br from-[#f4f7ff] to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 bg-[#e8edff] rounded-md text-[#001fcc] text-[11px] font-black uppercase tracking-[0.2em] mb-8">
            Portfolio
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#010417] mb-6 tracking-tight">
            Product and Platform Delivery
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Selected work across apps, websites, IoT, cloud infrastructure, and API-driven systems.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-18 lg:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article key={project.id} className="group rounded-[2rem] overflow-hidden bg-white border border-gray-200 hover:border-[#001fcc] transition-all duration-300 shadow-md hover:shadow-2xl h-full flex flex-col">
                <div className="relative h-48 md:h-56 overflow-hidden bg-gray-100">
                  <img loading="lazy" decoding="async"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex-1 p-6 flex flex-col">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">{project.category}</span>
                  <h3 className="text-xl md:text-2xl font-black text-[#010417] mb-3 group-hover:text-[#001fcc] transition-colors">{project.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 flex-1">{project.description}</p>

                  <p className="text-sm font-bold text-[#001fcc] mb-4">{project.impact}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-[#e8edff] text-[#001fcc] text-xs font-bold rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => navigate(project.route)}
                    className="inline-flex items-center gap-2 text-[#001fcc] font-bold hover:gap-3 transition-all text-left"
                  >
                    View details
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-r from-[#001fcc] to-[#0015a8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Need a Similar Build?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">We can design, develop, and support your next software, app, website, or IoT project.</p>
          <button onClick={onBackHome} className="bg-white text-[#001fcc] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all active:scale-95">
            Start Your Project with {CONTENT_CONFIG.company.shortName}
          </button>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;





