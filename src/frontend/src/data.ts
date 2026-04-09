import type { Certification, NavItem, PersonalInfo, Project } from "./types";

export const personalInfo: PersonalInfo = {
  name: "Akshaya Marimuthu",
  title: "Artificial Intelligence and Data Science Student",
  tagline: "AI & Data Science Enthusiast | Problem Solver | Lifelong Learner",
  bio: [
    "I'm a passionate Artificial Intelligence and Data Science student with a strong foundation in machine learning, deep learning, and data analytics. I thrive on transforming complex datasets into meaningful insights and building intelligent solutions.",
    "With hands-on experience through internships and personal projects, I've worked on everything from AI-powered applications to data-driven web tools. I'm always eager to explore new technologies and contribute to impactful, real-world projects.",
  ],
  email: "makshaya160@gmail.com",
  phone: "+91 6380647099",
  location: "India",
  github: "https://github.com/akshaya249",
  linkedin: "https://www.linkedin.com/in/akshaya-marimuthu-54b3142a1",
  leetcode: "https://leetcode.com/u/akshaya_37/",
  hackerrank: "https://www.hackerrank.com/profile/makshaya160",
  profileImage: "/assets/images/profile.jpeg",
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "Full Stack Web Development",
    issuer: "Coursera — Meta",
    date: "Dec 2024",
    credentialUrl: "https://coursera.org",
    accent: "lavender",
    icon: "🌐",
  },
  {
    id: "cert-2",
    title: "Machine Learning Specialization",
    issuer: "Coursera — Stanford",
    date: "Oct 2024",
    credentialUrl: "https://coursera.org",
    accent: "blush",
    icon: "🤖",
  },
  {
    id: "cert-3",
    title: "Python for Data Science",
    issuer: "IBM — Cognitive Class",
    date: "Aug 2024",
    credentialUrl: "https://cognitiveclass.ai",
    accent: "sky",
    icon: "🐍",
  },
  {
    id: "cert-4",
    title: "React — The Complete Guide",
    issuer: "Udemy — Academind",
    date: "Jun 2024",
    credentialUrl: "https://udemy.com",
    accent: "mint",
    icon: "⚛️",
  },
  {
    id: "cert-5",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    date: "Apr 2024",
    credentialUrl: "https://aws.amazon.com",
    accent: "blush",
    icon: "☁️",
  },
  {
    id: "cert-6",
    title: "Google Data Analytics Certificate",
    issuer: "Google — Coursera",
    date: "Feb 2024",
    credentialUrl: "https://grow.google",
    accent: "sky",
    icon: "📊",
  },
  {
    id: "cert-7",
    title: "NPTEL — Design & Analysis of Algorithms",
    issuer: "IIT Madras — NPTEL",
    date: "Jan 2024",
    credentialUrl: "https://nptel.ac.in",
    accent: "lavender",
    icon: "📐",
  },
  {
    id: "cert-8",
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Nov 2023",
    credentialUrl: "https://freecodecamp.org",
    accent: "mint",
    icon: "🎨",
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "E-Commerce Web Application",
    description:
      "Built a fully functional e-commerce platform with product listings, cart management, payment integration, and admin dashboard. Features real-time inventory updates and responsive design.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    category: "internship",
    githubUrl: "https://github.com/akshaya249/ecommerce-app",
    company: "TechCorp Solutions",
    duration: "May 2024 – Jul 2024",
  },
  {
    id: "proj-2",
    title: "Employee Management System",
    description:
      "Developed a comprehensive HR management system with attendance tracking, leave management, payroll calculation, and role-based access control for 500+ employees.",
    tech: ["Angular", "Spring Boot", "MySQL", "JWT", "Docker"],
    category: "internship",
    githubUrl: "https://github.com/akshaya249/emp-management",
    company: "InnovateSoft Pvt. Ltd.",
    duration: "Jan 2024 – Mar 2024",
  },
  {
    id: "proj-3",
    title: "AI Study Assistant",
    description:
      "An AICTE-funded intelligent study planner that generates personalized learning paths using NLP. Integrates quiz generation, progress tracking, and spaced repetition algorithms.",
    tech: ["Python", "FastAPI", "React", "OpenAI API", "PostgreSQL"],
    category: "mini",
    githubUrl: "https://github.com/akshaya249/ai-study-assistant",
    liveUrl: "https://ai-study-assistant.vercel.app",
  },
  {
    id: "proj-4",
    title: "Personal Finance Tracker",
    description:
      "A sleek personal finance dashboard with expense categorization, budget goals, visual analytics charts, and monthly report generation with PDF export.",
    tech: ["React", "TypeScript", "Recharts", "Supabase", "TailwindCSS"],
    category: "mini",
    githubUrl: "https://github.com/akshaya249/finance-tracker",
    liveUrl: "https://finance-tracker-app.netlify.app",
  },
  {
    id: "proj-5",
    title: "Real-Time Chat Application",
    description:
      "A WhatsApp-inspired chat app with real-time messaging, group chats, media sharing, message reactions, and end-to-end encryption for private conversations.",
    tech: ["React", "Socket.io", "Node.js", "MongoDB", "WebRTC"],
    category: "mini",
    githubUrl: "https://github.com/akshaya249/chat-app",
  },
];
