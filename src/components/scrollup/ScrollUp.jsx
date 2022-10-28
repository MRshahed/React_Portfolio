import React from "react";
import "./ScrollUp.css";

const ScrollUp = () => {
  window.addEventListener("scroll", (e) => {
    const scrollUp = document.querySelector(".scrollup");
    if (window.scrollY >= 560) {
      scrollUp.classList.add("show__scroll");
    } else {
      scrollUp.classList.remove("show__scroll");
    }
  });

  return (
    <a className="scrollup" href="#home">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
