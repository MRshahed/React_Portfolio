import React from "react";

const WorksItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <div>
        <img src={item.image} alt=" " className="work__img" />

        <p className="work__img-discription">{item.discription}</p>
      </div>
      <div className="work__card-discription">
        <h3 className="work__title">{item.title}</h3>
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
  );
};

export default WorksItems;
