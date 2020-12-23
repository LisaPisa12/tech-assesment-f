/* eslint-disable import/no-anonymous-default-export */
import React, { useContext } from "react";
import "./styles.css";
import { GlobalContext } from "../../Context/GlobalState";

export default ({ film }) => {
  const { addToFavoriteFilms, favoriteFilms } = useContext(GlobalContext);
  const savedFavoriteFilm = favoriteFilms.find(
    (element) => element.id === film.id
  );
  const disabled = savedFavoriteFilm ? true : false;

  return (
    <div className="film_container">
      <div className="film_headline">
        <h3 className="film_title">{film.title}</h3>
      </div>
      <img
        className="film_image"
        alt=""
        src={"https://starwars-visualguide.com/assets/img/films/4.jpg"}
      />
      <button disabled={disabled} onClick={() => addToFavoriteFilms(film)}>
        More info
      </button>
    </div>
  );
};
