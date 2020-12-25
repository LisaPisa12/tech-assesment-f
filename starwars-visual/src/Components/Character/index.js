/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import logo from "../../images/logo.png";
import "./styles.css";

export default ({ character }) => {
  return (
    <div className="film_characters">
      <div className="char_name">Character Name:{character.name}</div>
      <div className="char_img">
        <img src={logo} alt=""></img>
      </div>
      <div className="char_description">
        Height: {character.height}
        Mass: {character.mass}
        Hair Color: {character.hair_color}
      </div>
    </div>
  );
};
