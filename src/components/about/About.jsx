import React from "react";
import AboutImg from "../../assets/about.png";
import CV from "../../assets/John-Cv.pdf";
import Info from "./Info";
import Files from "../../assets/files.svg";
import "./About.css";
const About = () => {
  return (
    <section className="about section" id="about">
      <h1 className="section__title">About Me</h1>
      <span className="section__subtitle">Let Me Indroduce Myself</span>
      <div className="about__container container">
        <img src={AboutImg} alt="about img" className="about__img" />
        <div className="about__data">
          <Info />

          <p className="about__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
            velit id nibh placerat, et rhoncus massa imperdiet. In vestibulum
            aliquet urna in rutrum. In volutpat arcu id nibh pellentesque.
          </p>
          <a className="button button--flex" href={CV} download="">
            Download CV
            <img className="button__icon" src={Files} alt="files" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
