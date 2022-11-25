import React from "react";

const WorksItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt=" " className="work__img" />
      <div className="work__discription-container">
        <p className="work__discription">{item.discription}</p>

        <p className="work__tech">{item.tech}</p>
      </div>
      <div className="work__card-discription">
        <h3 className="work__title">{item.title}</h3>
        <div className="work__button-container">
          <a className="work__button" href={item.live}>
            Live
            <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
          <a className="work__button" href={item.github}>
            Github
            <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorksItems;
