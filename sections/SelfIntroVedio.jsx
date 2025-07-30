// components/SelfIntroVideo.jsx
import React from "react";

const SelfIntroVideo = () => {
  return (
    <section className="w-full py-12 px-4 md:px-12 lg:px-24 transition-colors duration-300 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          👋 Hello, Here's a short video about me — my work, my values, and how I bring ideas to life.
        </h2>
        {/* <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
          
        </p> */}

        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            frameBorder="0"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your actual video URL or embed ID
            title="Self Intro Video"
           />
        </div>
      </div>
    </section>
  );
};

export default SelfIntroVideo;
