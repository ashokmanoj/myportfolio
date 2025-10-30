"use client";
import React from "react";
import { motion } from "framer-motion";

const SelfIntroVideo = () => {
  return (
    <section
      className="
        relative overflow-hidden py-16 px-6 sm:px-10 lg:px-24
        bg-gradient-to-b from-white/80 to-white/40
        dark:from-gray-950 dark:to-gray-900
        backdrop-blur-xl transition-all duration-500
      "
      id="intro"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Header with animation */}
        <motion.h2
          className="
            text-3xl sm:text-4xl md:text-5xl font-extrabold 
            text-transparent bg-clip-text 
            bg-gradient-to-r from-[#c72c6c] to-[#07d0e5]
            mb-6 leading-snug
          "
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          👋 Hi there! Here’s a short video about me —  
          my work, my values, and how I bring ideas to life.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Take a quick look into my journey as a developer — my approach to
          building user-friendly, performant web experiences that make an impact.
        </motion.p>

        {/* Video Frame */}
        <motion.div
          className="
            relative w-full aspect-video rounded-2xl overflow-hidden
            border border-white/40 dark:border-gray-800
            shadow-[0_8px_30px_rgba(0,0,0,0.1)]
            dark:shadow-[0_8px_30px_rgba(255,255,255,0.05)]
            bg-white/40 dark:bg-gray-950/40
            backdrop-blur-lg
            hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)]
            hover:scale-[1.01] transition-all duration-500
          "
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            frameBorder="0"
            src="https://www.youtube.com/embed/your_video_id_here"
            title="Self Introduction Video"
          />
        </motion.div>
      </div>

      {/* Subtle glossy accent lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-gray-700/40 blur-sm" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-gray-700/40 blur-sm" />
    </section>
  );
};

export default SelfIntroVideo;
