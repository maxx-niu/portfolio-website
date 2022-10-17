import React from 'react';
import {motion} from "framer-motion";
import PortfolioSite from "../assets/portfolio-website.png";
import WeatherApp from "../assets/weather-app.png";
import "./Projects.css";
import Timeline from "./Timeline";

const Projects = () => {

  const projects = [
    {
      title: "React/OpenWeatherMap Weather App",
      description: "A weather app made using OpenWeatherMap API and React that displays forecast data and changes background dynamically depending on result of received API call data",
      imgURL: WeatherApp,
      github: "https://github.com/maxx-niu/Weather-App",
      id: 11
    },
    {
      title: "Portfolio Website",
      description: "View the source code for this website here. Built with React and Framer Motion animation library. Hosted using and uses .... for contacting me",
      imgURL: PortfolioSite,
      github: "https://github.com/maxx-niu/portfolio-website",
      id: 12
    }
  ];

    return (
    <motion.div
    className="container"
    >
      <section id="portfolio">
        <h2>Personal Projects</h2>
        <div className="portfolio-container">
          {
            projects.map(({title, description, imgURL, github, id}) => {
              return (
                <a href={github} className="cta" key={id}>
                  <article className="portfolio-item">
                    <div className="portfolio-item-image">
                      <img src={imgURL} alt={title + " image"} />
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio-desc">
                      <p>{description}</p>
                    </div>
                  </article>
                </a>
              )
            })
          }
        </div>
        <div className="professional-experience-container">
          <h2>Professional Experiences</h2>
          <Timeline></Timeline>
        </div>
        <div className="spacer"></div>
      </section>
    </motion.div>
      )
}

export default Projects