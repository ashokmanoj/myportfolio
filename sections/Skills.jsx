"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaLaptopCode } from "react-icons/fa";

import { TechStackData } from "@/constants/SkillsData";

const TechStack = () => {
  const [isClient, setIsClient] = useState(false);
  const [section, setSection] = useState("Advance");
  const [sectionData, setSectionData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const techStackRef = useRef();
  const techBoxesRef = useRef();
  const buttonsRef = useRef();

  useEffect(() => {
    setIsClient(true);

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "-150px" }
    );

    if (techStackRef.current) observer.observe(techStackRef.current);
  }, []);

  useEffect(() => {
    const selectedSection = TechStackData.find((data) => data[section]);
    setSectionData(selectedSection ? selectedSection[section] : []);

    setTimeout(() => {
      techBoxesRef.current?.classList.add("opacity-100", "translate-y-0");
    }, 300);
  }, [section]);

  if (!isClient) return null;

  return (
    <section
      className="relative p-10 sm:p-12 md:p-16 overflow-hidden rounded-2xl shadow-lg 
      bg-white/40 dark:bg-gray-900/60 backdrop-blur-md 
      border border-gray-200/30 dark:border-gray-700/50
      text-gray-900 dark:text-white transition-all duration-700"
      id="techStack"
      ref={techStackRef}
    >
      {/* Title */}
      <h2 className="flex items-center justify-center gap-3 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#c72c6c] to-[#07d0e5] mb-6">
        <FaLaptopCode className="text-[#c72c6c] dark:text-[#07d0e5]" />
        Tech Stack
      </h2>

      {/* Subtext */}
      <p className="text-center text-gray-600 dark:text-gray-400 text-lg mb-8">
        Tools & technologies I confidently use to build performant, elegant web apps
      </p>

      {/* Section Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mb-10" ref={buttonsRef}>
        {["Advance", "Good", "Familiar"].map((level) => (
          <button
            className={`px-5 py-2 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 shadow-md
              ${
                section === level
                  ? "bg-gradient-to-r from-[#c72c6c] to-[#07d0e5] text-white scale-105"
                  : "bg-gray-200/70 dark:bg-gray-800/70 text-gray-800 dark:text-gray-200 hover:scale-105 hover:bg-gray-300/80 dark:hover:bg-gray-700/80"
              }`}
            key={level}
            onClick={() => {
              setSection(level);
              techBoxesRef.current?.classList.remove("opacity-100", "translate-y-0");
            }}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Tech Stack Grid */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 
        p-5 opacity-0 translate-y-5 transition-all duration-700"
        ref={techBoxesRef}
      >
        {sectionData.map((tech, index) => (
          <div
            className="flex flex-col items-center justify-center p-5 rounded-xl 
            bg-white/50 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-300/40 dark:border-gray-700/50
            shadow-md hover:shadow-xl hover:scale-105 transition-all duration-500 group"
            key={tech.name + index}
          >
            <div className="text-5xl group-hover:text-[#07d0e5] transition-all duration-300">
              {tech.icon}
            </div>
            <p className="mt-3 text-lg font-semibold group-hover:text-[#c72c6c] dark:group-hover:text-[#07d0e5] transition">
              {tech.name}
            </p>
          </div>
        ))}
      </div>

      {/* Decorative gradient lines */}
      <div className="absolute inset-0 -z-10 opacity-30 bg-gradient-to-tr from-[#c72c6c] via-transparent to-[#07d0e5]" />
    </section>
  );
};

export default TechStack;
