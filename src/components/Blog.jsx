import React, { useEffect, useRef, useState } from 'react';
import aboutmeImage from '../assets/images/aboutme.jpg';
import firstpoemImage from '../assets/images/firstpoem.jpg';
import gImage from '../assets/images/g.jpg';
import GloomyEyesImage from '../assets/images/GloomyEyes.jpg';
import handsImage from '../assets/images/hands.jpg';
import hersImage from '../assets/images/hers.jpg';
import onedayImage from '../assets/images/oneday.jpg';
import OpinionImage from '../assets/images/Opinion.png';
import peacefulImage from '../assets/images/peaceful.jpg';
import SolaceImage from '../assets/images/Solace.jpg';
import soundOfSilenceImage from '../assets/images/sound of silence.jpg';
import wingsImage from '../assets/images/wings.jpg';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from 'lenis';

const images = [
    aboutmeImage,
    firstpoemImage,
    gImage,
    GloomyEyesImage,
    handsImage,
    hersImage,
    onedayImage,
    OpinionImage,
    peacefulImage,
    SolaceImage,
    soundOfSilenceImage,
    wingsImage,
];

const Column = ({ images, y }) => {
    return (
        <motion.div style={{ y }} className='column'>
            {images.map((source, index) => (
                <div key={index} className='imageContainer'>
                    <img src={source} alt={`Image ${index + 1}`} onClick={()=>{alert("EHllo")}} />
                </div>
            ))}
        </motion.div>
    );
};

export const Blog = () => {
    const container = useRef(null);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        const resize = () => {
            setDimension({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener("resize", resize);
        requestAnimationFrame(raf);
        resize();

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    const { height } = dimension;
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);


    return (
        <div className='bg-gray-600'>
            <div ref={container} className='gallery'>
                <Column images={[images[0], images[1], images[2]]} y={y} />
                <Column images={[images[3], images[4], images[5]]} y={y2} />
                <Column images={[images[6], images[7], images[8]]} y={y3} />
                <Column images={[images[9], images[10], images[11]]} y={y4} />
            </div>
        </div>
    );
};
