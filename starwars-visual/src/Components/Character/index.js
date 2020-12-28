/* eslint-disable import/no-anonymous-default-export */
import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import "./styles.css";

export default ({ character }) => {
  const { addToFavoriteCharacters, favoriteCharacters } = useContext(
    GlobalContext
  );
  const savedFavoriteChar = favoriteCharacters.find(
    (element) => element.url === character.url
  );
  const disabled = savedFavoriteChar ? true : false;

  const getIdFromUrl = function (value) {
    let id = value.match(/([0-9])+/g);
    id = id[0];
    return id;
  };

  return (
    <div className="film_container">
      <div className="char_img">
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${getIdFromUrl(
            character.url
          )}.jpg`}
          alt=""
        ></img>
      </div>

      <div className="char_description">
        <h4>Name:{character.name}</h4>
        <h4> Height: {character.height}</h4>
        <h4> Mass: {character.mass}</h4>
        <h4> Hair Color: {character.hair_color}</h4>
        <button
          disabled={disabled}
          onClick={() => addToFavoriteCharacters(character)}
        >
          Add to Favorites
        </button>
      </div>
    </div>
  );
};
