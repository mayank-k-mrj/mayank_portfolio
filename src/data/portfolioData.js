export const portfolioData = {
  personalInfo: {
    name: "Mayank Kumar",
    role: "Full Stack Java Developer",
    educationInfo: "B.Tech IT, 4th Year | Buddha Institute of Technology",
    headline: "Building secure, scalable and user-focused web applications with Java, Spring Boot and modern frontend technologies.",
    resumePath: "/resume/Mayank-Kumar-Resume.pdf",
    socialLinks: {
      github: "https://github.com/mayank-k-mrj",
      linkedin: "https://www.linkedin.com/in/mayank-kumar-b0715736a",
      email: "mailto:mayankcica@gmail.com",
      emailRaw: "mayankcica@gmail.com"
    }
  },

  about: {
    bio: "I'm Mayank Kumar, a 4th-year B.Tech IT student and Full Stack Java Developer passionate about building modern, secure, and scalable web applications. I have hands-on, project-based experience with Java, Spring Boot, React, JavaScript, MySQL, and JWT-based authentication and security. I enjoy turning ideas into practical products and continuously improving my development skills by working on real-world projects. I’m currently looking for opportunities where I can contribute to impactful software projects while growing as a professional developer.",
    highlights: [
      "Full Stack Development with Java & React",
      "Robust REST API Design & Spring Boot Microservices",
      "Authentication & Security with JWT & Spring Security",
      "Relational Database Design with MySQL"
    ]
  },

  skillCategories: [
    {
      title: "Languages & Frontend",
      icon: "Code2",
      color: "from-cyan-500 to-blue-500",
      skills: [
        { name: "Java", category: "Language", description: "Core OOP, Collections, Multithreading, Streams" },
        { name: "JavaScript", category: "Language", description: "ES6+, Async/Await, DOM, Modern Web APIs" },
        { name: "React.js", category: "Frontend", description: "Hooks, State Management, Components, JSX" },
        { name: "HTML5", category: "Frontend", description: "Semantic Markup, Accessibility, SEO" },
        { name: "CSS3", category: "Frontend", description: "Flexbox, Grid, Responsive Layouts, Animations" }
      ]
    },
    {
      title: "Backend",
      icon: "Server",
      color: "from-emerald-500 to-green-600",
      skills: [
        { name: "Spring Boot", category: "Framework", description: "Dependency Injection, MVC, Data JPA, Bootstrapping" },
        { name: "Full Stack Development", category: "Architecture", description: "End-to-End Client-Server System Integration" },
        { name: "REST APIs", category: "Web Services", description: "RESTful Endpoints, JSON, HTTP Methods, DTOs" },
        { name: "JWT Authentication", category: "Security", description: "Token-based Stateless Auth, Refresh Tokens" },
        { name: "Spring Security", category: "Security", description: "Role-based Access, Password Hashing, Security Filters" }
      ]
    },
    {
      title: "Database",
      icon: "Database",
      color: "from-blue-500 to-indigo-600",
      skills: [
        { name: "MySQL", category: "RDBMS", description: "Schema Design, Queries, Joins, Indexing" }
      ]
    },
    {
      title: "Tools & Version Control",
      icon: "Wrench",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git", category: "VCS", description: "Branching, Merging, Rebase, Version Tracking" },
        { name: "GitHub", category: "Collaboration", description: "Pull Requests, Code Reviews, Repositories" }
      ]
    }
  ],

  projects: [
    {
      id: "medsetu",
      title: "MedSetu",
      subtitle: "Medicine Donation & Trading Platform",
      description: "A medicine donation and trading platform where users can donate or sell their unused medicines to nearby NGOs and healthcare organizations.",
      technologies: ["Java", "Spring Boot", "React", "JavaScript", "MySQL", "JWT", "Security"],
      featured: true,
      demoUrl: null,
      githubUrl: "https://github.com/mayank-k-mrj/MedSetu_Project",
      gradient: "from-cyan-500/20 via-blue-600/20 to-indigo-900/30",
      accentColor: "#00f0ff"
    },
    {
      id: "healthyyatra",
      title: "HealthyYatra",
      subtitle: "Centralized Patient & Migrant Health Database",
      description: "A centralized database system for migrant and non-migrant patients that securely stores diagnosis records accessible to doctors and patients, improving healthcare data availability across different locations.",
      technologies: ["Java", "Spring Boot", "React", "JavaScript", "MySQL"],
      featured: true,
      demoUrl: null,
      githubUrl: "https://github.com/mayank-k-mrj/HealthYatra",
      gradient: "from-emerald-500/20 via-teal-600/20 to-slate-900/30",
      accentColor: "#6db33f"
    },
    {
      id: "habit-streak-tracker",
      title: "Habit Streak Tracker",
      subtitle: "Consistency & Routine Building Platform",
      description: "A habit-tracking application designed to help users build consistency, track their daily habits, and maintain streaks over time.",
      technologies: ["Java", "Spring Boot", "React", "JavaScript", "MySQL", "JWT"],
      featured: true,
      demoUrl: "https://habitstreaktracker.onrender.com/",
      githubUrl: "https://github.com/mayank-k-mrj/HabitStreakTracker",
      gradient: "from-purple-500/20 via-indigo-600/20 to-slate-900/30",
      accentColor: "#8b5cf6"
    }
  ],

  experience: {
    title: "Project-Based Experience",
    summary: "Hands-on experience developing full-stack web applications using Java, Spring Boot, React, JavaScript and MySQL, with implementation of REST APIs, JWT authentication and application security.",
    highlights: [
      { name: "Full Stack Development", detail: "Building responsive React frontend interfaces integrated with robust Java Spring Boot backend services." },
      { name: "REST API Development", detail: "Designing clean, scalable RESTful APIs with standardized JSON requests/responses and DTO patterns." },
      { name: "JWT Authentication", detail: "Implementing secure token-based user authentication and stateless session verification." },
      { name: "Spring Security", detail: "Configuring security filters, CORS policies, password encryption, and role-based endpoint protection." },
      { name: "Database Integration", detail: "Designing MySQL relational schemas and executing optimized queries using Spring Data JPA & Hibernate." },
      { name: "Frontend Development", detail: "Crafting modern, component-driven user interfaces using React, JavaScript (ES6+), and CSS." },
      { name: "Git / GitHub Version Control", detail: "Managing codebase history, feature branches, pull requests, and collaborative repository workflows." }
    ]
  },

  education: {
    degree: "B.Tech — Information Technology",
    institution: "Buddha Institute of Technology",
    status: "4th Year Student",
    timeline: "2022 - 2026",
    description: "Specializing in core computer science subjects including Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, and Software Engineering."
  },

  achievements: [
    {
      id: "hackindia",
      title: "HackIndia Hackathon",
      badge: "Top 20 Teams",
      description: "Selected among the Top 20 teams in the HackIndia Hackathon, competing against 100+ teams.",
      highlight: "Recognized for innovative technical problem solving, robust architecture design, and rapid full-stack prototype execution."
    }
  ]
};
