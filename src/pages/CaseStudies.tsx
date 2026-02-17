import React, { useState } from 'react';
import { Search } from 'lucide-react';
import CommonContactForm from '../components/CommonContactForm';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes/routes';
import { CONTENT_CONFIG } from '../config/contentConfig';

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  bgColor: string;
  route?: string;
}

const PROJECTS: Project[] = [
  { id: '1', title: 'Insurance Claims Automation Platform', category: 'Custom Software', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=90&w=1600&auto=format&fit=crop', bgColor: '#e0e7ff', route: ROUTES.insuranceCaseStudy },
  { id: '2', title: 'Coffee Supply Chain Platform', category: 'Web Development', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=90&w=1600&auto=format&fit=crop', bgColor: '#fdf6e3', route: ROUTES.coffeeCaseStudy },
  { id: '3', title: 'London Travel Operations System', category: 'Mobile App', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=90&w=1600&auto=format&fit=crop', bgColor: '#1a1b1f', route: ROUTES.londonTravelCaseStudy },
  { id: '4', title: 'IoT Asset Monitoring Dashboard', category: 'IoT', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=90&w=1600&auto=format&fit=crop', bgColor: '#ecfdf5', route: ROUTES.iotAssetCaseStudy },
  { id: '5', title: 'Cloud DevOps Modernization', category: 'Cloud & DevOps', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=90&w=1600&auto=format&fit=crop', bgColor: '#fff1f2', route: ROUTES.cloudDevopsCaseStudy },
  { id: '6', title: 'API Integration Hub', category: 'API', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=90&w=1600&auto=format&fit=crop', bgColor: '#f0f9ff', route: ROUTES.apiIntegrationCaseStudy },
];

const CATEGORIES = ['All', 'Custom Software', 'Web Development', 'Mobile App', 'IoT', 'Cloud & DevOps', 'API'];

interface CaseStudiesProps {
  onNavigateHome?: () => void;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ onNavigateHome }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const navigate = useNavigate();

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#f8fafc] pt-40 pb-20 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block px-3 py-1 bg-[#e8edff] rounded-md mb-6">
            <span className="text-[#001fcc] text-[11px] font-black uppercase tracking-[0.2em]">Our Work</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-[#1a1b1f] tracking-tighter leading-[1.04] md:leading-[0.9]">
            IT Project
            <br />
            Case Studies
          </h1>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-8">
          <div className="flex flex-wrap gap-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-8 py-3 rounded-full text-[13px] font-black uppercase tracking-widest transition-all duration-300 border shadow-sm ${
                  activeFilter === cat
                    ? 'bg-[#001fcc] text-white border-[#001fcc]'
                    : 'bg-white text-gray-500 border-gray-100 hover:border-[#001fcc] hover:text-[#001fcc]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3 text-gray-400 font-bold text-sm">
            <Search size={18} />
            <span>Filter by service</span>
          </div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group ${project.route ? 'cursor-pointer' : 'cursor-default'}`}
              onClick={() => project.route && navigate(project.route)}
              role={project.route ? 'button' : undefined}
              tabIndex={project.route ? 0 : undefined}
              onKeyDown={
                project.route
                  ? (event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        navigate(project.route as string);
                      }
                    }
                  : undefined
              }
            >
              <div
                className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 transition-all duration-500 shadow-md group-hover:shadow-2xl group-hover:-translate-y-2 border border-gray-50"
                style={{ backgroundColor: project.bgColor }}
              >
                <img loading="lazy" decoding="async"
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>

              <div className="px-4">
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-400 block mb-3">{project.category}</span>
                <h3 className="text-3xl font-black text-[#1a1b1f] group-hover:text-[#001fcc] transition-colors tracking-tight">{project.title}</h3>
                <p className="mt-4 text-gray-500 font-medium leading-relaxed line-clamp-2">
                  Delivered with secure architecture, measurable business outcomes, and scalable deployment.
                </p>
                <p className="mt-4 text-sm font-bold text-[#001fcc]">
                  {project.route ? 'View case study' : 'Detailed case study coming soon'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 pb-32" data-consultation-form>
        <div className="max-w-7xl mx-auto rounded-[2rem] overflow-hidden shadow-xl grid lg:grid-cols-2">
          <div className="bg-[#1a1b1f] p-12 text-white">
            <h2 className="text-4xl font-black mb-6">Need a Similar Solution?</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              We can design and deliver your software, app, website, or IoT platform with full implementation support.
            </p>
            <button
              onClick={onNavigateHome}
              className="bg-[#001fcc] px-6 py-3 rounded-lg font-bold hover:bg-[#0015a8] transition-colors"
            >
              Talk to Our Team
            </button>
          </div>
          <div className="bg-white">
            <CommonContactForm
              formType="case_studies_consultation"
              title={CONTENT_CONFIG.cta.scheduleConsultation}
              subtitle=""
              buttonText="Send Request"
              showFirstLastName={true}
              showServiceInterest={true}
              showCompanyName={true}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;

