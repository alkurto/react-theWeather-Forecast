import React, { useState } from "react";
import "./App.css";
import Input from "./Input";
import CardList from "./CardList";

function App() {
  const [cities, setCities] = useState([
    {
      title: "Minsk",
      description: "snowy",
      temperature: "-7",
      humidity: 80,
      "feels like": "-10",
    },
    {
      title: "Warsaw",
      description: "foggy",
      temperature: "-2",
      humidity: 76,
      "feels like": "-5",
    },
    {
      title: "Vilnus",
      description: "frozy",
      temperature: "-10",
      humidity: 70,
      "feels like": "-10",
    },
  ]);

  function addCard(title) {
    setCities(
      cities.concat([
        {
          title,
          description: "loading..",
          temperature: "loading..",
          humidity: "loading..",
          "feels like": "loading..",
        },
      ])
    );
  }

  return (
    <div className="Main">
      <div className="Container">
        <Input createCard={addCard} />
        <CardList cities={cities} />
      </div>
    </div>
  );
}

export default App;
