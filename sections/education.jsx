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
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="py-16 px-6 sm:px-10 md:px-20 lg:px-40  dark:bg-zinc-900"
    >
      <h2 className="flex items-center justify-center gap-3 text-4xl font-bold text-center text-zinc-800 dark:text-zinc-100 mb-12">
        <IoSchoolSharp className="text-blue-500" />
        Education
      </h2>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {EducationData.map((edu) => (
          <div
            key={edu.name}
            className="flex flex-col md:flex-row bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="relative w-full md:w-48 h-48 md:h-auto">
              <Image
                src={edu.image}
                alt={edu.name}
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-center p-4 gap-2">
              <h3 className="text-xl font-semibold text-red-600 dark:text-red-400">
                {edu.name}
              </h3>
              <p className="text-zinc-700 dark:text-zinc-300">
                {edu.schoolOrCollege}
              </p>
              <p className="text-sm text-blue-600 dark:text-blue-400">
                {edu.fromTo} &nbsp; | &nbsp; {edu.statusOrPrecentage}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
