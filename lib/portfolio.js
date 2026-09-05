export const profile = {
  name: "Pavithran Arul",
  company: "Mittai INC",
  location: "Tiruppur, Tamil Nadu",
  email: "pavithranarul7@gmail.com",
  github: "https://github.com/pavithranarul",
  linkedin: "https://www.linkedin.com/in/pavithran-arul",
  carescribe: "https://carescribe.health",
};

// Content provenance and intentionally omitted claims: docs/content-sources.md.
export const personalProjects = [
  {
    number: "01",
    eyebrow: "Python library · early release",
    title: "Failo",
    description: "A small Python library that adds retries, backoff and provider fallback to existing AI API calls, with no runtime dependencies. Currently an early release.",
    tags: ["Python", "AsyncIO", "Retries", "Fallbacks"],
    href: "https://github.com/pavithranarul/failo",
    preview: "reliability",
  },
  {
    number: "02",
    eyebrow: "Business document automation",
    title: "FluidAI",
    description: "A FastAPI service that turns a business-document request into a Word file using Gemini. Supports follow-up edits through in-memory sessions.",
    tags: ["Python", "FastAPI", "Gemini API", "python-docx"],
    href: "https://github.com/pavithranarul/FluidAI",
    preview: "documents",
  },
  {
    number: "03",
    eyebrow: "Restaurant voice application",
    title: "Dinodial restaurant agent",
    description: "A restaurant booking application with AI voice calls, scheduled call handling and email confirmations. Built with a FastAPI backend and React interface.",
    tags: ["FastAPI", "React", "Gemini API", "APScheduler"],
    href: "https://github.com/pavithranarul/Dinodial-ai",
    preview: "voice",
  },
  {
    number: "04",
    eyebrow: "Full-stack assessment project",
    title: "WorkSphere",
    description: "An employee-record management app built for a full-stack assessment. Create, view, edit and delete records through a React interface, Express API and MongoDB.",
    tags: ["React", "JavaScript", "Express", "MongoDB"],
    href: "https://github.com/pavithranarul/Work-Sphere",
    preview: "workspace",
  },
];

export const earlierExperience = [
  {
    company: "Shiash InfoTech",
    role: "Java full-stack development intern",
    date: "Aug – Oct 2024",
    description: "Built web applications with Java and Spring Boot, connected HTML, CSS and JavaScript interfaces, and worked with SQL databases.",
  },
  {
    company: "AIIRF · Annamalai University",
    role: "AI & machine learning intern",
    date: "Jun – Jul 2023",
    description: "Worked with Python, Pandas and scikit-learn to prepare data, build predictive models, and train and validate them on datasets.",
  },
  {
    company: "The Sparks Foundation",
    role: "Web development & design intern",
    date: "2023",
    description: "Created a basic banking website using PHP and MySQL, and completed a payment-gateway integration task.",
  },
];

export const skillGroups = [
  {
    label: "Python & APIs",
    description: "FastAPI services in FluidAI and Dinodial; asynchronous calls and retry handling in Failo.",
    skills: ["Python", "FastAPI", "AsyncIO", "REST APIs", "pytest"],
  },
  {
    label: "AI & automation",
    description: "Gemini-powered document generation, voice-agent integration and scheduled background tasks.",
    skills: ["Gemini API", "LLM APIs", "python-docx", "APScheduler"],
  },
  {
    label: "Data & databases",
    description: "SQL in Java web development, MongoDB in WorkSphere, and data preparation during my ML internship.",
    skills: ["SQL", "MySQL", "MongoDB", "Pandas", "scikit-learn"],
  },
  {
    label: "Web & development tools",
    description: "React interfaces for personal projects, a foundation in Java and Spring Boot, and Git for version control.",
    skills: ["React", "JavaScript", "Java", "Spring Boot", "Git", "Docker"],
  },
];
