export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
  role: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Advanced", "Intermediate"
    iconName: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  issueDate: string;
  credentialId?: string;
  verificationUrl?: string;
}

export interface PortfolioData {
  owner: {
    name: string;
    field: string;
    location: string;
    headline: string;
    bio: string[];
    interests: string[];
    email: string;
    github: string;
    linkedin: string;
    instagram: string;
  };
  projects: Project[];
  skillCategories: SkillCategory[];
  certifications: Certification[];
}

export const portfolioData: PortfolioData = {
  owner: {
    name: "John L. Palangeo",
    field: "Information Technology",
    location: "Tabuk City, Kalinga, Philippines",
    headline: "Creative Engineer & Full-Stack Developer exploring the intersection of design, software systems, and security.",
    bio: [
      "Driven IT professional based in Tabuk City, Kalinga, Philippines, specializing in modern web architecture, intuitive UI/UX design, and secure software engineering.",
      "Passionate about crafting minimalist, fluid digital experiences and architecting robust technical solutions using cutting-edge tools and emerging technologies."
    ],
    interests: [
      "Full-Stack Development",
      "Software Engineering",
      "UI/UX Design",
      "Cybersecurity",
      "Emerging Technologies"
    ],
    email: "john.palangeo.dev@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com"
  },
  projects: [
    {
      id: "project-1",
      title: "Kalinga Cultural Heritage Digital Archive",
      category: "Full-Stack Web App",
      description: "An interactive, web-based digital platform archiving local cultural artifacts, oral histories, and community traditions.",
      fullDescription: "A modern digital repository designed to document, safeguard, and celebrate indigenous culture through high-resolution media viewer, dynamic search indexing, and accessible metadata standards.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MySQL"],
      image: "/projects/project1.jpg",
      liveDemoUrl: "https://example.com/demo/kalinga-archive",
      githubUrl: "https://github.com/example/kalinga-archive",
      featured: true,
      year: "2024",
      role: "Lead Developer & UI Designer"
    },
    {
      id: "project-2",
      title: "SentinelGuard Network Threat Analytics",
      category: "Cybersecurity & Dashboard",
      description: "Real-time network security monitor and packet anomaly visualization system designed for small-scale server clusters.",
      fullDescription: "Built with security-first architecture, SentinelGuard monitors network throughput, parses syslog records, and generates reactive alerts using probabilistic anomaly detection models.",
      technologies: ["Python", "PHP", "JavaScript", "Tailwind CSS", "MySQL"],
      image: "/projects/project2.jpg",
      liveDemoUrl: "https://example.com/demo/sentinelguard",
      githubUrl: "https://github.com/example/sentinelguard",
      featured: true,
      year: "2024",
      role: "Security Engineer"
    },
    {
      id: "project-3",
      title: "Aura Minimalist CMS Engine",
      category: "Software Engineering",
      description: "A lightweight, headless content management system tailored for high-speed editorial publications.",
      fullDescription: "Aura focuses on developer experience and minimalist content editing with zero layout shift, automated image pipeline optimization, and custom REST API endpoints.",
      technologies: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
      image: "/projects/project3.jpg",
      liveDemoUrl: "https://example.com/demo/aura-cms",
      githubUrl: "https://github.com/example/aura-cms",
      featured: false,
      year: "2023",
      role: "Full-Stack Developer"
    },
    {
      id: "project-4",
      title: "Vortex Interactive Generative Engine",
      category: "Creative Coding & UI",
      description: "WebGL canvas experiment exploring particle physics, interactive mouse forces, and generative graphics.",
      fullDescription: "An exploration into browser-rendered generative visual art and particle simulations with fluid physics calculations and low-latency canvas rendering.",
      technologies: ["JavaScript", "TypeScript", "HTML5 Canvas", "Tailwind CSS"],
      image: "/projects/project4.jpg",
      liveDemoUrl: "https://example.com/demo/vortex-engine",
      githubUrl: "https://github.com/example/vortex-engine",
      featured: false,
      year: "2023",
      role: "Creative Developer"
    }
  ],
  skillCategories: [
    {
      category: "Frontend Development & UI/UX",
      description: "Crafting modern, accessible, and responsive visual interfaces.",
      skills: [
        { name: "HTML & CSS", level: "Advanced", iconName: "Code" },
        { name: "JavaScript", level: "Advanced", iconName: "FileCode" },
        { name: "TypeScript", level: "Intermediate", iconName: "FileSpreadsheet" },
        { name: "React", level: "Advanced", iconName: "Atom" },
        { name: "Next.js", level: "Intermediate", iconName: "Layers" },
        { name: "Tailwind CSS", level: "Advanced", iconName: "Palette" }
      ]
    },
    {
      category: "Backend Development & Databases",
      description: "Architecting reliable application logic, APIs, and data storage.",
      skills: [
        { name: "PHP", level: "Intermediate", iconName: "Server" },
        { name: "Python", level: "Intermediate", iconName: "Terminal" },
        { name: "MySQL", level: "Intermediate", iconName: "Database" }
      ]
    },
    {
      category: "Developer Tools & Infrastructure",
      description: "Version control, workflow automation, and security practices.",
      skills: [
        { name: "Git & GitHub", level: "Advanced", iconName: "GitBranch" }
      ]
    }
  ],
  certifications: [
    {
      id: "cert-1",
      title: "CompTIA Security+ Continuing Education",
      organization: "CompTIA",
      issueDate: "2024",
      credentialId: "COMP001029384",
      verificationUrl: "https://www.comptia.org"
    },
    {
      id: "cert-2",
      title: "Meta Front-End Developer Professional Certificate",
      organization: "Coursera / Meta",
      issueDate: "2023",
      credentialId: "COUR-META-FE-9982",
      verificationUrl: "https://coursera.org"
    },
    {
      id: "cert-3",
      title: "AWS Certified Cloud Practitioner",
      organization: "Amazon Web Services",
      issueDate: "2023",
      credentialId: "AWS-CCP-882019",
      verificationUrl: "https://aws.amazon.com/verification"
    }
  ]
};
