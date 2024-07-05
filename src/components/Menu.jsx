import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { debounce } from "lodash";

export const Menu = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const debouncedMouseMove = debounce((e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    }, 10); // Adjust debounce delay as needed (e.g., 10 milliseconds)

    window.addEventListener("mousemove", debouncedMouseMove);

    return () => {
      window.removeEventListener("mousemove", debouncedMouseMove);
    };
  }, []);

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const variants = {
    default: {
      scale: 1,
      opacity: 1,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
     
    },
    text: {
      scale: 1.5,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
       mixBlendMode: "difference"
    },
  };

  return (
    <>
      <div className="text-white  flex flex-col justify-center items-center overflow-hidden relative">
        <motion.div
          className="cursor"
          variants={variants}
          animate={cursorVariant}
          transition={{ type: "spring", stiffness: 200, damping: 20}}
        />
        <div
          className="absolute top-0 left-0 p-5 m-5 font-cabin text-3xl header header-name"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          haibattiabhi
          <span className="header-name-text text-3xl">off@gmail.com</span>
        </div>

        <div className="flex flex-col justify-center items-center menu-overlay pt-20">
          <motion.div
            className="p-0 m-0 leading-none menu-name-text"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            home
          </motion.div>
          <div className="p-0 m-0 leading-none" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            blog
          </div>
          <motion.div
            className="p-0 m-0 leading-none menu-name-text"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            about
          </motion.div>
          <div className="p-0 m-0 leading-none" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            work
          </div>
        </div>
      </div>
      {/* Social media links at the bottom right */}
      <div className="absolute bottom-0 right-0 flex flex-row items-center space-x-5 p-5 mb-5">
        <span className="text-2xl font-cabin">TWITTER</span>
        <span className="text-2xl font-cabin">INSTAGRAM</span>
        <span className="text-2xl font-cabin">LINKEDIN</span>
      </div>
    </>
  );
};


