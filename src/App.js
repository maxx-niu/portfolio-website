import React from 'react';
import Navbar from './Navbar';
import Cursor from './Cursor';
import "./App.css";
import {motion} from "framer-motion";
import { useRef } from "react";

import AnimatedRoutes from './AnimatedRoutes';


//import { ScrollContainer } from 'react-scroll-motion';

const App = () => {

  const appDiv = useRef(null);

  const removeTransform = () => {
    // to remove transform property so cursor works properly
    appDiv.current.style.transform = "none";
  }

  return (
    <>
      <motion.div
        initial={{ x:"0" }}
        animate={{ x:"100%", transition: { duration: 2, type: "spring", stiffness:"30" } }}
        className="privacy-screen"
      />
      <motion.div 
        initial={{ x:"-100%" }}
        animate={{ x: 0, transition: { duration: 1.5, type: "spring", stiffness:"30"} }}
        onAnimationComplete={removeTransform}
        ref={appDiv}
      >
        <Navbar></Navbar>
        <AnimatedRoutes></AnimatedRoutes>
        <Cursor></Cursor> 
      </motion.div>
      {/* ^ might have to do some prop passing here into the cursor */}
    </>
  );
}

export default App;
