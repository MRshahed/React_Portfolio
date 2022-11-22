import React from "react";
import Data from "./Data";

import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h1 className="section__title">Skills</h1>
      <span className="section__subtitle">Technology & Frameworks</span>

      <div className="skills__container container">
        {Data.map(({ name, id, url }) => (
          <div className="skills_icon-container" key={(id + name).toString()}>
            <img
              className="skills__icon"
              src={url}
              alt=" skill img"
              key={(id + 2).toString()}
            />
            <h3 className="skills__icon-name" key={(id + 1).toString()}>
              {name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
