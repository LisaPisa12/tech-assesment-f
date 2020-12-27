/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default () => (
  // <Menu inverted>
  //   <Container>
  //     <Link to="/">
  //       <Menu.Item name="Star Wars Guide"></Menu.Item>
  //     </Link>
  //     <Link to="/FavoriteFilms">
  //       <Menu.Item name="Favorite Films"></Menu.Item>
  //     </Link>
  //     <Link to="/FavoriteCharacters">
  //       <Menu.Item name="Favorite Characters"></Menu.Item>
  //     </Link>
  //   </Container>
  // </Menu>
  <div className="navbar">
    <Link to="/">
      <h1 className="content">Star Wars Guide</h1>
    </Link>
    <Link to="/FavoriteFilms">Favorite Films</Link>
    <Link to="/FavoriteCharacters">Favorite Characters</Link>
  </div>
);
