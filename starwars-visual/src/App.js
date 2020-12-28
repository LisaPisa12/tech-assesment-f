import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Film from "./Components/Film";
import FavoriteFilms from "./Components/FavoriteFilms";
import FavoriteCharacters from "./Components/FavoriteCharacters";
import FilmInformation from "./Components/FilmInformation";
import Spinner from "./Components/Spinner";
import Navbar from "./Components/Navbar";

import { GlobalProvider } from "./Context/GlobalState";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchFilms() {
      try {
        let res = await fetch("https://swapi.dev/api/films/");
        let data = await res.json();
        setFilms(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchFilms();
  }, []);

  return (
    <GlobalProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            {!loading ? (
              <div className="main_container">
                {films.map((film) => (
                  <Film film={film} key={film.episode_id} />
                ))}
              </div>
            ) : (
              <div className="App_loader">
                <Spinner />
              </div>
            )}
          </Route>
          <Route path="/FavoriteFilms">
            <FavoriteFilms />
          </Route>
          <Route path="/FavoriteCharacters">
            <FavoriteCharacters />
          </Route>
          <Route path="/FilmInformation" component={FilmInformation}></Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
};

export default App;
