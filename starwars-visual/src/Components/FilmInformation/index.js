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

  const peopleImgs = [
    "https://swapi.dev/api/people/1/",
    "https://swapi.dev/api/people/2/",
    "https://swapi.dev/api/people/3/",
    "https://swapi.dev/api/people/4/",
    "https://swapi.dev/api/people/5/",
    "https://swapi.dev/api/people/6/",
    "https://swapi.dev/api/people/7/",
    "https://swapi.dev/api/people/8/",
    "https://swapi.dev/api/people/9/",
    "https://swapi.dev/api/people/10/",
    "https://swapi.dev/api/people/11/",
    "https://swapi.dev/api/people/12/",
    "https://swapi.dev/api/people/13/",
    "https://swapi.dev/api/people/14/",
    "https://swapi.dev/api/people/15/",
    "https://swapi.dev/api/people/16/",
    "https://swapi.dev/api/people/17/",
    "https://swapi.dev/api/people/18/",
    "https://swapi.dev/api/people/19/",
    "https://swapi.dev/api/people/20/",
    "https://swapi.dev/api/people/21/",
    "https://swapi.dev/api/people/22/",
    "https://swapi.dev/api/people/23/",
    "https://swapi.dev/api/people/24/",
    "https://swapi.dev/api/people/25/",
    "https://swapi.dev/api/people/26/",
    "https://swapi.dev/api/people/27/",
    "https://swapi.dev/api/people/28/",
    "https://swapi.dev/api/people/29/",
    "https://swapi.dev/api/people/30/",
    "https://swapi.dev/api/people/31/",
    "https://swapi.dev/api/people/32/",
    "https://swapi.dev/api/people/33/",
    "https://swapi.dev/api/people/34/",
    "https://swapi.dev/api/people/35/",
    "https://swapi.dev/api/people/36/",
    "https://swapi.dev/api/people/37/",
    "https://swapi.dev/api/people/38/",
    "https://swapi.dev/api/people/39/",
    "https://swapi.dev/api/people/40/",
    "https://swapi.dev/api/people/41/",
    "https://swapi.dev/api/people/42/",
    "https://swapi.dev/api/people/43/",
    "https://swapi.dev/api/people/44/",
    "https://swapi.dev/api/people/45/",
    "https://swapi.dev/api/people/46/",
    "https://swapi.dev/api/people/47/",
    "https://swapi.dev/api/people/48/",
    "https://swapi.dev/api/people/49/",
    "https://swapi.dev/api/people/50/",
    "https://swapi.dev/api/people/51/",
    "https://swapi.dev/api/people/52/",
    "https://swapi.dev/api/people/53/",
    "https://swapi.dev/api/people/54/",
    "https://swapi.dev/api/people/55/",
    "https://swapi.dev/api/people/56/",
    "https://swapi.dev/api/people/57/",
    "https://swapi.dev/api/people/58/",
    "https://swapi.dev/api/people/59/",
    "https://swapi.dev/api/people/60/",
    "https://swapi.dev/api/people/61/",
    "https://swapi.dev/api/people/62/",
    "https://swapi.dev/api/people/63/",
    "https://swapi.dev/api/people/64/",
    "https://swapi.dev/api/people/65/",
    "https://swapi.dev/api/people/66/",
    "https://swapi.dev/api/people/67/",
    "https://swapi.dev/api/people/68/",
    "https://swapi.dev/api/people/69/",
    "https://swapi.dev/api/people/70/",
    "https://swapi.dev/api/people/71/",
    "https://swapi.dev/api/people/72/",
    "https://swapi.dev/api/people/73/",
    "https://swapi.dev/api/people/74/",
    "https://swapi.dev/api/people/75/",
    "https://swapi.dev/api/people/76/",
    "https://swapi.dev/api/people/77/",
    "https://swapi.dev/api/people/78/",
    "https://swapi.dev/api/people/79/",
    "https://swapi.dev/api/people/80/",
    "https://swapi.dev/api/people/81/",
    "https://swapi.dev/api/people/82/",
    "https://swapi.dev/api/people/83/",
  ];

  const getIdFromUrl = function (value) {
    let id = value.match(/([0-9])+/g);
    id = id[0];
    return id;
  };

  const ids = peopleImgs.map((url) => {
    return getIdFromUrl(url);
  });

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
      <img className="film_image" alt="" src={`/images/films/1.jpg`} />
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
        {characters.map((character, index) => {
          return <Character character={character} id={ids[index]}></Character>;
        })}
      </div>
    </div>
  );
};
