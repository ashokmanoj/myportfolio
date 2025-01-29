"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";

const Intro = () => {
  const [isHome, setIsHome] = useState(false);

  const homeRef = useRef();
  const introRef = useRef();
  const profileRef = useRef();

  // Intersection observer animation on scroll
  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    // Scroll Animation
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
        <title>Manoj&apos; Portfolio</title>
      </Head>
      <section id='home'>
        <div
          className='min-h-[100vh] overflow-x-hidden px-[20px] md:px-[110px] lg:px-[110px] pt-[60px] md:pt-0 md:flex items-center justify-between shadow-zinc-300 dark:shadow-zinc-700 shadow-sm'
          ref={homeRef}
        >
          <div
            className='translate-x-[-500px] transition-all duration-700 opacity-0'
            ref={introRef}
          >
            <p className='py-2 font-sans text-2xl font-semibold md:text-4xl'>
              Hi There !
            </p>
            {/* Profile Name */}
            <p className='py-2 font-sans text-2xl font-semibold md:text-4xl'>
              I&apos;m a full stack
              <span className='text-[#c72c6c] dark:text-[#07d0e5]'>
                {" "}
                Developer <span className='text-white'>|</span>
              </span>
            </p>
            <div className='flex gap-3 mt-5 md:mt-10'>
              {/* Hire Me Button */}
              <Link
                className='px-2 py-1 text-xl font-semibold text-white bg-red-400 rounded hover:bg-red-500'
                href={"#getInTouch"}
              >
                Hire me
              </Link>
              {/* Download CV Button */}
              <Link
                className='px-2 py-1 text-xl font-semibold border border-red-500 rounded hover:text-white hover:bg-red-500'
                href='https://drive.google.com/file/d/1mh9pvt8hL9GLbPWWC7cKdlR0PAsl1r5Y/view?usp=sharing'
                target='_blank'
              >
                Download CV
              </Link>
            </div>
          </div>

          {/* Image */}
          <div
            className={
              "translate-x-[500px] transition-all opacity-0 duration-700 w-[240px] h-[380px] md:w-[500px] md:h-[350px] bg-cover m-auto md:m-0 mt-[30px] md:mt-0 bg-no-repeat border-2 border-[#07d0e5] border-radius: 0.375rem "
            }
            ref={profileRef}
            style={{ backgroundImage: "url(/images/homepage_image.png)" }}
          />
        </div>
      </section>
    </Fragment>
  );
};

export default Intro;
