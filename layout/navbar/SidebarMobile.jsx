import React, { Fragment } from "react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { DiTechcrunch } from "react-icons/di";

import { NavbarMenu } from "./NavbarItems";

const MobileNavbar = ({ showMenu, setShowMenu }) => {
  return (
    <Fragment>
      <div
        className={`w-full h-screen bg-[rgba(255,255,255,0.3)] dark:bg-[rgba(0,0,0,0.3)] fixed ${
          showMenu ? null : "hidden"
        } top-0 left-0 z-10`}
        onClick={() => setShowMenu(!showMenu)}
      >
        {/* Sidebar */}
        <div
          className={`w-[70%] h-screen bg-white dark:bg-black shadow-sm shadow-gray-600 dark:shadow-gray-300 ${
            showMenu ? null : "translate-x-[-450px]"
          } transition-all duration-1000`}
        >
          <div className='flex items-center justify-between gap-3 p-3 bg-gray-200 dark:bg-gray-800'>
            {/* Name Logo */}
            <div className='flex items-center gap-2'>
              <div className='text-white w-8 h-8 bg-[#c72c6c] dark:bg-[#07d0e5] rounded-full flex justify-center items-center'>
                S
              </div>
              <p className='flex text-gray-400'>
                <span className='text-lg font-bold'>MANOJ</span> <DiTechcrunch />
              </p>
            </div>

            {/* Sidebar Close button */}
            <button
              className='text-3xl font-bold text-black dark:text-white'
              onClick={() => setShowMenu(!showMenu)}
            >
              <IoMdClose />
            </button>
          </div>

          <div className='flex flex-col gap-2 p-2'>
            {/* Navbar Links */}
            {NavbarMenu.map((navbar) => (
              <Link
                className='p-2 text-lg bg-gray-200 rounded hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700'
                href={navbar.link}
                key={navbar.name}
              >
                {navbar.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MobileNavbar;
