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
    eyebrow: "Issue tracking API & UI",
    title: "TrackFlow",
    description: "A Jira/Linear-style issue tracker built with Django REST Framework. Multi-tenant organizations, role-based project membership, an enforced status workflow and an audit trail, with JWT auth and a React kanban board.",
    tags: ["Python", "Django", "REST APIs", "React", "TypeScript"],
    href: "https://github.com/pavithranarul/TrackFlow",
    preview: "tracker",
  },
  {
    number: "02",
    eyebrow: "Python library · early release",
    title: "Failo",
    description: "A small Python library that adds retries, backoff and provider fallback to existing AI API calls, with no runtime dependencies. Currently an early release.",
    tags: ["Python", "AsyncIO", "Retries", "Fallbacks"],
    href: "https://github.com/pavithranarul/failo",
    preview: "reliability",
  },
  {
    number: "03",
    eyebrow: "Business document automation",
    title: "FluidAI",
    description: "A FastAPI service that turns a business-document request into a Word file using Gemini. Supports follow-up edits through in-memory sessions.",
    tags: ["Python", "FastAPI", "Gemini API", "python-docx"],
    href: "https://github.com/pavithranarul/FluidAI",
    preview: "documents",
  },
  {
    number: "04",
    eyebrow: "Restaurant voice application",
    title: "Dinodial restaurant agent",
    description: "A restaurant booking application with AI voice calls, scheduled call handling and email confirmations. Built with a FastAPI backend and React interface.",
    tags: ["FastAPI", "React", "Gemini API", "APScheduler"],
    href: "https://github.com/pavithranarul/Dinodial-ai",
    preview: "voice",
  },
  {
    number: "05",
    eyebrow: "Cross-device prototype",
    title: "Connectivity Bridge",
    description: "A prototype that syncs the clipboard between a Mac and phones, and mirrors Android notifications. A Swift background service on macOS talks to a Flutter app over WebSockets, with Bluetooth LE for discovery.",
    tags: ["Flutter", "Swift", "Kotlin", "WebSockets"],
    href: "https://github.com/pavithranarul/connectivity_bridge",
    preview: "sync",
  },
  {
    number: "06",
    eyebrow: "Medical imaging · deep learning",
    title: "ECG heart disease detection",
    description: "Upload an ECG image and a ResNet50 + LSTM model classifies it as arrhythmia, HMI, MI or normal. Gemini adds an explanation, and the Flask API returns a downloadable PDF report to a React frontend.",
    tags: ["Python", "TensorFlow", "Flask", "Gemini API", "React"],
    href: "https://github.com/pavithranarul/Cardio_vascular_disease-backend",
    preview: "ecg",
  },
  {
    number: "07",
    eyebrow: "Full-stack assessment project",
    title: "WorkSphere",
    description: "An employee-record management app built for a full-stack assessment. Create, view, edit and delete records through a React interface, Express API and MongoDB.",
    tags: ["React", "JavaScript", "Express", "MongoDB"],
    href: "https://github.com/pavithranarul/Work-Sphere",
    preview: "workspace",
  },
  {
    number: "08",
    eyebrow: "Android application",
    title: "Octagram Chat",
    description: "A one-to-one chat app for Android with phone-number login, username search, recent chats and push notifications, built on Firebase. The OTP flow is still being refined.",
    tags: ["Java", "Android", "Firebase"],
    href: "https://github.com/pavithranarul/AndroidDevelopment",
    preview: "chat",
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
    description: "Django REST Framework in TrackFlow, FastAPI services in FluidAI and Dinodial; asynchronous calls and retry handling in Failo.",
    skills: ["Python", "Django", "FastAPI", "AsyncIO", "REST APIs", "pytest"],
  },
  {
    label: "AI & automation",
    description: "An ECG classifier built with TensorFlow, Gemini-powered document generation, voice-agent integration and scheduled background tasks.",
    skills: ["TensorFlow", "Gemini API", "LLM APIs", "python-docx", "APScheduler"],
  },
  {
    label: "Data & databases",
    description: "SQL in Java web development, MongoDB in WorkSphere, and data preparation during my ML internship.",
    skills: ["SQL", "MySQL", "MongoDB", "Pandas", "scikit-learn"],
  },
  {
    label: "Web & development tools",
    description: "React and TypeScript interfaces, Flutter and Android apps, a foundation in Java and Spring Boot, and Git for version control.",
    skills: ["React", "TypeScript", "JavaScript", "Flutter", "Firebase", "Java", "Spring Boot", "Git", "Docker"],
  },
];
