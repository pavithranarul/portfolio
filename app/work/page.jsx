"use client";

import { delay, motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "AI & Backend",
    title: "Healthcare AI Automation System",
    organization: "Carescribe",
    description:
      "Developed a FastAPI-based backend system for automating healthcare workflows, including transcription structuring, medication dosage analysis, and AI-powered clinical data insights.",
    stack: [
      { name: "Python" },
      { name: "FastAPI" },
      { name: "Pydantic" },
      { name: "Gemini / GPT" },
      { name: "DuckDB" },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "AI Integration",
    title: "Drug Interaction Risk Assessment API",
    organization: "Carescribe",
    description:
      "Built an intelligent API using Google Gemini to classify and assess drug interaction risk levels from patient prescriptions and clinical notes.",
    stack: [
      { name: "Python" },
      { name: "FastAPI" },
      { name: "Gemini API" },
      { name: "Pandas" },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Medical AI",
    title: "ECG Image Classification System",
    organization: "Independent Project",
    description:
      "Developed a deep learning–powered ECG classification system to automatically identify cardiac patterns from ECG image data. The model assists clinicians by highlighting potential abnormalities and reducing manual diagnostic effort.",
    // highlights: [
    //   "Built and fine-tuned a CNN model for ECG image pattern detection and classification",
    //   "Integrated TensorFlow-based inference pipeline into a FastAPI backend for real-time predictions",
    //   "Automated preprocessing of ECG images, including denoising and normalization for model consistency",
    // ],
    stack: [
      { name: "Python" },
      { name: "TensorFlow" },
      { name: "FastAPI" },
      { name: "OpenCV" },
      { name: "NumPy" },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "IoT",
    title: "Smart Cart Monitoring System",
    organization: "Independent Project",
    description:
      "Developed an IoT-based system that streams cart data to a FastAPI backend for real-time monitoring and alerts.",
    stack: [
      { name: "Python" },
      { name: "FastAPI" },
      { name: "MQTT" },
      { name: "IoT Devices" },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },

  {
    num: "05",
    category: "Full Stack",
    title: "Java Full Stack Web Application",
    organization: "Independent Project",
    description:
      "Developed a full-stack web application during my internship using Java, Spring Boot, MySQL, and a responsive front-end framework for dynamic data management.",
    stack: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "MySQL" },
      { name: "HTML / CSS" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0x"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-6xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* project organization */}
              <p className="text-white/60">{project.organization}</p>
              {/* project highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <ul className="flex gap-4">
                  {project.highlights.map((item, index) => {
                    return (
                      <li key={index} className="text-xl text-accent">
                        {item}
                      </li>
                    );
                  })}
                </ul>
              )}
              {/* project stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              {project.organization !== "Carescribe" && (
                <div className="flex items-center gap-4">
                  {/* live project button */}
                  <Link
                    href={project.live || "#"}
                    onClick={(e) => !project.live && e.preventDefault()}
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  {/* github project button */}
                  <Link
                    href={project.github || "#"}
                    onClick={(e) => !project.github && e.preventDefault()}
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill={true}
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
