"use client";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { MdWork } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { BsArrowDownCircle } from "react-icons/bs";

import { ExperienceData } from "@/constants/ExperienceData";

const Experience = () => {
  const [desc, setDesc] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "-100px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) boxRef.current?.classList.add("animate-fadeIn");
  }, [isVisible]);

  return (
    <Fragment>
      <section
        className="relative py-16 px-6 sm:px-10 md:px-20 lg:px-40 transition-colors duration-700
                   bg-gradient-to-b from-zinc-900/90 via-zinc-800/80 to-zinc-900/90 
                   dark:from-white/80 dark:via-gray-100/70 dark:to-gray-50/80
                   backdrop-blur-2xl text-gray-100 dark:text-gray-900"
        id="experience"
        ref={sectionRef}
      >
        {/* Glass overlay for glossy inverted effect */}
        <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-3xl pointer-events-none" />

        {/* Title */}
        <h2 className="relative flex items-center justify-center gap-3 text-4xl font-bold text-center mb-12 text-[#c72c6c] dark:text-[#07d0e5] z-10">
          <MdWork /> Experience
        </h2>

        {/* Timeline Container */}
        <div
          className="relative z-10 before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-1/2 
                     before:w-[2px] before:bg-gradient-to-b before:from-[#c72c6c]/50 before:to-[#07d0e5]/50"
          ref={boxRef}
        >
          {ExperienceData.map((exp, index) => (
            <div
              className={`relative flex flex-col md:flex-row items-center mb-12 ${
                index % 2 === 0
                  ? "md:flex-row-reverse md:justify-start"
                  : "md:justify-end"
              }`}
              key={index}
            >
              {/* Timeline Dot */}
              <span className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-[#c72c6c] to-[#07d0e5] shadow-lg animate-pulse z-10" />

              {/* Experience Card */}
              <div
                className={`relative w-full md:w-[46%] cursor-pointer p-6 rounded-2xl border border-white/20 dark:border-zinc-300/30 
                            shadow-md hover:shadow-xl transition-all duration-300
                            bg-white/10 dark:bg-white/60 backdrop-blur-xl
                            hover:scale-[1.02] ${
                              index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                            }`}
                onClick={() =>
                  setDesc(desc === exp.description ? "" : exp.description)
                }
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between gap-2">
                  <p className="text-xl md:text-2xl font-bold text-[#c72c6c] dark:text-[#07d0e5]">
                    {exp.companyName}
                  </p>
                  <p className="flex items-center gap-2 text-blue-400 dark:text-blue-600 text-sm">
                    <ImLocation /> {exp.location}
                  </p>
                </div>

                {/* Role & Duration */}
                <div className="flex justify-between gap-2 mt-1 text-gray-300 dark:text-gray-600 text-sm">
                  <p className="font-semibold">{exp.role}</p>
                  <p>{exp.fromTo}</p>
                </div>

                {/* Description */}
                <p
                  className={`mt-2 text-justify overflow-hidden transition-all duration-500 ${
                    desc === exp.description
                      ? "max-h-48 opacity-100"
                      : "max-h-0 opacity-0"
                  } text-gray-300 dark:text-gray-700`}
                >
                  {exp.description}
                </p>

                {/* Expand Arrow */}
                <div className="flex justify-center mt-3">
                  <BsArrowDownCircle
                    className={`text-[#c72c6c] dark:text-[#07d0e5] transition-transform duration-500 ${
                      desc === exp.description ? "rotate-180" : ""
                    }`}
                    size={22}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Experience;
