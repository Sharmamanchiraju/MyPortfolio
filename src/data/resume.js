export const resumeData = {
  profile: {
    name: "Sharma Manchiraju",
    fullName: "Manchiraju Ramanjenaya Sharma",
    initials: "SM",
    title: "Java Backend Developer",
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
    bio: "Java Backend Developer with 1+ year of professional experience developing enterprise backend applications and RESTful APIs using Java, Spring Boot, Hibernate, MySQL, and PostgreSQL. Hands-on with Spring Security, JWT-based authentication, role-based access control, Liquibase, SQL optimization, and production debugging. Experience spans digital document signing, learning-management, and workflow-driven applications, plus exposure to Docker, AWS, Python, FastAPI, and LLM-based development."
  },
  
  metaCards: [
    { label: "Experience", value: "1+ Years", subtext: "Enterprise Development" },
    { label: "Projects shipped", value: "4", subtext: "Production & Personal" },
    { label: "Location", value: "Hyderabad, India", subtext: "Available Relocation" },
    { label: "Availability", value: "Open to Work", subtext: "Immediate Joiner" }
  ],

  experience: [
    {
      id: "exp-sharpgurus",
      role: "Backend Developer",
      company: "Sharpgurus",
      location: "Hyderabad, India",
      dates: "Jul 2025 – Present",
      isCurrent: true,
      technologies: ["Java", "Spring Boot", "Hibernate", "Spring Security", "JWT", "MySQL", "PostgreSQL", "REST APIs"],
      bullets: [
        "Develop and maintain RESTful APIs and backend services using Java, Spring Boot, Hibernate, and relational databases for enterprise applications.",
        "Implement secure authentication and authorization using Spring Security, JWT, and role-based access control (RBAC).",
        "Diagnose and resolve production issues by analyzing application logs, backend request flows, SQL queries, and business logic.",
        "Develop database-driven workflows and collaborate with frontend teams to integrate APIs and resolve application-level issues."
      ]
    }
  ],

  projects: [
    {
      id: "proj-esignrx",
      title: "eSignRx",
      subtitle: "Digital Document Signing Platform",
      badge: "Document Signing",
      dates: "Mar 2026 – Present",
      tags: ["Java", "Spring Boot", "MySQL", "JWT"],
      github: "https://github.com/Sharmamanchiraju",
      demo: "https://sharma-manchiraju.vercel.app/", // TODO: Replace with live demo link
      icon: "FiFileText",
      bullets: [
        "Backend services and REST APIs for document lifecycle management, recipient processing, approval workflows, bulk signing, and status transitions.",
        "Resolved production issues across document lifecycle states through backend debugging, database analysis, and business-logic fixes while preserving signing-record integrity."
      ]
    },
    {
      id: "proj-skillpro",
      title: "SkillPro",
      subtitle: "Learning Management System",
      badge: "Enterprise LMS",
      dates: "Oct 2025 – Feb 2026",
      tags: ["Spring Boot", "Hibernate", "Liquibase"],
      github: "https://github.com/Sharmamanchiraju",
      demo: "https://sharma-manchiraju.vercel.app/", // TODO: Replace with live demo link
      icon: "FiBookOpen",
      bullets: [
        "Multi-tenant backend functionality for organization, course, and user management using Spring Boot, Hibernate, and REST APIs.",
        "Database workflows with controlled schema migrations via Liquibase for enterprise learning operations."
      ]
    },
    {
      id: "proj-ecorprx",
      title: "eCorpRX",
      subtitle: "Work Management Application",
      badge: "Enterprise Workflow",
      dates: "Jul 2025 – Oct 2025",
      tags: ["Spring Boot", "Hibernate", "Liquibase"],
      github: "https://github.com/Sharmamanchiraju",
      demo: "https://sharma-manchiraju.vercel.app/", // TODO: Replace with live demo link
      icon: "FiBriefcase",
      bullets: [
        "Backend modules and REST APIs for role-based job tracking, task management, and workflow-driven enterprise operations.",
        "Hibernate-based database operations; debugged backend/database issues affecting task and workflow execution."
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
        { name: "Python", icon: "SiPython" }
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
        { name: "SQL", icon: "FiDatabase" }
      ]
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS (EC2, Lambda, S3)", icon: "SiAmazonwebservices" },
        { name: "Docker", icon: "SiDocker" },
        { name: "Git", icon: "SiGit" },
        { name: "CI/CD basics", icon: "FiRefreshCw" }
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
    { label: "Projects Shipped", value: "4", icon: "FiFolder" },
    { label: "Core Technologies", value: "10+", icon: "FiCpu" },
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
