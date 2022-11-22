import React from "react";
import AboutImg from "../../assets/S2.jpg";
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
          <p className="about__description">
            I'm a passionate web application Developer from Bangladesh. With
            Hands-on experience Developing consumer-focused websites using
            modern web frameworks & Technology like Reactjs, Nodejs, Expressjs,
            & MongoDB (MERN). I've Good knowledge Of Designing Modern UI/UX,
            Managing Databases, Web Security & maintaining speed. For me
            learning new technology is fun and it helps me build websites that
            improve lives.
            <br /> I love Tea but Loves Coding More.
          </p>
          <Info />
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
