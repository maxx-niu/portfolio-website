import React from 'react';
import {motion} from "framer-motion";
import "./Projects.css"

const Projects = () => {

  const projects = [
    {
      title: "React/OpenWeatherMap Weather App",
      desciption: "A weather app made using OpenWeatherMap API and React that displays forecast data and changes background depending on result of received API call data",
      imgURL: ""
    },
    {
      title: "Portfolio Website",
      desciption: "View the source code for this website, hosted using and uses .... for contacting me",
      imgURL: ""
    }
  ]

    return (
      <>
        <motion.div 
        className="container"
        >
        <div>
          hi
        </div>
      </motion.div>
      </>
      )
}

export default Projects