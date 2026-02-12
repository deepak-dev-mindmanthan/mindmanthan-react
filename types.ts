
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}

export interface NavLink {
  label: string;
  path: string;
}
