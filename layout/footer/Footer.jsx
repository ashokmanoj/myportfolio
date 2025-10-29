import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        w-full px-4 py-3 text-center font-sans text-sm md:text-base tracking-wide
        fixed md:bottom-0 left-0 right-0 z-40
        bg-white/20 dark:bg-[#0d0d0d]/20
        backdrop-blur-2xl
        border-t border-white/30 dark:border-gray-800/50
        shadow-[0_-4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_-4px_20px_rgba(255,255,255,0.05)]
        md:rounded-none
        transition-all duration-300
      "
    >
      {/* glossy light reflection line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/40 dark:bg-gray-400/10 blur-sm" />

      <div className="relative">
        <p className="flex justify-center items-center gap-1 font-medium text-gray-800 dark:text-gray-200">
          © {currentYear}
          <span className="font-semibold text-[#c72c6c] dark:text-[#07d0e5]">
            Manu
          </span>
        </p>

        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
          Designed & Developed with ❤️ by Manu
        </p>
      </div>
    </footer>
  );
};

export default Footer;
