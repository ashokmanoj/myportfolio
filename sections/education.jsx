"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IoSchoolSharp } from "react-icons/io5";

import { EducationData } from "@/constants/EducationData";

const Education = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative py-20 px-6 sm:px-10 md:px-20 lg:px-40 bg-gradient-to-b from-amber-50 to-white dark:from-gray-950 dark:to-gray-900 transition-all duration-700"
      id="education"
      ref={sectionRef}
    >
      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="flex items-center justify-center gap-3 text-4xl font-extrabold text-indigo-700 dark:text-amber-400">
          <IoSchoolSharp className="text-amber-500 dark:text-indigo-400" />
          Education
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg mt-2">
          My academic background that built my foundation in tech & creativity.
        </p>
      </div>

      {/* Timeline Line */}
      <div className="relative max-w-5xl mx-auto before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-5 sm:before:left-1/2 before:w-[3px] before:bg-gradient-to-b from-amber-400 to-indigo-500 dark:from-amber-300 dark:to-indigo-400">
        {EducationData.map((edu, index) => (
          <div
            className={`relative mb-12 flex flex-col sm:flex-row items-center sm:items-start gap-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } ${index % 2 === 0 ? "sm:flex-row-reverse" : ""}`}
            key={edu.name}
          >
            {/* Connector Dot */}
            <div className="absolute left-[4px] sm:left-1/2 transform sm:-translate-x-1/2 w-5 h-5 bg-amber-400 dark:bg-indigo-500 rounded-full border-4 border-white dark:border-gray-800 shadow-md" />

            {/* Content Card */}
            <div
              className={"w-full sm:w-[48%] bg-white dark:bg-gray-800 shadow-md rounded-xl border border-gray-100 dark:border-gray-700 p-5 sm:p-6 hover:shadow-xl transition-transform hover:-translate-y-1 duration-500"}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="relative w-14 h-14 rounded-md overflow-hidden flex-shrink-0 shadow">
                  <Image
                    alt={edu.name}
                    className="object-cover"
                    fill
                    src={edu.image}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-700 dark:text-amber-400">
                    {edu.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {edu.schoolOrCollege}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap justify-between text-sm text-gray-700 dark:text-gray-300 mt-2">
                <span>{edu.fromTo}</span>
                <span className="font-semibold text-indigo-600 dark:text-amber-400">
                  {edu.statusOrPrecentage}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
