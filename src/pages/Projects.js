import React from 'react';
import {motion} from "framer-motion";
import PortfolioSite from "../assets/portfolio-website.png";
import WeatherApp from "../assets/weather-app.png";
import "./Projects.css";

const Projects = () => {

  const projects = [
    {
      title: "React/OpenWeatherMap Weather App",
      description: "A weather app made using OpenWeatherMap API and React that displays forecast data and changes background dynamically depending on result of received API call data",
      imgURL: WeatherApp,
      github: "https://github.com/maxx-niu/Weather-App"
    },
    {
      title: "Portfolio Website",
      description: "View the source code for this website here. Built with React and Framer Motion animation library. Hosted using and uses .... for contacting me",
      imgURL: PortfolioSite,
      github: "https://github.com/maxx-niu/portfolio-website"
    }
  ];


  const experiences = [
    {
      title: "Fullstack Developer",
      date: "Jan - Apr 2022",
      company: "My First Montessori School",
      location: "Brampton, ON",
      description: ["Spearheaded the implementation of a proprietary, WordPress based E-learning platform to significantly enhance the remote learning experience, increasing teaching satisfaction by more than 86%", "mplemented a CRM automation system with Keap that monitors and controls the notification and sending of promotional materials to leads, reducing time spent on this by more than 70% compared to manual entry", "Organized meetings regularly with teachers and other staff members to gather crucial feedback and give updates on the development of the E-learning platform"]
    },
    {
      title: "Fullstack Developer",
      date: "Sept - Dec 2020",
      company: "Syntu Software",
      location: "Waterloo, ON",
      description: ["Played key role in the design and building of a web app that allows users to upload and store image and video evidence in legal contexts while ensuring 100% compliance with confidentiality laws using AWS Services (DynamoDB, S3, Lambda)", "Developed RESTful APIs with AWS API Gateway that only allows authenticated users to interact with relevant confidential legal data", "Liaised proactively with both front and back-end developers by arranging routinely scheduled meetings"]
    },
    {
      title: "Software Developer",
      date: "Jan - May 2020",
      company: "The Co-operators",
      location: "Guelph, ON",
      description: ["Improved markedly the efficiency of policy creation by more than 35% by creating a web-based automation platform using UiPath", "Created and performed regression test cases reliably for an insurance web app and generated accurate bug reports to senior developers"]
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
            projects.map(({title, description, imgURL, github}, i) => {
              return (
                <a href={github} className="cta">
                  <article className="portfolio-item" key={i}>
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
        </div>
      </section>
    </motion.div>
      )
}

export default Projects