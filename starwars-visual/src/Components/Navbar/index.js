/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default () => (
  <div className="navbar">
    <Link to="/">
      <strong>Star Wars Guide</strong>
    </Link>
    <Link to="/FavoriteFilms">Favorite Films</Link>
    <Link to="/FavoriteCharacters">Favorite Characters</Link>
  </div>
);
