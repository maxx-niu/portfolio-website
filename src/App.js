import React from 'react';
import Navbar from './Navbar';
import Cursor from './Cursor';
import "./App.css";
import {motion} from "framer-motion";

import AnimatedRoutes from './AnimatedRoutes';


//import { ScrollContainer } from 'react-scroll-motion';

const App = () => {

  return (
    <>
      <motion.div
        initial={{ x:"0" }}
        animate={{ x:"100%", transition: { duration: 2, type: "spring", stiffness:"30" } }}
        exit={{ x:"100%", transition: { duration: 2, type: "spring", stiffness:"30" } }}
        className="privacy-screen"
      />
      <motion.div 
        initial={{ x:"-100%" }}
        animate={{ x: 0, transition: { duration: 1.5, type: "spring", stiffness:"30"} }}
        exit={{ x:"100%", transition: { duration: 1.5, type: "spring", stiffness:"30"}}}
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
