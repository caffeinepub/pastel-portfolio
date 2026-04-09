export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string[];
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  leetcode: string;
  hackerrank: string;
  codechef?: string;
  profileImage: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  accent: "lavender" | "blush" | "sky" | "mint";
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  category: "internship" | "mini";
  githubUrl?: string;
  liveUrl?: string;
  duration?: string;
  company?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
