/* eslint-disable import/no-anonymous-default-export */
import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import "./styles.css";

export default ({ character, id }) => {
  const { addToFavoriteCharacters, favoriteCharacters } = useContext(
    GlobalContext
  );
  const savedFavoriteChar = favoriteCharacters.find(
    (element) => element.url === character.url
  );
  const disabled = savedFavoriteChar ? true : false;

  return (
    <div className="film_characters">
      <div className="char_img">
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt=""
        ></img>
      </div>
      <div className="char_name">Character Name:{character.name}</div>
      <div className="char_description">
        Height: {character.height}
        Mass: {character.mass}
        Hair Color: {character.hair_color}
      </div>
      <button
        disabled={disabled}
        onClick={() => addToFavoriteCharacters(character)}
      >
        Add to Favorites
      </button>
    </div>
  );
};
