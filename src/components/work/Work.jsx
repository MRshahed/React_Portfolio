import React from "react";
import Works from "./Works";
import "./Work.css";

const Work = () => {
  return (
    <section className="work section" id="portfolio">
      <h1 className="section__title">Portfolio</h1>
      <span className="section__subtitle">Most Recent Work</span>
      <Works />
    </section>
  );
};

export default Work;
