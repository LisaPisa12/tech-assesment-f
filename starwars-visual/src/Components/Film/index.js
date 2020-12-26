/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default ({ film }) => {
  return (
    <Link
      to={{
        pathname: "/FilmInformation",
        state: { film },
      }}
    >
      <div className="film_container">
        <div className="film_headline">
          <h3 className="film_title">{film.title}</h3>
        </div>
        <img
          className="film_image"
          alt=""
          src={`/images/films/${film.episode_id}.jpg`}
        />
      </div>
    </Link>
  );
};
