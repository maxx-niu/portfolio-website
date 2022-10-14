import React from 'react';
import {motion} from "framer-motion";
import "./AboutMe.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutMe = () => {
  const languages = ["HTML", "CSS", "JS", "C", "C++", "Python", "SQL", "Java", "Verilog", "MATLAB"];
  const libraries_Frameworks = ["React", "DynamoDB", "API Gateway", "Lambda", "S3", "NodeJS", "Git", "MySQL", "Angular"];
  const other = ["Figma", "Illustrator", "Photoshop", "Premiere"];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <motion.div 
        initial={{ x:"-100%" }}
        animate={{ x: 0, transition: { duration: 1.5, type: "spring", stiffness:"30"} }}
        exit={{ x:"100%", transition: { duration: 1.5, type: "spring", stiffness:"30"}}}
        className="container"
        >
        <section id="experience">
          <div className="bio-container">
            <div className="bio">
              <h2>Bio</h2>
              <p>
                I'm Maximus Niu, but everyone just calls me Max for short. I'm currently
                finishing up my 3rd year studying Computer Engineering here at uWaterloo.
                I have a strong passion for making beautiful websites with React, as well as general programming. 
                I've recently started learning about machine learning with Python, as well as principles of
                computer networking and databases in school.
              </p>
              <p>
                I love working out and lifting weights in my spare time, so I often stop by the PAC on Waterloo campus.
                Feel free to say hi if you ever meet me (I promise I don't bite)!
              </p>
            </div>
          </div>
          <h2>Skills</h2>
          <div className="experience-container">
            <div className="languages">
              <h3>Programming Languages</h3>
              <div className="experience-content">
                <Slider className="skill-slider" {...settings}>
                  {languages.map((language, i) => {
                    return (<div key={i} className="item"><h5>{language}</h5></div>);
                  })}
                </Slider>
              </div>
            </div>
            <div className="frameworks-libraries">
              <h3>Frameworks, Libraries and Technologies</h3>
              <div className="experience-content">
                <Slider className="skill-slider" {...settings}>
                  {libraries_Frameworks.map((language, i) => {
                    return (<div key={i} className="item"><h5>{language}</h5></div>);
                  })}
                </Slider>
              </div>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="experience-container2">
              <div className="other">
                <h3>Other</h3>
                <div className="experience-content">
                  <Slider className="skill-slider" {...settings}>
                  {other.map((language, i) => {
                    return (<div key={i} className="item"><h5>{language}</h5></div>);
                  })}
                </Slider>
                </div>
              </div>
            </div>
        </section>
    </motion.div>
  )
}

export default AboutMe