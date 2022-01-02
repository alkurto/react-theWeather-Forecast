import React from "react";
import Card from "../Card";

function CardList(props) {
  return (
    <div className="CardList">
      {props.cities.map((city, index) => {
        return <Card city={city} index={index} key={index} />;
      })}
    </div>
  );
}

export default CardList;
