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
  const profileRef = useRef();
  const infoRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsAboutVisible(entry.isIntersecting),
      { rootMargin: "-100px" }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
  }, []);

  return (
    <section
      ref={aboutRef}
      id="about"
      className="p-10 overflow-hidden text-gray-800 rounded-lg shadow-lg bg-natural dark:bg-black dark:text-white shadow-gray-300 dark:shadow-gray-900"
    >
      {/* Header */}
      <h2 className="flex items-center justify-center gap-3 text-4xl font-bold text-[#c72c6c] dark:text-[#07d0e5]">
        <FaUserCheck /> About Me
      </h2>

      {/* Content */}
      <div className="flex flex-col justify-center gap-10 mt-10  md:flex-row">
        {/* Profile Image */}
        <Image
          ref={profileRef}
          alt="Profile Image"
          src="/images/myprofile_photo.png"
          width={350}
          height={350}
          className={`shadow-xl mt-30 rounded-lg object-cover transition-all duration-700 ${
            isAboutVisible ? "opacity-100 scale-100" : "opacity-0 scale-90" 
          }`}
          style={{ filter: isAboutVisible ? "none" : "blur(5px)",
          WebkitFilter: isAboutVisible ? "none" : "blur(5px)", height: "350px",
        justifyContent: "center", marginTop: "130px" }}
        />

        {/* Info Section */}
        <div
          ref={infoRef}
          className={`text-lg transition-opacity duration-700 ${
            isAboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          } max-w-2xl text-center md:text-left`}
        >
          <p className="text-4xl font-bold text-[#c72c6c] dark:text-[#07d0e5] flex items-center justify-center">
            Manoj.H.A
          </p>
          <p className="mt-2 text-lg font-semibold text-red-500 flex items-center justify-center">Junior Software Developer</p>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-5 mt-5">
            {[
              { title: "Location", value: "Hassan, Karnataka", icon: <ImLocation /> },
              { title: "Age", value: "23", icon: <IoPerson /> },
              { title: "Experience", value: "2 Years Experience", icon: <FaBlackTie /> },
              { title: "Projects", value: "3", icon: <BsMenuAppFill /> },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 transition-transform duration-300 bg-white rounded-lg shadow-md dark:bg-gray-900 hover:scale-105"
              >
                <p className="text-[#c72c6c] dark:text-[#07d0e5] font-semibold">
                  {item.title}
                </p>
                <div className="text-xl text-gray-500 dark:text-gray-400">{item.icon}</div>
                <p className="text-gray-700 dark:text-gray-300">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="mt-6 leading-relaxed text-justify text-gray-700 dark:text-gray-300">
            Passionate and driven ReactJS developer with a strong foundation in MERN Stack
            and NextJS. Dedicated to creating dynamic and user-centric web applications.
            Eager to contribute my expertise in frontend frameworks, modern UI/UX design,
            and responsive development to a forward-thinking team, while continuously
            learning and growing in the ever-evolving world of web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
