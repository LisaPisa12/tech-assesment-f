/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./styles.css";

export default ({ film }) => {
  return (
    <div className="film_container">
      <div className="film_headline">
        <h3 className="film_headline_title">{film.title}</h3>
      </div>
      <img
        className="film_image"
        alt=""
        src={"https://starwars-visualguide.com/assets/img/films/4.jpg"}
      />
    </div>
  );
};
