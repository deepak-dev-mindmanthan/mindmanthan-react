
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
import { Service, Stat, Testimonial, NavLink } from '../types/appTypes';

// Matching the requested navbar links
export const NAV_LINKS = [
  { label: 'Home', path: '#', hasDropdown: true },
  { label: 'Solutions', path: '#', hasDropdown: true },
  { label: 'Company', path: '#', hasDropdown: true },
  { label: 'Resources', path: '#', hasDropdown: true },
  { label: 'Portfolio', path: '#', hasDropdown: false },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Cloud Solutions',
    description: 'Expert cloud migration and infrastructure management tailored for modern scalability.',
    icon: 'cloud',
    link: '#'
  },
  {
    id: '2',
    title: 'Cyber Security',
    description: 'Advanced threat detection and data protection strategies to keep your assets secure.',
    icon: 'shield',
    link: '#'
  },
  {
    id: '3',
    title: 'Managed IT Services',
    description: '24/7 monitoring and support to ensure your business operations never miss a beat.',
    icon: 'cpu',
    link: '#'
  },
  {
    id: '4',
    title: 'Database Analysis',
    description: 'Optimizing your data flow and storage systems for maximum performance and insight.',
    icon: 'database',
    link: '#'
  },
  {
    id: '5',
    title: 'Mobile Apps',
    description: 'Bespoke mobile application development for iOS and Android platforms.',
    icon: 'smartphone',
    link: '#'
  },
  {
    id: '6',
    title: 'Web Development',
    description: 'High-performance web applications built with the latest enterprise-grade technologies.',
    icon: 'globe',
    link: '#'
  }
];

export const STATS: Stat[] = [
  { label: 'Years Experience', value: '15', suffix: '+' },
  { label: 'Completed Projects', value: '1.2', suffix: 'k' },
  { label: 'Happy Clients', value: '500', suffix: '+' },
  { label: 'Award Wins', value: '25', suffix: '' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Jenkins',
    role: 'CTO',
    company: 'TechFlow Inc',
    text: 'Mind Manthan transformed our legacy systems into a modern cloud powerhouse. Their team is exceptionally professional and knowledgeable.',
    avatar: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    name: 'Michael Chen',
    role: 'Operations Director',
    company: 'Global Logistics',
    text: 'The managed services provided by this team have reduced our downtime by over 40%. Highly recommended for any scaling business.',
    avatar: 'https://picsum.photos/seed/michael/100/100'
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
