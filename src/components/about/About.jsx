import React from "react";
import AboutImg from "../../assets/about.png";
import CV from "../../assets/Shahed_CV.pdf";
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
            I'm a Web Designer and Developer from Bangladesh. Coding is where i
            found my passion. for me learing new technology is fun and it helps
            me build websites that improve lives. I love Tea but Loves Coding
            More.
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
