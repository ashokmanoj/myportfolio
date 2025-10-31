import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsPenFill } from "react-icons/bs";

import { BlogsData } from "@/constants";
import AnimatedButton from "@/components/buttons/AnimatedButton";

const LatestBlogs = () => {
  return (
    <Fragment>
      <section
        className="py-20 px-6 sm:px-10 md:px-20 lg:px-32 transition-colors duration-700
                   bg-gradient-to-b from-zinc-100/70 via-white/60 to-zinc-100/70 
                   dark:from-zinc-900/80 dark:via-zinc-800/70 dark:to-zinc-900/80 
                   backdrop-blur-2xl"
        id="blogs"
      >
        {/* Title */}
        <h3 className="flex justify-center items-center gap-3 text-4xl font-bold text-center mb-12">
          <BsPenFill className="text-[#c72c6c] dark:text-[#07d0e5]" />
          <span className="text-[#c72c6c] dark:text-[#07d0e5]">Blogs</span>
        </h3>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {BlogsData.slice(-4)
            .reverse()
            .map((blog) => (
              <Link
                className="w-full sm:w-[260px] md:w-[280px] group"
                href={`/blogs/${blog.linkName}`}
                key={blog.name}
              >
                <div
                  className="rounded-xl overflow-hidden border border-white/20 dark:border-zinc-700 
                             bg-white/60 dark:bg-white/10 backdrop-blur-lg 
                             shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  {/* Blog Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      alt={blog.name}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      fill
                      src={blog.imageUrl}
                    />
                  </div>

                  {/* Blog Info */}
                  <div className="p-4 border-t border-white/20 dark:border-zinc-700 text-center">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                      {blog.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {blog.date}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>

        {/* Animated Button */}
        <div className="flex justify-center mt-12">
          <AnimatedButton />
        </div>
      </section>
    </Fragment>
  );
};

export default LatestBlogs;
