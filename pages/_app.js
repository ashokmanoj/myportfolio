import "@/styles/globals.css";
import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import { motion, AnimatePresence } from "framer-motion";

import { ThemeProvider } from "@/context/themeContext";
import { PortfolioProvider } from "@/contextApi/PortfolioContext";

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gray-900">
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        className="w-16 h-16 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"
        exit={{ opacity: 0, scale: 0.8 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      />
      <motion.p
        animate={{ opacity: 1, y: 0 }}
        className="mt-4 text-lg text-gray-400"
        exit={{ opacity: 0, y: -10 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to my portfolio...
      </motion.p>
    </div>
  );
}

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Google Analytics init
    ReactGA.initialize(process.env.NEXT_PUBLIC_MEASUREMENT_ID);

    // Fake loader delay (replace with real preload logic if needed)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <PortfolioProvider>
        <AnimatePresence mode="wait">
          {loading ? (
            <Loading key="loader" />
          ) : (
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              key="portfolio"
              transition={{ duration: 0.7 }}
            >
              <Component {...pageProps} />
            </motion.div>
          )}
        </AnimatePresence>
      </PortfolioProvider>
    </ThemeProvider>
  );
}
