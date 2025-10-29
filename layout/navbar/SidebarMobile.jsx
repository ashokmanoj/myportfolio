import React, { Fragment } from "react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { DiTechcrunch } from "react-icons/di";

import { NavbarMenu } from "./NavbarItems";

const MobileNavbar = ({ showMenu, setShowMenu }) => {
  return (
    <Fragment>
      {/* 🔳 Dimmed overlay */}
      <div
        className={`fixed inset-0 z-40 backdrop-blur-[2px] transition-all duration-500 ${
          showMenu
            ? "bg-[rgba(0,0,0,0.4)] dark:bg-[rgba(255,255,255,0.1)] visible"
            : "opacity-0 invisible"
        }`}
        onClick={() => setShowMenu(false)}
      />

      {/* 🧊 Sidebar container */}
      <div
        className={`fixed top-0 left-0 h-full w-[75%] max-w-[320px] z-50 transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col bg-[#ffffff33] dark:bg-[#00000033] backdrop-blur-2xl border-r border-gray-300/20 dark:border-gray-700/30 shadow-lg shadow-gray-400/10 dark:shadow-gray-900/50">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-300/30 dark:border-gray-700/40">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-[#c72c6c] dark:bg-[#07d0e5] flex justify-center items-center text-white font-bold shadow-md">
                M
              </div>
              <p className="flex items-center text-gray-800 dark:text-gray-200 font-semibold text-lg tracking-wide">
                MANOJ <DiTechcrunch className="ml-1 text-[#c72c6c] dark:text-[#07d0e5]" />
              </p>
            </div>

            {/* Close button */}
            <button
              className="text-3xl text-gray-700 dark:text-gray-200 hover:text-[#c72c6c] dark:hover:text-[#07d0e5] transition-colors"
              onClick={() => setShowMenu(false)}
            >
              <IoMdClose />
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex flex-col gap-2 mt-3 px-4 overflow-y-auto">
            {NavbarMenu.map((item) => (
              <Link
                className="flex items-center justify-between p-3 text-base font-medium rounded-xl 
                bg-white/30 dark:bg-black/20 
                text-gray-800 dark:text-gray-200 
                hover:bg-[#c72c6c]/20 dark:hover:bg-[#07d0e5]/20
                hover:scale-[1.02] shadow-sm transition-all"
                href={item.link}
                key={item.name}
                onClick={() => setShowMenu(false)}
              >
                {item.name}
                <span className="text-[#c72c6c] dark:text-[#07d0e5]">›</span>
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div className="mt-auto p-4 border-t border-gray-300/30 dark:border-gray-700/40 text-sm text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} MANOJ. All rights reserved.
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MobileNavbar;
