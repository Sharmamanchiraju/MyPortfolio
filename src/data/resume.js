export const resumeData = {
  profile: {
    name: "Sharma Manchiraju",
    fullName: "Manchiraju Ramanjenaya Sharma",
    initials: "SM",
    title: "Java Backend Engineer",
    location: "Hyderabad, Telangana, India",
    email: "Sharmamanchiraju02@gmail.com",
    phone: "9573864944",
    availability: "Open to Work",
    social: {
      github: "https://github.com/Sharmamanchiraju",
      linkedin: "https://www.linkedin.com/in/sharma-manchiraju-3109b8227/",
      portfolio: "https://sharma-manchiraju.vercel.app/",
      email: "mailto:Sharmamanchiraju02@gmail.com"
    },
    heroTagline: "Building scalable, secure, high-performance backend systems with Spring Boot, Microservices, and Cloud technologies.",
    bio: "Software Engineer with 1+ year of experience building production applications, specializing in Java and Spring Boot backend development. Develops REST APIs, service-layer business logic, and JPA/Hibernate data models across 5 enterprise products, with hands-on experience in relational databases, API security, AWS S3, React/Angular, Kafka, Docker, and CI/CD."
  },
  
  metaCards: [
    { label: "Experience", value: "1+ Years", subtext: "Enterprise Development" },
    { label: "Products shipped", value: "5", subtext: "Enterprise Platforms" },
    { label: "Location", value: "Hyderabad, India", subtext: "Available Relocation" },
    { label: "Availability", value: "Open to Work", subtext: "Immediate Joiner" }
  ],

  experience: [
    {
      id: "exp-sharpgurus-se",
      role: "Software Engineer",
      company: "Sharpgurus (eCorpRX)",
      location: "Hyderabad, India",
      dates: "Feb 2026 – Present",
      isCurrent: true,
      technologies: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "MySQL", "Oracle", "Liquibase", "Spring Security", "JWT", "AWS S3", "Kafka", "Docker"],
      bullets: [
        "Develop and maintain backend services and REST APIs across 5 enterprise products (eSignRX, WorkTrack, Service 360, SkillPro LMS, HRM) using Java, Spring Boot, Spring Data JPA, Hibernate, MySQL/Oracle, and Liquibase.",
        "Secured REST APIs with Spring Security, JWT authentication, and role-based access control (RBAC), including token-validation filters and security configuration.",
        "Diagnosed and resolved production issues through root-cause analysis of Hibernate mappings, transaction handling, database constraint violations, and SQL queries."
      ]
    },
    {
      id: "exp-sharpgurus-intern",
      role: "Backend Developer Intern",
      company: "Sharpgurus (eCorpRX)",
      location: "Hyderabad, India",
      dates: "Jul 2025 – Jan 2026",
      isCurrent: false,
      technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "Liquibase", "REST APIs"],
      bullets: [
        "Built REST APIs and service-layer business logic for enterprise products, modeling JPA/Hibernate entity relationships.",
        "Maintained database schema evolution through Liquibase changesets and resolved inconsistencies between entity mappings and database schemas."
      ]
    }
  ],

  projects: [
    {
      id: "proj-esignrx",
      title: "eSignRX",
      subtitle: "Digital Signature & Document Management Platform",
      badge: "Document Signing",
      dates: "Mar 2026 – Present",
      tags: ["Java", "Spring Boot", "MySQL", "JWT", "AWS S3", "Thymeleaf"],
      github: "https://github.com/Sharmamanchiraju",
      demo: "https://sharma-manchiraju.vercel.app/", // TODO: Replace with live demo link
      icon: "FiFileText",
      bullets: [
        "Developed status-driven REST APIs for the full document lifecycle, including creation, attachments, expiry, voiding, and copying.",
        "Engineered multi-party signing and approval flows with recipient and approver management, signing order, status tracking, and bulk signing.",
        "Root-caused inconsistencies between database state and Thymeleaf-generated Legal Evidence PDFs, restoring accurate signing status and signature data.",
        "Integrated AWS S3 storage with presigned URL access and email notifications for signing requests, reminders, and expiry."
      ]
    },
    {
      id: "proj-worktrack",
      title: "WorkTrack",
      subtitle: "Project Execution & Procurement Platform",
      badge: "Project Management",
      tags: ["Spring Boot", "Hibernate", "Liquibase", "MySQL"],
      github: "https://github.com/Sharmamanchiraju",
      demo: "https://sharma-manchiraju.vercel.app/", // TODO: Replace with live demo link
      icon: "FiBriefcase",
      bullets: [
        "Built procurement backend for requests, vendors, vendor quotes, and quote items, with JPA/Hibernate entity relationships and cost-estimation logic.",
        "Developed REST APIs for projects, phases, epics, stories, tasks, sprints, milestones, and timesheets.",
        "Delivered project analytics including PERT timeline estimation, critical-path analysis, and FMEA, Fault Tree, and FRACAS modules.",
        "Maintained schema evolution through Liquibase changesets and fixed entity-to-schema mapping inconsistencies."
      ]
    },
    {
      id: "proj-service360",
      title: "Service 360",
      subtitle: "Cross-Organization Support Platform",
      badge: "Support & Ticketing",
      tags: ["Spring Boot", "Spring Security", "Hibernate", "Oracle"],
      github: "https://github.com/Sharmamanchiraju",
      demo: "https://sharma-manchiraju.vercel.app/", // TODO: Replace with live demo link
      icon: "FiCpu",
      bullets: [
        "Developed ticketing, escalation, and reporting services covering priorities, statuses, assignees, response tracking, and resolution metrics.",
        "Delivered project-level authorization and access management for secure collaboration between separate organizations."
      ]
    },
    {
      id: "proj-skillpro-hrm",
      title: "SkillPro LMS & HRM",
      subtitle: "Learning and HR Applications",
      badge: "Enterprise LMS & HR",
      dates: "Oct 2025 – Feb 2026",
      tags: ["Spring Boot", "Hibernate", "Liquibase"],
      github: "https://github.com/Sharmamanchiraju",
      demo: "https://sharma-manchiraju.vercel.app/", // TODO: Replace with live demo link
      icon: "FiBookOpen",
      bullets: [
        "Developed REST APIs and service-layer logic for multi-tenant organization, course, and user management in SkillPro.",
        "Built employee modules for HRM, with controlled schema migrations via Liquibase."
      ]
    },
    {
      id: "proj-ai-trip-planner",
      title: "AI Trip Planner Agent",
      subtitle: "Personal AI Platform",
      badge: "AI & FastAPI",
      dates: "Jul 2026",
      tags: ["Python", "FastAPI", "PostgreSQL", "LangChain", "Groq API"],
      github: "https://github.com/Sharmamanchiraju",
      demo: "https://sharma-manchiraju.vercel.app/", // TODO: Replace with live demo link
      icon: "FiCpu",
      bullets: [
        "AI-powered travel planning platform generating personalized itineraries through contextual, multi-turn LLM conversations.",
        "FastAPI/PostgreSQL services with session management and conversation persistence; integrates LangChain, Groq, weather, and location-aware travel services."
      ]
    }
  ],

  skillsCategorized: [
    {
      category: "Languages",
      skills: [
        { name: "Java", icon: "SiOpenjdk" },
        { name: "Python", icon: "SiPython" },
        { name: "SQL", icon: "FiDatabase" },
        { name: "JavaScript", icon: "SiJavascript" }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Spring Boot", icon: "SiSpringboot" },
        { name: "Spring Framework", icon: "SiSpring" },
        { name: "Hibernate", icon: "SiHibernate" },
        { name: "REST APIs", icon: "TbApi" },
        { name: "Microservices", icon: "TbComponents" },
        { name: "Spring Security", icon: "SiSpringsecurity" },
        { name: "JWT", icon: "SiJsonwebtokens" },
        { name: "Liquibase", icon: "SiLiquibase" },
        { name: "FastAPI", icon: "SiFastapi" }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "PostgreSQL", icon: "SiPostgresql" },
        { name: "MySQL", icon: "SiMysql" },
        { name: "Oracle", icon: "FiDatabase" },
        { name: "SQL", icon: "FiDatabase" }
      ]
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS S3", icon: "SiAmazonwebservices" },
        { name: "Kafka", icon: "SiApachekafka" },
        { name: "Jenkins", icon: "SiJenkins" },
        { name: "Docker", icon: "SiDocker" },
        { name: "Git", icon: "SiGit" },
        { name: "CI/CD Pipelines", icon: "FiRefreshCw" }
      ]
    },
    {
      category: "Tools",
      skills: [
        { name: "Maven", icon: "SiApachemaven" },
        { name: "Postman", icon: "SiPostman" },
        { name: "IntelliJ IDEA", icon: "SiIntellijidea" },
        { name: "Spring Tool Suite", icon: "SiEclipseide" },
        { name: "VS Code", icon: "TbBrandVscode" },
        { name: "Linux", icon: "SiLinux" }
      ]
    },
    {
      category: "Additional",
      skills: [
        { name: "HTML", icon: "SiHtml5" },
        { name: "CSS", icon: "SiCss3" },
        { name: "JavaScript", icon: "SiJavascript" },
        { name: "React.js", icon: "SiReact" },
        { name: "Angular", icon: "SiAngular" },
        { name: "Thymeleaf", icon: "SiThymeleaf" },
        { name: "LangChain", icon: "FiCpu" },
        { name: "Groq API", icon: "FiCpu" },
        { name: "OpenAI API", icon: "SiOpenai" },
        { name: "Claude API", icon: "FiCpu" },
        { name: "GitHub Copilot", icon: "SiGithubcopilot" },
        { name: "Prompt Engineering", icon: "FiTerminal" }
      ]
    }
  ],

  stats: [
    { label: "Years Experience", value: "1+", icon: "FiBriefcase" },
    { label: "Products Shipped", value: "5", icon: "FiFolder" },
    { label: "Core Technologies", value: "15+", icon: "FiCpu" },
    { label: "Location", value: "Hyderabad", icon: "FiMapPin" }
  ],

  education: [
    {
      degree: "B.Tech, Computer Science & Engineering",
      institution: "Rajamahendri Institute of Engineering & Technology",
      dates: "2020 – 2024",
      grade: "CSE Degree",
      details: "Core Computer Science curriculum focusing on Data Structures, Object-Oriented Programming in Java, Database Management Systems, and Software Engineering."
    }
  ]
};
