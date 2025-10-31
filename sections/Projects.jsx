"use client";
import React, { Fragment, useState, useRef, useEffect } from "react";
import Link from "next/link";
import { CgWebsite } from "react-icons/cg";
import { HiExternalLink } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

import { ProjectsData } from "@/constants";
import { Button } from "@/components/ui/button";

const Project = () => {
  const [activeProject, setActiveProject] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();
  const gridRef = useRef();

  useEffect(() => {
    if (sectionRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => setIsVisible(entry.isIntersecting),
        { rootMargin: "-100px" }
      );
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <Fragment>
      <section
        className="relative py-24 px-6 sm:px-10 md:px-20 lg:px-32 transition-colors duration-700
                   bg-gradient-to-b from-zinc-200/60 via-zinc-100/60 to-zinc-200/60 
                   dark:from-zinc-900/80 dark:via-zinc-800/80 dark:to-zinc-900/80
                   backdrop-blur-2xl"
        id="project"
        ref={sectionRef}
      >
        {/* Header */}
        <h2 className="flex items-center justify-center gap-3 text-4xl font-bold text-center mb-12 text-[#c72c6c] dark:text-[#07d0e5]">
          <CgWebsite className="text-4xl" /> Projects
        </h2>

        {/* Project Grid */}
        <motion.div
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          ref={gridRef}
          transition={{ duration: 0.7 }}
        >
          {ProjectsData.map((project, index) => (
            <motion.div
              className="group relative rounded-2xl overflow-hidden border border-white/20 dark:border-zinc-700 
                         bg-white/70 dark:bg-white/10 backdrop-blur-lg shadow-lg hover:shadow-2xl 
                         transition-all duration-500 flex flex-col"
              key={project.projectName}
              whileHover={{ scale: 1.03 }}
            >
              {/* Project Image */}
              <div
                className="relative h-48 bg-cover bg-center rounded-t-2xl"
                style={{
                  backgroundImage: `url(${project?.projectImage?.imageUrl || ""})`,
                }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500 flex items-end justify-center p-3">
                  <h3 className="text-white font-bold text-lg text-center">
                    {project.projectName}
                  </h3>
                </div>

                {/* Hover Overlay with Buttons */}
                <div
                  className={`absolute inset-0 flex justify-center items-center gap-6 transition-all duration-500 ${
                    activeProject === project.projectName
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {project.liveUrl && (
                    <Link
                      className="p-3 rounded-full bg-gradient-to-r from-[#c72c6c] to-[#ff5f8f] text-white hover:scale-110 transition"
                      href={project.liveUrl}
                      target="_blank"
                    >
                      <HiExternalLink size={20} />
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      className="p-3 rounded-full bg-gradient-to-r from-[#07d0e5] to-[#4ff0ff] text-white hover:scale-110 transition"
                      href={project.githubUrl}
                      target="_blank"
                    >
                      <BsGithub size={20} />
                    </Link>
                  )}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 px-4 pt-4 pb-2">
                {project.techs.map((tech) => (
                  <span
                    className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-sm"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* See More */}
              <div className="flex justify-center mt-auto mb-4">
                <Button
                  className="rounded-lg font-semibold hover:bg-gradient-to-r from-[#c72c6c] to-[#07d0e5] hover:text-white transition-all duration-300"
                  variant="outline"
                >
                  <Link href="https://github.com/ashokmanoj" target="_blank">
                    See More
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </Fragment>
  );
};

export default Project;
