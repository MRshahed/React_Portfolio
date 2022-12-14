import React from "react";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import Img from "../../assets/profile.png";
import "./Home.css";
const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container">
        <div className="home__content grid">
          <Social />

          <div className="home__img">
            <img src={Img} alt="shahed hossen" />
          </div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
