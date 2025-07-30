import { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-50 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition-opacity duration-300"
        onClick={scrollToTop}
      >
        ↑
      </button>
    )
  );
};

export default BackToTop;
