import React from "react";
import  { useState, useEffect } from "react";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import { motion } from "framer-motion";
import { debounce } from "lodash";
import Transitions from "../../Transitions";
import { Header } from "./Header";
const Cover = () => {

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
      {/* Grid Layout */}
      <Header />
      <div className="rounded-full border-t-2 mx-0 px-0 border-gray-800 grid-cols-1 grid md:grid-cols-4  p-0 md:pl-12  mt-24  pt-24">
      <motion.div
          className="cursor"
          variants={variants}
          animate={cursorVariant}
          transition={{ type: "spring", stiffness: 200, damping: 20}}
        />
        <div className="Cover leading-none h2 md:col-span-3 tracking-tighter font-cabin"  onMouseEnter={textEnter}
          onMouseLeave={textLeave}>
          Web Developer <span className="circle">&</span> Computer Engineer
        </div>
        <div></div>
        <div className="md:col-span-2 text-2xl text-gray-300 tracking-wide font-light leading-relaxed p-5 mt-10 font-cabin" >
          <motion.div  
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          viewport={{amount:"all"}}
          transition={{}}
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}>
            Hey there! I'm Abhishek Haibatti, a budding Computer Science
            Engineering student passionate about coding with React.js and
            Node.js. From personal portfolios to full-stack apps, I love
            blending creativity with tech to build user-centric solutions.
          </motion.div>
          <div className="felx flex-row pt-2 mt-2 items-center justify-between space-x-6">
          <span className="text-xl bg-gray-800 px-3 py-1 rounded-full border border-gray-600 text-gray-300">
              twitter/X
            </span>
            <span className="text-xl bg-gray-800 px-3 py-1 rounded-full border border-gray-600 text-gray-300">
              Instagram
            </span>
            <span className="text-xl bg-gray-800 px-3 py-1 rounded-full border border-gray-600 text-gray-300">
              linkedIn
            </span>
          </div>
          
        </div>
      </div>
    </>
  );
};


export default Transitions(Cover);