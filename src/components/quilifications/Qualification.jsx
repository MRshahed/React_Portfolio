import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="qualification">
      <h1 className="section__title">Qualification</h1>
      <span className="section__subtitle">Education & Experiences</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div className="qualification__data-section">
                <h3 className="qualification__title">
                  Full-Stack Web Development BootCamp
                </h3>
                <span className="qualification__subtitle">Udemy.com</span>
                <div className="qualification__calender">
                  <i className="bx bx-calendar"></i>2021 - 2021
                </div>
                <p className="qualification__description">
                  I have completed "The Complte Full-Stack Web Development
                  BootCamp" Course from udemy.com taught by DR. Angela YU. I've
                  learned The MERN stack Development and have completed 7+
                  projects.
                </p>
              </div>
            </div>
            <div className="qualification__data">
              <div className="qualification__data-section">
                <h3 className="qualification__title">
                  Bechelor of Science in
                  <br />
                  Computer Science & Engineering
                </h3>
                <span className="qualification__subtitle">
                  Feni - University
                </span>
                <div className="qualification__calender">
                  <i className="bx bx-calendar"></i>2017 - 2021
                </div>
                <p className="qualification__description">
                  I have completed my graduation "Bechelor of Science in
                  Computer Science and Engineering "from department of Computer
                  Science & Engineering Feni University.
                </p>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div className="qualification__data-section">
                <h3 className="qualification__title"> Web Developer</h3>
                <span className="qualification__subtitle">
                  Freelence - Fiver
                </span>
                <div className="qualification__calender">
                  <i className="bx bx-calendar"></i>2021 - present
                </div>
                <p className="qualification__description">
                  I've been working as a Freelence Developer for some times. it
                  mostly for gathering knowledge about real world projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
