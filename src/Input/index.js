import React, { useState } from "react";
// import Context from "../context";
import "../App.css";

function Input({ createCard }) {
  const [value, setValue] = useState("");

  function handleOnSubmit(event) {
    event.preventDefault();

    createCard(value);
    setValue("");
  }

  return (
    <div className="city__input">
      <form className="cityAddForm" onSubmit={handleOnSubmit}>
        <input
          className="Input"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button className="Button">Add city</button>
      </form>
    </div>
  );
}

export default Input;
