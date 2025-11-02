"use client";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { MdWork } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { BsArrowDownCircle } from "react-icons/bs";
import { motion } from "framer-motion";

import { ExperienceData } from "@/constants/ExperienceData";

const Experience = () => {
  const [desc, setDesc] = useState("");
  const sectionRef = useRef(null);

  return (
    <Fragment>
      <section
        className="
          relative py-20 px-6 sm:px-10 md:px-20 lg:px-40 
          overflow-hidden transition-all duration-700
          bg-gradient-to-br from-gray-50 via-white to-gray-200 
          dark:from-[#0a0a0a] dark:via-[#111] dark:to-[#1b1b1b]
          text-gray-900 dark:text-gray-100
        "
        id="experience"
        ref={sectionRef}
      >
        {/* Glossy overlay for dynamic light reflection */}
        <div className="absolute inset-0 bg-white/10 dark:bg-white/5 backdrop-blur-2xl pointer-events-none" />

        {/* Title */}
        <h2
          className="relative text-4xl font-extrabold text-center mb-16 flex justify-center items-center gap-3
                     text-[#c72c6c] dark:text-[#07d0e5] z-10"
        >
          <MdWork size={36} /> Experience
        </h2>

        {/* Timeline line */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#c72c6c] via-[#ff5fa2] to-[#07d0e5] rounded-full shadow-[0_0_10px_rgba(199,44,108,0.4)]" />

          <div className="flex flex-col gap-16 relative z-10">
            {ExperienceData.map((exp, index) => (
              <motion.div
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0
                    ? "md:items-end md:text-right"
                    : "md:flex-row-reverse md:items-end md:text-left"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                key={index}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                {/* Dot in center */}
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-[#c72c6c] to-[#07d0e5] shadow-[0_0_20px_#c72c6c80] animate-pulse" />

                {/* Experience Card */}
                <motion.div
                  className={`
                    relative w-full md:w-[45%] mt-8 md:mt-0 
                    p-6 rounded-2xl border border-gray-300/40 dark:border-zinc-700/50
                    bg-white/60 dark:bg-zinc-800/60 
                    shadow-lg hover:shadow-[0_0_25px_rgba(199,44,108,0.25)]
                    backdrop-blur-xl transition-all duration-500
                    ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}
                  `}
                  onClick={() =>
                    setDesc(desc === exp.description ? "" : exp.description)
                  }
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <h3 className="text-xl md:text-2xl font-bold text-[#c72c6c] dark:text-[#07d0e5]">
                      {exp.companyName}
                    </h3>
                    <p className="flex items-center gap-2 text-blue-500 text-sm sm:text-base">
                      <ImLocation /> {exp.location}
                    </p>
                  </div>

                  <div className="flex justify-between mt-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    <p className="font-semibold">{exp.role}</p>
                    <p>{exp.fromTo}</p>
                  </div>

                  <p
                    className={`mt-3 text-gray-700 dark:text-gray-300 text-justify transition-all duration-500 overflow-hidden ${
                      desc === exp.description
                        ? "max-h-48 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {exp.description}
                  </p>

                  <div className="flex justify-center mt-3">
                    <BsArrowDownCircle
                      className={`text-[#c72c6c] dark:text-[#07d0e5] transition-transform duration-500 ${
                        desc === exp.description ? "rotate-180" : ""
                      }`}
                      size={24}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Experience;
