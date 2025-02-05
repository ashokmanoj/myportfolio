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
      <section id='home' className='relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          ref={homeRef}
          className='relative flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl p-6 md:p-12 bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-xl shadow-lg border border-white/20'
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='text-center md:text-left'
            ref={introRef}
          >
            <p className='text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100'>Hi There !</p>
            <p className='text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 dark:text-white'>
              I&apos;m a full stack
              <span className='text-[#c72c6c] dark:text-[#07d0e5]'> Developer |</span>
            </p>
            <div className='flex flex-col items-center sm:flex-row justify-center md:justify-start gap-3 mt-6'>
              <Link
                className='px-3 py-1.5 text-base font-semibold text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-lg shadow-lg hover:scale-105 transition'
                href={'#getInTouch'}
              >
                Hire me
              </Link>
              <Link
                className='px-3 py-1.5 text-base font-semibold border border-red-400 rounded-lg text-gray-900 dark:text-white hover:bg-red-500 transition'
                href='https://drive.google.com/file/d/1mh9pvt8hL9GLbPWWC7cKdlR0PAsl1r5Y/view?usp=sharing'
                target='_blank'
              >
                Download CV
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='w-[200px] h-[300px] sm:w-[240px] sm:h-[380px] md:w-[400px] md:h-[450px] rounded-xl overflow-hidden shadow-lg border-2 border-[#07d0e5] bg-cover bg-no-repeat flex items-center justify-center'
            ref={profileRef}
            style={{ backgroundImage: "url(/images/homepage_image.png)", backgroundPosition: "center" }}
          />
        </motion.div>
      </section>
    </Fragment>
  );
};

export default Intro;