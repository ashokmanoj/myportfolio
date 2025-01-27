"use client";
import React, { Fragment, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaBlackTie, FaUserCheck } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { IoPerson } from "react-icons/io5";
import { BsMenuAppFill } from "react-icons/bs";

const About = () => {
  const [isAbout, setIsAbout] = useState(false);

  const aboutRef = useRef();
  const profile2Ref = useRef();
  const aboutInfoRef = useRef();

  // Scroll Animation
  useEffect(() => {
    if (aboutRef.current) {
      const getScreenWidth = () =>
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      const aboutObserver = new IntersectionObserver(
        ([aboutEntry]) => {
          setIsAbout(aboutEntry.isIntersecting);
        },
        {
          rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
        }
      );

      aboutObserver.observe(aboutRef.current);

      if (isAbout) {
        profile2Ref.current.classList.add("slide-in");
        aboutInfoRef.current.classList.add("slide-in");
      } else {
        profile2Ref.current.classList.remove("slide-in");
        aboutInfoRef.current.classList.remove("slide-in");
      }
    }
  }, [isAbout, aboutRef]);

  return (
    <Fragment>
      <section
        className='overflow-x-hidden shadow-sm shadow-zinc-300 dark:shadow-zinc-700'
        id='about'
        ref={aboutRef}
      >
        <h2 className='flex items-center justify-center gap-3 pt-4 pb-8 text-3xl font-bold text-center'>
          <FaUserCheck /> About me
        </h2>
        <div className='pb-[30px] px-[20px] md:px-[100px] lg:px-[200px] md:flex gap-[50px]'>
          {/* Person Image */}
          <Image
            alt='about image'
            className={
              "shadow-zinc-300 dark:shadow-zinc-700 shadow-sm transition-all duration-700 translate-x-[-900px] bg-blue-200 m-auto bg-cover bg-no-repeat max-h-[500px] rounded object-contain"
            }
            height={350}
            ref={profile2Ref}
            src='/images/myprofile_photo.png'
            width={350}
          />
          <div
            className='text-lg translate-x-[900px] opacity-0 transition-all duration-700 mt-4 md:mt-0 md:w-[50%] text-center md:text-left rounded'
            ref={aboutInfoRef}
          >
            {/* Full Name */}
            <p className='text-3xl text-center md:text-left font-semibold text-[#c72c6c] dark:text-[#07d0e5]'>
              Manoj.H.A
            </p>
            {/* Profil Name */}
            <p className='mt-1 text-center text-red-600 md:text-left'>
            Full Stack Developer
            </p>
            {/* Location */}
            <div className='flex flex-wrap justify-center gap-5 md:justify-normal'>
              <div className='flex flex-col items-center gap-2 px-4 py-2 mt-5 border border-gray-400 rounded w-fit'>
                <div className='flex items-center gap-3'>
                  <p className='text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]'>
                    Location
                  </p>
                  <p>
                    <ImLocation />
                  </p>
                </div>
                <p className='text-center md:text-left text-[#0b0c0c] dark:text-[#07d0e5]'>
                  Hassan, Karnataka{" "}
                </p>
              </div>
              {/* Age */}
              <div className='flex flex-col items-center gap-2 px-4 py-2 mt-5 border border-gray-400 rounded w-fit'>
                <div className='flex items-center gap-3'>
                  <p className='text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]'>
                    Age
                  </p>
                  <p>
                    <IoPerson />
                  </p>
                </div>
                <p className='text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]'>
                  23{" "}
                </p>
              </div>
              {/* Experience */}
              <div className='flex flex-col items-center gap-2 px-4 py-2 mt-5 border border-gray-400 rounded w-fit'>
                <div className='flex items-center gap-3'>
                  <p className='text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]'>
                    Experience
                  </p>
                  <p>
                    <FaBlackTie />
                  </p>
                </div>
                <p className='text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]'>
                  Fresher{" "}
                </p>
              </div>
              {/* Project */}
              <div className='flex flex-col items-center gap-2 px-4 py-2 mt-5 border border-gray-400 rounded w-fit'>
                <div className='flex items-center gap-3'>
                  <p className='text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]'>
                    Projects
                  </p>
                  <p>
                    <BsMenuAppFill />
                  </p>
                </div>
                <p className='text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]'>
                  3{" "}
                </p>
              </div>
            </div>

            <div className='mt-5 text-justify justify-evenly'>
              <p className='text-gray-600 dark:text-gray-300'>
                Passionate and driven ReactJS developer with a strong foundation
                in MERN Stack and NextJS. Dedicated to creating dynamic and
                user-centric web applications. Eager to contribute my expertise
                in frontend frameworks, modern UI/UX design, and responsive
                development to a forward-thinking team, while continuously
                learning and growing in the ever-evolving world of web
                development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
