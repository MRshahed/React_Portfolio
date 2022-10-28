import React from "react";
import Scroll from "../../assets/scroll.svg";
const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <img src={Scroll} alt="scroll" className="home__scroll-mouse wheel" />
        <span className="home__scroll-name">Scroll Down</span>
        <i className="uil uil-arrow-down home__scroll-arrow"></i>
      </a>
    </div>
  );
};

export default ScrollDown;
