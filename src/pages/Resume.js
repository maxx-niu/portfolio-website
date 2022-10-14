import React from 'react';
import {motion} from "framer-motion";

const Resume = () => {
  return (
    <motion.div 
        initial={{ x:"-100%" }}
        animate={{ x: 0, transition: { duration: 1.5, type: "spring", stiffness:"30"} }}
        exit={{ x:"100%", transition: { duration: 1.5, type: "spring", stiffness:"30"}}}
        className="container"
        >
        Resume
    </motion.div>
  )
}

export default Resume