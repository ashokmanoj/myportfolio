import React from "react";
import { DiTechcrunch } from "react-icons/di";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { TbBulbFilled } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavbarMenu } from "./NavbarItems";

const NavbarMobile = ({ setShowMenu, setThemeFun, theme, showMenu }) => {
  return (
    <>
      {/* 🔝 Fixed Top Logo Bar */}
      <div className="fixed top-0 left-0 w-full px-5 py-3 bg-[#ffffffcc] dark:bg-[#000000cc] backdrop-blur-lg flex justify-between items-center shadow-md shadow-gray-300 dark:shadow-gray-800 md:hidden z-50">
        {/* Logo */}
        <p className="flex items-center gap-1 text-gray-700 dark:text-gray-300">
          <span className="text-lg font-bold">MANOJ</span>
          <DiTechcrunch className="text-xl text-[#c72c6c] dark:text-[#07d0e5]" />
        </p>

        {/* Menu Button */}
        <button
          className="text-3xl text-gray-700 dark:text-gray-200"
          onClick={() => setShowMenu(!showMenu)}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* 📱 Bottom Tab Bar */}
      <div className="fixed bottom-0 left-0 w-full px-4 py-2 bg-[#ffffffcc] dark:bg-[#000000cc] backdrop-blur-lg flex justify-around items-center shadow-[0_-2px_8px_rgba(0,0,0,0.1)] dark:shadow-[0_-2px_8px_rgba(255,255,255,0.1)] md:hidden z-40">
        <div className="flex overflow-x-auto no-scrollbar gap-4 justify-around w-full">
          {NavbarMenu.map((item) => (
            <a
              className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-[#c72c6c] dark:hover:text-[#07d0e5] min-w-[60px]"
              href={item.link}
              key={item.name}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-xs mt-1 font-medium">{item.name}</span>
            </a>
          ))}

          {/* 🌙 Theme Toggle */}
          <button
            className="flex flex-col items-center text-[#c72c6c] dark:text-[#07d0e5] hover:scale-110 transition-transform min-w-[60px]"
            onClick={setThemeFun}
          >
            {theme === "dark" ? (
              <TbBulbFilled className="text-2xl" />
            ) : (
              <BsFillLightningChargeFill className="text-2xl" />
            )}
            <span className="text-xs mt-1">Theme</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;
