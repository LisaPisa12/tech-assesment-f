/* eslint-disable import/no-anonymous-default-export */
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import "./styles.css";
import Character from "../Character";
import moment from "moment";

export default (props) => {
  const { film, id } = props.location.state;

  const { addToFavoriteFilms, favoriteFilms } = useContext(GlobalContext);

  const savedFavoriteFilm = favoriteFilms.find(
    (element) => element.episode_id === film.episode_id
  );
  const disabled = savedFavoriteFilm ? true : false;

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  async function fetchCharacters() {
    try {
      const response = await Promise.all(
        film.characters.map((character) =>
          fetch(character).then((res) => res.json())
        )
      );
      setCharacters(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="film_container">
      <img
        className="film_image"
        alt=""
        src={`/images/films/${film.episode_id}.jpg`}
      />
      <button disabled={disabled} onClick={() => addToFavoriteFilms(film)}>
        Add to Fav
      </button>
      <div className="film_info">
        <h3 className="film_title">{film.title}</h3>
        <h3 className="film_id">Episode ID: {film.episode_id}</h3>
        <h3 className="film_release">
          Release Date: {moment(film.release_date).format("LL")}
        </h3>
        <h3 className="film_dir">Director: {film.director}</h3>
        <h3 className="film_pro">Producer: {film.producer}</h3>

        <h3 className="film_crawl">Opening Crawl:</h3>
        <p> {film.opening_crawl}</p>
      </div>
      <div className="char_div">
        {characters.map((character) => {
          return <Character character={character}></Character>;
        })}
      </div>
    </div>
  );
};
