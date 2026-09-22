export interface Project {
  slug: string;
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  techStack: string[];
  features?: string[];
  screenshots?: string[];
  githubUrl?: string;
  liveUrl?: string;
  architecture?: string;
  challenges?: string;
  outcome?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    bio: string;
    email: string;
    phone: string;
    location: string;
    resumeUrl?: string;
  };
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  achievements: string[];
  certifications: string[];
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}
