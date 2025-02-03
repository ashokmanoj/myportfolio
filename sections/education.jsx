"use client";
import React, { Fragment, useRef, useState, useEffect } from "react";
import Image from "next/image";
import { IoSchoolSharp } from "react-icons/io5";

import { EducationData } from "@/constants/EducationData";

const Education = () => {
  const [isEducation, setIsEducation] = useState(false);
  const educationRef = useRef();
  const educationBoxesRef = useRef();

  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const educationObserver = new IntersectionObserver(
      ([educationEntry]) => {
        setIsEducation(educationEntry.isIntersecting);
      },
      {
        rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
      }
    );

    educationObserver.observe(educationRef.current);

    if (isEducation) {
      educationBoxesRef.current.classList.add("pop-up-child");
    } else {
      educationBoxesRef.current.classList.remove("pop-up-child");
    }
  }, [isEducation]);

  return (
    <Fragment>
      <section
        className='overflow-x-hidden shadow-sm shadow-zinc-300 dark:shadow-zinc-700'
        id='education'
        ref={educationRef}
      >
        <h2 className='flex items-center justify-center gap-3 p-4 text-3xl font-bold text-center'>
          <IoSchoolSharp /> Education
        </h2>

        <div
          className='pop-down-child pb-[30px] px-[20px] md:px-[100px] lg:px-[200px] flex flex-col gap-[20px] md:gap-[50px]'
          ref={educationBoxesRef}
        >
          {EducationData.map((education) => (
            <div
              className='flex gap-6 transition-all duration-700 border rounded shadow-md border-zinc-300 dark:border-zinc-700 shadow-zinc-300 dark:shadow-zinc-700'
              key={education.name}
            >
              <Image
                alt={education.name}
                className='hidden bg-blue-400 md:block'
                height={150}
                src={education.image}
                width={150}
                style={{
                  objectFit: "cover",
                  
                }}
              />
              <div className='flex flex-col gap-2 p-3 md:p-1'>
                <p className='text-xl font-bold text-red-600 md:text-2xl'>
                  {education.name}
                </p>
                <p>{education.schoolOrCollege}</p>
                <p className='text-blue-600 '>
                  {education.fromTo} &nbsp; | &nbsp;{" "}
                  {education.statusOrPrecentage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Education;
