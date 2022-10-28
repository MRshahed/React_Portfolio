import React from "react";
import Hand from "../../assets/hand.svg";
import SendBtn from "../../assets/send.svg";
const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Shahed Hossen
        <img src={Hand} alt="hand" className="home__hand " />
      </h1>
      <h3 className="home__subtitle">Web Developer</h3>
      <p className="home__description">
        Turn your idea into web sites. Let's build something amazing together.
      </p>
      <a href="#contact" className="button button--flex">
        Say hello
        <img src={SendBtn} className="button__icon" alt="send" />
      </a>
    </div>
  );
};

export default Data;
