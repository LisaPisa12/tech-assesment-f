/* eslint-disable import/no-anonymous-default-export */
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import ApiClient from "../../Services/ApiClient";
import "./styles.css";
import Character from "../Character";
import moment from "moment";

export default (props) => {
  const { film } = props.location.state;
  const { addToFavoriteFilms, favoriteFilms } = useContext(GlobalContext);
  const savedFavoriteFilm = favoriteFilms.find(
    (element) => element.id === film.id
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

  // useEffect(() => {
  //   film.characters = film.characters.map(async (character) => {
  //     const data = await ApiClient.getCharacter(character);
  //     return data;
  //   });
  //   setCharacters(film.characters);
  // }, []);

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
      <div className="film_episode_id">
        <h3 className="film_id">Episode ID: {film.episode_id}</h3>
      </div>
      <div className="film_crawl">
        <h3 className="film_crawl">Opening Crawl:</h3>
        <p> {film.opening_crawl}</p>
      </div>
      <div className="film_director">
        <h3 className="film_dir">Director: {film.director}</h3>
      </div>
      <div className="film_producer">
        <h3 className="film_pro">Producer: {film.producer}</h3>
      </div>
      <div className="film_release">
        <h3 className="film_release">
          Release Date: {moment(film.release_date).format("LL")}
        </h3>
      </div>
      <div className="char_div">
        {characters.map((character, i) => {
          return <Character key={i} character={character}></Character>;
        })}
      </div>
      <button disabled={disabled} onClick={() => addToFavoriteFilms(film)}>
        Add to Fav
      </button>
    </div>
  );
};
