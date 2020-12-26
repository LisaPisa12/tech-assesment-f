/* eslint-disable import/no-anonymous-default-export */
import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import Character from "../Character";
export default () => {
  const { favoriteCharacters } = useContext(GlobalContext);
  return (
    <div className="container">
      <div className="header">
        <h1 className="heading">My Favorites</h1>
        <span className="character-count">
          {favoriteCharacters.length}{" "}
          {favoriteCharacters.length === 1 ? "Character" : "Characters"}
        </span>
      </div>
      {favoriteCharacters.length > 0 ? (
        <div className="film_list">
          {favoriteCharacters.map((character, i) => (
            <Character character={character} key={i} />
          ))}
        </div>
      ) : (
        <h2 className="no-films">You have no favorites</h2>
      )}
    </div>
  );
};
