"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { TechStackData } from "@/constants/SkillsData";

const TechStack = () => {
  const [isClient, setIsClient] = useState(false);
  const [section, setSection] = useState("Advance");
  const [sectionData, setSectionData] = useState([]);
  const [isTechStackVisible, setIsTechStackVisible] = useState(false);
  const techStackRef = useRef();
  const techBoxesRef = useRef();
  const buttonsRef = useRef();

  useEffect(() => {
    setIsClient(true); // Prevents hydration error

    const observer = new IntersectionObserver(
      ([entry]) => setIsTechStackVisible(entry.isIntersecting),
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

  if (!isClient) return null; // Fixes hydration issues

  return (
    <section
      ref={techStackRef}
      id="techStack"
      className="p-10 overflow-hidden text-gray-900 transition-all rounded-lg shadow-lg bg-neutral dark:bg-gray-900 dark:text-white shadow-gray-300 dark:shadow-gray-900"
    >
      {/* Title */}
      <h2 className="flex items-center justify-center gap-3 text-4xl font-bold text-[#c72c6c] dark:text-[#07d0e5]">
        <FaLaptopCode className="text-[#c72c6c] dark:text-[#07d0e5]" />
        Tech Stack
      </h2>

      {/* Section Buttons */}
      <div
        ref={buttonsRef}
        className="flex justify-center gap-4 mt-6"
      >
        {["Advance", "Good", "Familiar"].map((level) => (
          <button
            key={level}
            className={`w-32 md:w-40 py-2 rounded-lg font-semibold transition-all duration-300 ${
              section === level
                ? "bg-[#c72c6c] text-white shadow-md"
                : "bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-white"
            }`}
            onClick={() => {
              setSection(level);
              techBoxesRef.current?.classList.remove("opacity-100", "translate-y-0");
            }}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Tech Stack Display */}
      <div
        ref={techBoxesRef}
        className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-8 p-5 opacity-0 translate-y-5 transition-all duration-700`}
      >
        {sectionData.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center justify-center p-4 transition-transform duration-300 bg-white border rounded-lg shadow-md dark:bg-gray-800 hover:scale-105"
          >
            <p className="text-4xl">{tech.icon}</p>
            <p className="mt-2 text-lg font-semibold">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
