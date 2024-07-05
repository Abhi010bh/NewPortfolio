import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import './fonts.css';
import { Menu } from './components/Menu';
import Cover  from './components/Cover';
import {Header} from './components/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Blog } from './components/Blog';

function App() {

  const boxVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.5 },
    },
  };

  return (
    <>
      <motion.div 
     variants={containerVariants}
      initial="hidden"
      animate="visible" >
      <BrowserRouter>
      <div className='py-10'>
     
    
      <Cover />
      <Blog />
      <Menu />
        
        
      </div>
      </BrowserRouter>
      </motion.div>
    </>
  );
}

export default App;
