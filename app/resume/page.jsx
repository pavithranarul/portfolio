"use client";

import {
    FaPython,
    FaDatabase,
    FaServer,
    FaBrain,
    FaMicrochip,
    FaCodeBranch,
    FaCloud,
    FaLaptopCode,
    FaGithub,
    FaReact,
  } from "react-icons/fa";
import { SiFastapi, SiPandas, SiDuckdb, SiTensorflow, SiLinux, SiJavascript } from "react-icons/si";
// import { SiTailwindcss, SiNodedotjs } from "react-icons/si";

// about
const about = {
  title: "About Me",
  description:
    "I’m a passionate backend developer who transitioned from Java Full Stack to Python and now specialize in building AI-powered products. My work focuses on intelligent automation, FastAPI-based backend systems, and healthcare/IoT integrations that turn complex data into smart, scalable solutions.",
  info: [
    {
      fieldName: "Name ",
      fieldValue: "Pavithran Arul",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 7708512081",
    },
    {
      fieldName: "Experience ",
      fieldValue: "9+ Months",
    },
    {
      fieldName: "Email ",
      fieldValue: "pavithranarul7@gmail.com",
    },
  ],
};

// experience
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "my experience",
  description:
    "I began my journey as a Java Full Stack developer and evolved into a Python backend engineer specializing in AI-powered products, intelligent automation, and IoT-driven solutions.",
  items: [
    {
      company: "Health Care System",
      position: "Python Backend & AI Engineer",
      duration: "2024 - Present",
      details:
        "Developing FastAPI-based microservices and AI-driven risk assessment systems for healthcare data automation.",
    },
    {
      company: "Healthcare Intelligence Division",
      position: "Medical Image & Data Analyst",
      duration: "2023 - 2024",
      details:
        "Worked on medical imaging datasets, data preprocessing, and model pipelines for clinical decision support.",
    },
    {
      company: "Freelance / Independent Projects",
      position: "IoT & Automation Developer",
      duration: "2022 - 2023",
      details:
        "Designed IoT-based monitoring systems integrated with real-time FastAPI dashboards and automation triggers.",
    },
    {
      company: "Shiash Info Tech",
      position: "Java Full Stack Developer Intern",
      duration: "2021 - 2022",
      details:
        "Built full stack web applications using Java, Spring Boot, MySQL, and front-end frameworks, focusing on RESTful APIs and responsive UI.",
    },
  ],
};

// education
const education = {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description:
      "My educational background and technical training have helped me build a strong foundation in computer science, software engineering, and AI-driven system design.",
    items: [
      {
        institution: "Annamalai University, Chidambaram",
        degree: "Bachelor of Engineering in Computer Science",
        duration: "2021 - 2025",
      },
      {
        institution: "Shiash Info Tech, Sholinganallur",
        degree: "Java Full Stack Development Training & Internship",
        duration: "2022 - 2023",
      },
      {
        institution: "Independent Learning & Projects",
        degree: "Python, FastAPI & AI System Development",
        duration: "2023 - Present",
      },
    ],
  };

// skills
const skills = {
    title: "My Skills",
    description:
      "I specialize in backend engineering, AI model integration, and data automation. My skill set bridges Python, FastAPI, and AI-driven solutions with experience in IoT, data analytics, and cloud systems.",
    skillList: [
      {
        icon: <FaPython />,
        name: "Python",
      },
      {
        icon: <SiFastapi />,
        name: "FastAPI",
      },
      {
        icon: <FaBrain />,
        name: "AI & LLM Integration",
      },
      {
        icon: <SiDuckdb />,
        name: "DuckDB",
      },
      {
        icon: <SiPandas />,
        name: "Pandas / Data Processing",
      },
      {
        icon: <FaDatabase />,
        name: "SQL / Data Modeling",
      },
      {
        icon: <FaServer />,
        name: "API & Microservices",
      },
      {
        icon: <FaMicrochip />,
        name: "IoT Systems",
      },
      {
        icon: <SiTensorflow />,
        name: "TensorFlow / Model Integration",
      },
      {
        icon: <FaCloud />,
        name: "Google Cloud Storage",
      },
      {
        icon: <SiLinux />,
        name: "Linux / CLI Tools",
      },
      {
        icon: <FaCodeBranch />,
        name: "Git / Version Control",
      },
    //   {
    //     icon: <FaReact />,
    //     name: "React (Frontend Integration)",
    //   },
      {
        icon: <FaGithub />,
        name: "GitHub / CI Workflows",
      },
    //   {
    //     icon: <SiJavascript />,
    //     name: "JavaScript / Node.js",
    //   },
    ],
  };

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex  gap-3 flex-col justify-start lg:text-left">
                            <div className="text-white/60">{item.details}</div>
                            <div className="flex items-center gap-2 justify-center sm:justify-start">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <div className="text-white/60">
                                {item.company}
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
