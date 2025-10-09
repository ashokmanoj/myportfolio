"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

const Intro = () => {
  const [isHome, setIsHome] = useState(false);

  const homeRef = useRef();
  const introRef = useRef();
  const profileRef = useRef();

  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (homeRef.current) {
      const homeObserver = new IntersectionObserver(
        ([homeEntry]) => {
          setIsHome(homeEntry.isIntersecting);
        },
        {
          rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
        }
      );

      homeObserver.observe(homeRef.current);

      if (isHome) {
        profileRef.current.classList.add("slide-in");
        introRef.current.classList.add("slide-in");
      } else {
        profileRef.current.classList.remove("slide-in");
        introRef.current.classList.remove("slide-in");
      }
    }
  }, [homeRef, isHome]);

  return (
    <Fragment>
      <Head>
        <title>Manoj&apos;s Portfolio</title>
      </Head>

      <section
        className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 dark:shadow-gray-900"
        id="home"
      >
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="relative flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl p-6 md:p-12 bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-xl shadow-lg border border-white/20"
          initial={{ opacity: 0, y: 50 }}
          ref={homeRef}
          transition={{ duration: 0.8 }}
        >
          {/* 🧠 Text Section */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="text-center md:text-left mb-6 md:mb-0 w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            ref={introRef}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Hi There !
            </p>

            <p className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 dark:text-white leading-snug">
              I&apos;m a Frontend{" "}
              <span className="text-[#c72c6c] dark:text-[#07d0e5]">
                Developer |
              </span>
            </p>

            <p className="mt-3 text-sm sm:text-base md:text-lg font-medium text-gray-900 dark:text-gray-100 max-w-[90%] md:max-w-none">
              Result-oriented Front-end developer with 2+ years of experience
              building responsive, scalable, and performant web applications
              using <strong>React.js</strong>, <strong>Next.js</strong>, and{" "}
              <strong>Tailwind CSS</strong>.
            </p>

            <div className="flex flex-col items-center sm:flex-row justify-center md:justify-start gap-3 mt-6">
              <Link
                className="px-3 py-1.5 text-base font-semibold text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-lg shadow-lg hover:scale-105 transition"
                href={"#getInTouch"}
              >
                Hire me
              </Link>
              <Link
                className="px-3 py-1.5 text-base font-semibold border border-red-400 rounded-lg text-gray-900 dark:text-white hover:bg-red-500 transition"
                href="https://drive.google.com/file/d/1mh9pvt8hL9GLbPWWC7cKdlR0PAsl1r5Y/view?usp=sharing"
                target="_blank"
              >
                Download CV
              </Link>
            </div>
          </motion.div>

          {/* 🧩 Profile Image */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="w-[200px] h-[300px] sm:w-[240px] sm:h-[380px] md:w-[400px] md:h-[450px] rounded-xl overflow-hidden shadow-lg border-2 border-[#07d0e5] bg-cover bg-no-repeat flex items-center justify-center mb-6 md:mb-0"
            initial={{ opacity: 0, x: 50 }}
            ref={profileRef}
            style={{
              backgroundImage: "url(/images/homepage_image.png)",
              backgroundPosition: "center",
            }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Gradient shadow at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-zinc-300 dark:from-zinc-900 to-transparent pointer-events-none" />
      </section>
    </Fragment>
  );
};

export default Intro;
