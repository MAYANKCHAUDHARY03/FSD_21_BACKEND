import { PortfolioData } from "../types";

export const portfolioData: PortfolioData = {
  // ====================
  // PERSONAL INFORMATION
  // ====================
  personal: {
    name: "Mayank Chaudhary",
    role: "Computer Science Student | Full-Stack Development • Cybersecurity • Defence",
    bio: "Computer Science student at ABES Engineering College exploring full-stack development, cybersecurity, defence technology, content and communication. Currently building stronger foundations in DSA, web development, cloud computing, Linux, ethical hacking and networking through projects, hackathons and student-led activities.",
    email: "mayankchaudhary03012008@gmail.com",
    phone: "",
    location: "",
    resumeUrl: "/Mayank_Chaudhary_Resume.pdf",
  },
  
  // ====================
  // SOCIAL LINKS
  // ====================
  social: {
    github: "https://github.com/MAYANKCHAUDHARY03",
    linkedin: "https://www.linkedin.com/in/mayank-chaudhary03",
    twitter: "",
  },
  
  // ====================
  // SKILLS
  // ====================
  skills: [
    {
      category: "Technical",
      items: [
        "C++",
        "Python",
        "JavaScript / TypeScript",
        "React",
        "Node.js / Express",
        "FastAPI",
        "Vite",
        "Tailwind CSS",
        "Git",
        "GitHub",
        "Linux",
        "Computer Networking",
        "Ethical Hacking",
        "Nmap",
        "Wireshark",
        "Burp Suite",
      ],
    },
    {
      category: "Creative / Communication",
      items: [
        "Content Writing",
        "PR & Outreach",
        "Graphic Designing",
        "P&P",
      ],
    },
  ],
  
  // ====================
  // PROJECTS
  // ====================
  projects: [
    {
      slug: "hackathon-tracker",
      title: "Hackathon Tracker",
      description: "A hackathon management, discovery, and workflow platform involving participant and organization workflows.",
      problem: "Managing hackathon registrations and workflows efficiently.",
      solution: "Developed a comprehensive platform to handle participants and organization tracking.",
      techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "FastAPI", "SQLite/PostgreSQL", "Alembic", "JWT"],
      features: ["Participant workflows", "Organization workflows", "Event discovery"],
      githubUrl: "",
      liveUrl: "",
    },
    {
      slug: "saraswati-ai",
      title: "Saraswati AI",
      description: "An AI project focusing on educational assistance.",
      problem: "Enhancing access to educational resources via AI.",
      solution: "Developed AI workflows to assist with learning.",
      techStack: ["Python"],
      features: ["AI integration"],
      githubUrl: "",
      liveUrl: "",
    },
    {
      slug: "uav-sentinel",
      title: "UAV Sentinel",
      description: "A UAV-based monitoring project.",
      problem: "Implementing reliable aerial monitoring.",
      solution: "Designed sentinel routines for UAV navigation and data collection.",
      techStack: ["Python", "C++"],
      features: ["UAV integration"],
      githubUrl: "",
      liveUrl: "",
    },
    {
      slug: "abes-autonomy",
      title: "ABES Autonomy",
      description: "A project exploring autonomous systems.",
      problem: "Developing autonomous operation capabilities.",
      solution: "Created frameworks for testing autonomous logic.",
      techStack: ["C++"],
      features: ["Autonomous routines"],
      githubUrl: "",
      liveUrl: "",
    }
  ],
  
  // ====================
  // JOURNEY / EXPERIENCE
  // ====================
  experience: [
    {
      company: "Build with Bharat",
      role: "Participant",
      period: "",
      description: ["Participated in the Build with Bharat hackathon."],
    },
    {
      company: "Adobe University Hackathon",
      role: "Participant",
      period: "",
      description: ["Participated in the Adobe University Hackathon."],
    },
    {
      company: "Smart India Hackathon",
      role: "Participant",
      period: "",
      description: ["Participated in the Smart India Hackathon."],
    },
    {
      company: "AGORA — The Debating Society of ABESEC",
      role: "Vice President",
      period: "",
      description: ["Debate, Content, Hosting, Event activities, Outreach/promotions."],
    },
    {
      company: "Trishul — The Defence Society of ABESEC",
      role: "Active Member",
      period: "",
      description: ["Engaged in defence-related activities and studies."],
    },
    {
      company: "Creative U and Tourism Club",
      role: "Member",
      period: "",
      description: ["Active member participating in club events."],
    },
    {
      company: "ACES — The Media Club of ABESEC",
      role: "Former Member",
      period: "",
      description: ["Contributed to media and creative activities."],
    }
  ],
  
  // ====================
  // EDUCATION
  // ====================
  education: [
    {
      institution: "ABES Engineering College",
      degree: "B.Tech — Computer Science & Engineering",
      period: "Currently pursuing — 2nd Year",
    },
    {
      institution: "CBSE",
      degree: "Class XII",
      period: "Completed",
    },
    {
      institution: "CBSE",
      degree: "Class X",
      period: "Completed",
    },
  ],
  
  // ====================
  // ACHIEVEMENTS
  // ====================
  achievements: [
    "NDA: AIR 557 (NDA 154th Course)",
    "SRMJEE: AIR 605"
  ],
  
  // ====================
  // CERTIFICATIONS
  // ====================
  certifications: [
  ],
};

