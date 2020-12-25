import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FilmList from "./Components/FilmList";
import FavoriteFilms from "./Components/FavoriteFilms";
import FavoriteCharacters from "./Components/FavoriteCharacters";
import FilmInformation from "./Components/FilmInformation";
import Spinner from "./Components/Spinner";
import Navbar from "./Components/Navbar";
import ApiClient from "./Services/ApiClient";

import { GlobalProvider } from "./Context/GlobalState";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);

  //change to Services folder
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
    // ApiClient.getFilms()
    //   .then((data) => setFilms(data.results))
    //   .then(setLoading(false));
    //ApiClient.getCharacters().then((data) => setCharacters(data.results));
  }, []);

  return (
    <GlobalProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            {!loading ? (
              <FilmList films={films}></FilmList>
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
          <Route path="/filmInformation" component={FilmInformation}></Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
};

export default App;
