import React, { useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import kshs from "../assets/images/projects/kshs.png";
import kshs2 from "../assets/images/projects/kshs2.png";
import PoetryBlog from "../assets/images/projects/poetryblog.png";
import portfolio from "../assets/images/projects/portfolio.png";
import portfolio2 from "../assets/images/projects/portfolio2.png";
import itsurtrip from "../assets/images/projects/ItsurTrip.png";
import itsurtrip2 from "../assets/images/projects/Itsurtrip2.png";
import itsurtrip3 from "../assets/images/projects/ItsURTrip3.png";
import Lenis from "lenis";

const Card = ({ card }) => {
  return (
    <div className="group relative h-[500px] w-[900px] overflow-hidden py-auto">
      <img
        src={card}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        alt="Project"
      />
    </div>
  );
};

export const HorizontalCarousel = () => {
  const cards = [
    itsurtrip,
    itsurtrip2,
    kshs,
    kshs2,
    itsurtrip3,
    PoetryBlog,
    portfolio,
    portfolio2,
  ];

  const targetRef = useRef(null);
  const scrollRef = useRef(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: scrollRef,
  });

  const x = useTransform(scrollYProgress1, [0, 2], ["0%", "-150%"]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <motion.div
        className="mt-24 pt-24 text-8xl px-10 font-bold"
        style={{ fontFamily: 'montserrat' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: "all" }}
        transition={{ duration: 1 }}
        ref={scrollRef}
      >
        WORK
      </motion.div>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="top-0 h-screen flex items-center">
          <div className="flex gap-4">
            {cards.map((card, index) => (
              <Card card={card} key={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
