import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { MdContactMail } from "react-icons/md";
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
      name: "Contact",
      icon: <MdContactMail className="text-2xl" />,
      link: "#SendMail",
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

  // 🔍 Detect visible section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id === "home") setActiveTab("Home");
            if (id === "contact") setActiveTab("Contact");
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // 🎨 Adjust glass background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
          <span className="text-xs mt-1 font-medium">{tab.name}</span>
        </button>
      ))}
    </div>
  );
};

export default NavbarMobile;
