import React from "react";
import Data from "./Data";

import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h1 className="section__title">Skills</h1>
      <span className="section__subtitle">Technology & Frameworks</span>

      <div className="skills__container container">
        {Data.map((item, index) => (
          <div className="skills_icon-container">
            <img
              className="skills__icon"
              src={item}
              alt=" skill img"
              key={index}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
