import React from "react";
import "../App.css";

function Card({ city }) {
  return (
    <div className="Card">
      <div className="card__body">
        <img className="card__img" alt="icon" />
        <h3 className="card__title">{city.title}</h3>
        <div className="card__description">{city.description}</div>
        <div className="card__temperature">{city.temperature}</div>
      </div>
      <div className="card__information">
        <div>Humidity: {city.humidity}</div>
        <div>Feels like: {city["feels like"]}</div>
      </div>
    </div>
  );
}

export default Card;
