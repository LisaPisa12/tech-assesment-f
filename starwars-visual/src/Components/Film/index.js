/* eslint-disable import/no-anonymous-default-export */
import React, { useContext } from "react";
import "./styles.css";
import { GlobalContext } from "../../Context/GlobalState";
import { Link } from "react-router-dom";

export default ({ film }) => {
  // const { addToFavoriteFilms, favoriteFilms } = useContext(GlobalContext);
  // const savedFavoriteFilm = favoriteFilms.find(
  //   (element) => element.id === film.id
  // );
  // const disabled = savedFavoriteFilm ? true : false;

  return (
    <div className="film_container">
      <img
        className="film_image"
        alt=""
        src={"https://starwars-visualguide.com/assets/img/films/4.jpg"}
      />
      <div className="film_headline">
        <h3 className="film_title">{film.title}</h3>
      </div>
      {/* <button disabled={disabled} onClick={() => addToFavoriteFilms(film)}>
        Add to Fav
      </button> */}
      <Link
        to={{
          pathname: "/FilmInformation",
          state: { film },
        }}
      >
        <button>More</button>
      </Link>
    </div>
  );
};
