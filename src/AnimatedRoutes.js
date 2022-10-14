import React from 'react'

import Home  from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Resume from './pages/Resume'

import {Route, Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";

const AnimatedRoutes = () => {

const location = useLocation();

  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about-me" element={<AboutMe></AboutMe>}></Route>
            <Route path="/projects" element={<Projects></Projects>}></Route>
            <Route path="/resume" element={<Resume></Resume>}></Route>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes