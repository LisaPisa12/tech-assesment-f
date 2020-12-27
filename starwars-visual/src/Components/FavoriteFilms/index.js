/* eslint-disable import/no-anonymous-default-export */
import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import Film from "../Film";

export default () => {
  const { favoriteFilms } = useContext(GlobalContext);
  return (
    <div className="films_container">
      {/* <div className="header">
        <h1 className="heading">My Favorites</h1>
        <span className="film-count">
          {favoriteFilms.length} {favoriteFilms.length === 1 ? "Film" : "Films"}
        </span>
      </div> */}

      {favoriteFilms.length > 0 ? (
        favoriteFilms.map((film) => <Film film={film} key={film.episode_id} />)
      ) : (
        <h2 className="no-films">You have no favorites</h2>
      )}
    </div>
  );
};
