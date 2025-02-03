"use client";
import React, { Fragment, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { DiTechcrunch } from "react-icons/di";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { TbBulbFilled } from "react-icons/tb";

import MobileNavbar from "./SidebarMobile";
import { NavbarMenu } from "./NavbarItems";
import NavbarMobile from "./NavbarMobile";

import { ThemeContext } from "@/context/themeContext";

const Navbar = () => {
  const [top, setTop] = useState("0");
  const [showMenu, setShowMenu] = useState(false);

  const { setThemeFun, theme } = useContext(ThemeContext);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setTop(prevScrollPos > currentScrollPos ? "0" : "-80px");
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setThemeFun(theme === "dark" ? "light" : "dark");
  };

  return (
    <Fragment>
      {/* Desktop Header */}
      <div
        className='w-full h-[70px] px-8 bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(0,0,0,0.8)] backdrop-filter backdrop-blur-lg hidden md:flex justify-between items-center gap-4 shadow-sm shadow-gray-300 dark:shadow-gray-800 fixed z-10 transition-all duration-500'
        style={{ top: top }}
      >
        <p className='flex text-gray-400' href='/'>
          <span className='text-lg font-bold'>MANOJ</span> <sup className='text-xs'>HA</sup>{" "}
        </p>
        <div className='flex h-full gap-4'>
          {NavbarMenu.map((navbar) => (
            <Link
              className='text-[#c72c6c] dark:text-[#07d0e5] font-semibold'
              href={navbar.link}
              key={navbar.name}
            >
              <div className='h-full pb-1 hover:pb-0 px-2 flex items-center hover:border-b-4 border-[#c72c6c] dark:border-[#07d0e5] transition-all'>
                {navbar.name}
              </div>
            </Link>
          ))}
        </div>
        <div className='flex items-center gap-4'>
          <button
            className='text-xl text-[#c72c6c] dark:text-[#07d0e5] hover:scale-110'
            onClick={toggleTheme}
          >
            {theme === "dark" ? <TbBulbFilled /> : <BsFillLightningChargeFill />}
          </button>
        </div>
      </div>

      {/* Mobile Header */}
      <NavbarMobile
        setShowMenu={setShowMenu}
        setThemeFun={toggleTheme}
        showMenu={showMenu}
        theme={theme}
        top={top}
      />

      {/* SideMenu For Mobile Screen */}
      <MobileNavbar setShowMenu={setShowMenu} showMenu={showMenu} />
    </Fragment>
  );
};

export default Navbar;
