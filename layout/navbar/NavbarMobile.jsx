import React, { useState, useEffect } from "react";
import { DiTechcrunch } from "react-icons/di";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { RiStackFill } from "react-icons/ri";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { TbBulbFilled } from "react-icons/tb";

const NavbarMobile = ({ setShowMenu, setThemeFun, theme, showMenu }) => {
  const [activeTab, setActiveTab] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  const tabs = [
    {
      name: "Menu",
      icon: <GiHamburgerMenu className="text-2xl" />,
      action: () => setShowMenu(!showMenu),
    },
    {
      name: "Home",
      icon: <AiFillHome className="text-2xl" />,
      link: "#home",
    },
    {
      name: "Tech Stack",
      icon: <RiStackFill className="text-2xl" />,
      link: "#techStack",
    },
    {
      name: "Theme",
      icon:
        theme === "dark" ? (
          <TbBulbFilled className="text-2xl" />
        ) : (
          <BsFillLightningChargeFill className="text-2xl" />
        ),
      action: setThemeFun,
    },
  ];

  // Detect which section is visible (for active highlight)
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id === "home") setActiveTab("Home");
            if (id === "techStack") setActiveTab("Tech Stack");
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Glassy background scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🌟 Top Header with Logo */}
      <div className="fixed top-0 left-0 w-full px-5 py-3 bg-[#ffffffcc] dark:bg-[#000000cc] backdrop-blur-lg flex justify-between items-center md:hidden shadow-md shadow-gray-300 dark:shadow-gray-800 z-50">
        <p className="flex items-center gap-2 text-gray-700 dark:text-gray-200 font-bold text-lg">
          MANOJ <DiTechcrunch className="text-2xl text-[#c72c6c] dark:text-[#07d0e5]" />
        </p>
        {/* <button
          className="text-[#c72c6c] dark:text-[#07d0e5] text-2xl font-semibold hover:scale-110 transition-transform"
          onClick={setThemeFun}
        >
          {theme === "dark" ? <TbBulbFilled /> : <BsFillLightningChargeFill />}
        </button> */}
      </div>

      {/* 📱 Bottom Navigation Bar */}
      <div
        className={`fixed bottom-0 left-0 w-full px-4 py-2 flex justify-around items-center md:hidden z-50 backdrop-blur-lg transition-all duration-500 ${
          isScrolled
            ? "bg-[#ffffff99] dark:bg-[#00000099] shadow-[0_-2px_8px_rgba(0,0,0,0.15)] dark:shadow-[0_-2px_8px_rgba(255,255,255,0.15)]"
            : "bg-[#ffffffcc] dark:bg-[#000000cc] shadow-[0_-2px_6px_rgba(0,0,0,0.1)] dark:shadow-[0_-2px_6px_rgba(255,255,255,0.1)]"
        }`}
      >
        {tabs.map((tab) => (
          <button
            className={`flex flex-col items-center justify-center min-w-[60px] transition-transform ${
              activeTab === tab.name
                ? "text-[#c72c6c] dark:text-[#07d0e5] scale-110"
                : "text-gray-600 dark:text-gray-300 hover:text-[#c72c6c] dark:hover:text-[#07d0e5]"
            }`}
            key={tab.name}
            onClick={() => {
              if (tab.action) tab.action();
              if (tab.link)
                document
                  .querySelector(tab.link)
                  ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {tab.icon}
            <span className="text-xs mt-1 font-medium text-center">
              {tab.name}
            </span>
          </button>
        ))}
      </div>
    </>
  );
};

export default NavbarMobile;
