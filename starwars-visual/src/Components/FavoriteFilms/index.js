/* eslint-disable import/no-anonymous-default-export */
import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import Film from "../Film";

export default () => {
  const { favoriteFilms } = useContext(GlobalContext);
  return (
    // <Container>
    //   <h1>My Favorite Films</h1>

    //   {favoriteFilms.length === 1 ? "Film" : "Films"}
    //   {favoriteFilms.length > 0 ? (
    //     //<div className="film_list">
    //     <Grid column={3}>
    //       {favoriteFilms.map((film, i) => (
    //         <Film film={film} key={i} />
    //       ))}
    //     </Grid>
    //   ) : (
    //     //</div>
    //     <h2>You have no favorites</h2>
    //   )}
    // </Container>

    <div className="container">
      <div className="header">
        <h1 className="heading">My Favorites</h1>
        <span className="film-count">
          {favoriteFilms.length} {favoriteFilms.length === 1 ? "Film" : "Films"}
        </span>
      </div>

      {favoriteFilms.length > 0 ? (
        <div className="film_list">
          {favoriteFilms.map((film) => (
            <Film film={film} key={film.episode_id} />
          ))}
        </div>
      ) : (
        <h2 className="no-films">You have no favorites</h2>
      )}
    </div>
  );
};
