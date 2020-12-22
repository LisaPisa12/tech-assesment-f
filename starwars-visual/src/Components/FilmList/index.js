/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Film from "../Film";
import "./styles.css";

export default ({ films }) => {
  return (
    <div className="film_list">
      {films.map((film) => {
        return <Film key={film.episode_id} film={film}></Film>;
      })}
    </div>
  );
};
