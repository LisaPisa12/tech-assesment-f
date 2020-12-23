/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

import "./styles.css";

export default () => (
  <div className="navbar">
    <Link to="/">
      <img className="navbar_logo" src={logo} alt="" />
    </Link>
    <Link to="/FavoriteFilms">Favorite Films</Link>
    <Link to="/FavoriteCharacters">Favorite Characters</Link>
  </div>
);
