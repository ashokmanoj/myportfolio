"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaBlackTie, FaUserCheck } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { IoPerson } from "react-icons/io5";
import { BsMenuAppFill } from "react-icons/bs";

const About = () => {
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const aboutRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsAboutVisible(entry.isIntersecting),
      { rootMargin: "-100px" }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
  }, []);

  return (
    <section
      className="
        relative overflow-hidden rounded-2xl my-16
        bg-gradient-to-br from-[#ffffff] via-[#f9fafb] to-[#ecf0f3]
        dark:from-[#0a0a0a] dark:via-[#111] dark:to-[#1a1a1a]
        text-gray-900 dark:text-gray-100
        shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_rgba(255,255,255,0.05)]
        transition-all duration-700
        max-w-6xl mx-auto p-6 sm:p-10
      "
      id="about"
      ref={aboutRef}
    >
      {/* Section Header */}
      <h2
        className="
          flex items-center justify-center gap-3 mb-10
          text-3xl sm:text-4xl font-extrabold text-transparent 
          bg-clip-text bg-gradient-to-r from-[#c72c6c] to-[#07d0e5]
        "
      >
        <FaUserCheck className="text-[#c72c6c] dark:text-[#07d0e5]" />
        About Me
      </h2>

      {/* Main Content */}
      <div
        className={`
          flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16
          transition-all duration-700
          ${isAboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        {/* Profile Image */}
        <div className="flex justify-center items-center w-full md:w-auto">
          <div
            className="
              relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden
              shadow-lg shadow-gray-400/40 dark:shadow-gray-900/70
              ring-4 ring-[#c72c6c]/30 dark:ring-[#07d0e5]/40
              hover:scale-105 hover:ring-[#c72c6c]/50 dark:hover:ring-[#07d0e5]/50
              transition-transform duration-500
            "
          >
            <Image
              alt="Profile photo"
              className="object-cover"
              fill
              src="/images/myprofile_photo.png"
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="flex-1 max-w-2xl text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#c72c6c] dark:text-[#07d0e5]">
            Manoj H. A
          </h3>
          <p className="mt-2 text-lg font-semibold text-[#c72c6c]/80 dark:text-[#07d0e5]/80">
            Frontend Developer
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            {[
              { title: "Location", value: "Hassan, Karnataka", icon: <ImLocation /> },
              { title: "Age", value: "23", icon: <IoPerson /> },
              { title: "Experience", value: "2 Years", icon: <FaBlackTie /> },
              { title: "Projects", value: "3+", icon: <BsMenuAppFill /> },
            ].map((item, index) => (
              <div
                className="
                  flex flex-col items-center justify-center gap-2 p-4 rounded-xl
                  bg-white/70 dark:bg-gray-900/60
                  shadow-md hover:shadow-lg hover:scale-105
                  border border-gray-200 dark:border-gray-800
                  transition-all duration-300
                "
                key={index}
              >
                <div className="text-2xl text-[#c72c6c] dark:text-[#07d0e5]">
                  {item.icon}
                </div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="mt-8 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify md:text-left">
            Passionate and results-driven ReactJS developer with a strong foundation
            in MERN Stack and Next.js. I specialize in crafting seamless, responsive,
            and engaging user interfaces that combine design and performance. 
            I’m deeply motivated to contribute innovative ideas, solve complex challenges,
            and continuously evolve in the world of modern web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
