import React from "react";

const Info = () => {
  return (
    <div className="about__info">
      <div className="about__box">
        <i className="bx bx-code-alt about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2+ Years Coding</span>
      </div>

      <div className="about__box">
        <i className="bx bx-code-block about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">12 + Projects</span>
      </div>

      <div className="about__box">
        <i className="bx bx-coffee about__icon"></i>
        <h3 className="about__title">Tea </h3>
        <span className="about__subtitle">4+ Cup a Day !!!</span>
      </div>
    </div>
  );
};

export default Info;
