export interface Project {
  id: string;
  title: string;
  category: "Full-Stack" | "Software Engineering" | "UI/UX Design" | "Cybersecurity";
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  thumbnail: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  year: string;
  highlights: string[];
  role: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    iconName: string;
    description: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verificationUrl?: string;
  description: string;
}

export interface PortfolioData {
  owner: {
    name: string;
    monogram: string;
    field: string;
    location: string;
    bio: string;
    extendedBio: string;
    focusAreas: string[];
    metrics: { label: string; value: string }[];
  };
  projects: Project[];
  skillCategories: SkillCategory[];
  certifications: Certification[];
  contact: {
    email: string;
    github: string;
    linkedin: string;
    instagram: string;
    location: string;
    image: string;
  };
}

export const portfolioData: PortfolioData = {
  owner: {
    name: "John L. Palangeo",
    monogram: "JLP",
    field: "Information Technology",
    location: "Tabuk City, Kalinga, Philippines",
    bio: "Information Technology specialist and creative software engineer crafting high-performance full-stack web systems, resilient cybersecurity solutions, and human-centered digital experiences.",
    extendedBio: "Based in Tabuk City, Kalinga, Philippines, John L. Palangeo merges technical precision with minimalist, editorial design aesthetics. Driven by curiosity and software mastery, his work spans robust full-stack engineering, interactive Next.js interfaces, secure backend services, and emerging tech explorations.",
    focusAreas: [
      "Full-stack development",
      "Software engineering",
      "UI/UX design",
      "Cybersecurity",
      "Emerging technologies"
    ],
    metrics: [
      { label: "Years Experience", value: "03+" },
      { label: "Projects Completed", value: "18+" },
      { label: "Tech Stack Mastered", value: "12+" },
      { label: "Security Audits", value: "100%" }
    ]
  },
  projects: [
    {
      id: "antigravity-cms",
      title: "Antigravity Cloud Infrastructure",
      category: "Full-Stack",
      shortDescription: "A minimalist real-time cloud management portal built with Next.js, TypeScript, and micro-frontend architecture.",
      fullDescription: "Antigravity Cloud Infrastructure is a modern cloud orchestration platform designed for real-time telemetry, server health tracking, and zero-trust asset deployment. Built with speed and precision, it blends high-density data views with fluid motion.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Node.js"],
      thumbnail: "/images/project1.jpg",
      featured: true,
      liveUrl: "https://example.com/demo/antigravity",
      githubUrl: "https://github.com/placeholder/antigravity-cloud",
      year: "2025",
      highlights: [
        "Sub-10ms web socket telemetry streaming for active cluster nodes.",
        "Custom glassmorphic spatial design system optimized for dark and light modes.",
        "Role-based access control (RBAC) with encrypted session JWT tokens."
      ],
      role: "Lead Full-Stack Developer & Designer"
    },
    {
      id: "aegis-sentinel",
      title: "Aegis Threat Detection Engine",
      category: "Cybersecurity",
      shortDescription: "An automated threat intelligence and vulnerability auditing dashboard leveraging Python analysis pipelines.",
      fullDescription: "Aegis Sentinel gives cybersecurity teams immediate visibility into perimeter vulnerabilities, automated network scans, and incident response metrics. It automates log ingestion and highlights anomaly spikes in real-time.",
      technologies: ["Python", "PHP", "MySQL", "JavaScript", "Tailwind CSS"],
      thumbnail: "/images/project2.jpg",
      featured: true,
      liveUrl: "https://example.com/demo/aegis",
      githubUrl: "https://github.com/placeholder/aegis-sentinel",
      year: "2024",
      highlights: [
        "Automated log parser capable of processing 50,000 log events per second.",
        "Integrated MySQL indexing strategy reducing search latency by 72%.",
        "Clean, low-friction incident remediation workflow."
      ],
      role: "Cybersecurity Analyst & Systems Developer"
    },
    {
      id: "nexus-design-system",
      title: "Nexus Editorial UI Kit",
      category: "UI/UX Design",
      shortDescription: "A Swiss-inspired minimalist component library and design system for Next.js and Tailwind applications.",
      fullDescription: "Nexus Editorial UI Kit is a curated library of accessible, high-performance UI components crafted for creative developers and digital editorial publications. Built with Framer Motion, strict visual rhythm, and zero layout shift.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      thumbnail: "/images/project3.jpg",
      featured: true,
      liveUrl: "https://example.com/demo/nexus-ui",
      githubUrl: "https://github.com/placeholder/nexus-ui-kit",
      year: "2024",
      highlights: [
        "Accessible WCAG AAA compliant typography and contrast scales.",
        "Fluid responsive grid with variable font weight interpolations.",
        "Over 40+ production-ready Framer Motion animated components."
      ],
      role: "UI/UX Designer & Frontend Engineer"
    },
    {
      id: "kalinga-smart-gov",
      title: "Kalinga Public Services Portal",
      category: "Software Engineering",
      shortDescription: "An accessible civic service dispatch platform connecting local citizens with community resources.",
      fullDescription: "Developed to digitize municipal requests and emergency notifications in Tabuk City, Kalinga. Features offline-first data caching, SMS broadcast integrations, and streamlined service tracking for local residents.",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
      thumbnail: "/images/project4.jpg",
      featured: false,
      liveUrl: "https://example.com/demo/kalinga-portal",
      githubUrl: "https://github.com/placeholder/kalinga-smart-gov",
      year: "2024",
      highlights: [
        "Lightweight offline sync engine for low-bandwidth mobile connectivity.",
        "Role-specific portals for administrators, field responders, and public citizens.",
        "Integrated GIS mapping for localized emergency service routing."
      ],
      role: "Software Engineer"
    }
  ],
  skillCategories: [
    {
      title: "Frontend Engineering",
      skills: [
        { name: "HTML & CSS", level: 95, iconName: "Code", description: "Semantic markup, modern layout algorithms, grid & flexbox." },
        { name: "JavaScript", level: 92, iconName: "FileCode", description: "ES6+, async architectures, DOM optimization, Canvas API." },
        { name: "TypeScript", level: 90, iconName: "FileCode2", description: "Strict type definitions, generics, robust frontend contracts." },
        { name: "React", level: 92, iconName: "Atom", description: "Hooks, custom state management, performance profiling." },
        { name: "Next.js", level: 88, iconName: "Globe", description: "App router, SSR/SSG, server actions, route handlers." },
        { name: "Tailwind CSS", level: 95, iconName: "Palette", description: "Design tokens, custom utility plugins, fluid layouts." }
      ]
    },
    {
      title: "Backend & Systems",
      skills: [
        { name: "PHP", level: 85, iconName: "Server", description: "Object-oriented PHP, REST APIs, web application security." },
        { name: "Python", level: 88, iconName: "Terminal", description: "Scripting, security auditing scripts, backend API services." },
        { name: "MySQL", level: 86, iconName: "Database", description: "Relational database schema design, indexing, performance queries." }
      ]
    },
    {
      title: "DevOps, Security & Tools",
      skills: [
        { name: "Git & GitHub", level: 90, iconName: "GitBranch", description: "Branching strategies, code reviews, GitHub Actions CI/CD." },
        { name: "Cybersecurity Auditing", level: 84, iconName: "ShieldCheck", description: "Vulnerability analysis, OWASP Top 10 mitigation, auth protocols." },
        { name: "UI/UX & Prototyping", level: 88, iconName: "Layout", description: "Wireframing, typography pairing, motion interaction design." }
      ]
    }
  ],
  certifications: [
    {
      id: "cert-cybersec-pro",
      title: "Cybersecurity & Information Assurance Specialist",
      issuer: "Global Information Security Institute",
      issueDate: "2024",
      credentialId: "GISI-CY-882910",
      verificationUrl: "https://example.com/verify/GISI-CY-882910",
      description: "Demonstrated competence in perimeter protection, vulnerability assessments, and threat mitigation."
    },
    {
      id: "cert-fullstack-dev",
      title: "Full-Stack Web Development Certification",
      issuer: "Meta / Coursera Professional Certificate",
      issueDate: "2024",
      credentialId: "META-FS-991204",
      verificationUrl: "https://example.com/verify/META-FS-991204",
      description: "Advanced training in full-stack web applications, database modeling, and React ecosystem deployment."
    },
    {
      id: "cert-nextjs-arch",
      title: "Next.js & Modern React Engineering",
      issuer: "Frontend Masters",
      issueDate: "2023",
      credentialId: "FM-NX-441029",
      verificationUrl: "https://example.com/verify/FM-NX-441029",
      description: "Mastery of Next.js server components, web performance optimization, and dynamic routing."
    }
  ],
  contact: {
    email: "john.palangeo@example.com",
    github: "https://github.com/placeholder-john-palangeo",
    linkedin: "https://linkedin.com/in/placeholder-john-palangeo",
    instagram: "https://instagram.com/placeholder_john_palangeo",
    location: "Tabuk City, Kalinga, Philippines",
    image: "/images/contact.jpg"
  }
};
