import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gray-900">
      <motion.div
        className="w-16 h-16 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      />
      <motion.p
        className="mt-4 text-lg text-gray-400"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.6 }}
      >
        Loading your portfolio...
      </motion.p>
    </div>
  );
}

export default function PortfolioWrapper() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (replace with real API/data/image loading)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loading key="loader" />
      ) : (
        <motion.div
          key="portfolio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {/* Replace with your actual portfolio content */}
          <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-900">
            <h1 className="text-4xl font-bold">🚀 Welcome to My Portfolio!</h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
