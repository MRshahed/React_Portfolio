import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";

import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h1 className="section__title">Skills</h1>
      <span className="section__subtitle">My Technical level</span>

      <div className="skills__container container">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
