/* eslint-disable import/no-anonymous-default-export */
import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import Character from "../Character";

export default () => {
  const { favoriteCharacters } = useContext(GlobalContext);
  return (
    // <Card>
    //   <Card.Content>
    //     <h2 class="ui header">My Favorite Films</h2>

    //     {favoriteCharacters.length === 1 ? "Character" : "Characters"}
    //     {favoriteCharacters.length > 0 ? (
    //       // <div className="film_list">
    //       favoriteCharacters.map((character, i) => (
    //         <Character character={character} key={i} />
    //       ))
    //     ) : (
    //       // </div>
    //       <h2 class="ui header">You have no favorites</h2>
    //     )}
    //   </Card.Content>
    // </Card>
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
