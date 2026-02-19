import React from 'react';
import {
  Cloud,
  ShieldCheck,
  Cpu,
  Database,
  Smartphone,
  Globe,
  Users,
  Clock,
  Award,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { Service, Stat, Testimonial } from '../types/appTypes';
import { CONTENT_CONFIG } from './contentConfig';

export const NAV_LINKS = [
  { label: 'Home', path: '#', hasDropdown: true },
  { label: 'Solutions', path: '#', hasDropdown: true },
  { label: 'Company', path: '#', hasDropdown: true },
  { label: 'Resources', path: '#', hasDropdown: true },
  { label: 'Portfolio', path: '#', hasDropdown: false },
  { label: 'Blog', path: '/blog', hasDropdown: false },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Custom Software',
    description: 'Tailored systems for real business workflows and long-term scalability.',
    icon: 'cpu',
    link: '#'
  },
  {
    id: '2',
    title: 'Web Development',
    description: 'Corporate websites, web apps, and SEO-optimized digital experiences.',
    icon: 'globe',
    link: '#'
  },
  {
    id: '3',
    title: 'Mobile Apps',
    description: 'Android, iOS, and hybrid applications for enterprise and consumer use cases.',
    icon: 'smartphone',
    link: '#'
  },
  {
    id: '4',
    title: 'IoT Solutions',
    description: 'Connected systems with real-time device data, monitoring, and automation.',
    icon: 'database',
    link: '#'
  },
  {
    id: '5',
    title: 'Security & Infra',
    description: 'Secure architecture, access control, encryption, and protected deployments.',
    icon: 'shield',
    link: '#'
  },
  {
    id: '6',
    title: 'Cloud & DevOps',
    description: 'CI/CD pipelines, cloud deployment, containerization, and observability.',
    icon: 'cloud',
    link: '#'
  }
];

export const STATS: Stat[] = [
  { label: 'Years Experience', value: '10', suffix: '+' },
  { label: 'Projects Delivered', value: '1000', suffix: '+' },
  { label: 'Active Clients', value: '500', suffix: '+' },
  { label: 'Support Coverage', value: '24', suffix: '/7' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Client Team',
    role: 'Operations Lead',
    company: 'Enterprise Partner',
    text: `${CONTENT_CONFIG.company.shortName} helped us modernize our app and website stack with secure architecture and reliable releases.`,
    avatar: '/assets/external/constants-client-1.jpg'
  },
  {
    name: 'Product Team',
    role: 'Technology Manager',
    company: 'Growth Company',
    text: 'Their delivery model is clear, structured, and highly execution-focused across design, development, and support.',
    avatar: '/assets/external/constants-client-2.jpg'
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  cloud: <Cloud className="w-8 h-8" />,
  shield: <ShieldCheck className="w-8 h-8" />,
  cpu: <Cpu className="w-8 h-8" />,
  database: <Database className="w-8 h-8" />,
  smartphone: <Smartphone className="w-8 h-8" />,
  globe: <Globe className="w-8 h-8" />,
  users: <Users className="w-8 h-8" />,
  clock: <Clock className="w-8 h-8" />,
  award: <Award className="w-8 h-8" />,
  zap: <Zap className="w-8 h-8" />,
  check: <CheckCircle2 className="w-8 h-8" />
};

