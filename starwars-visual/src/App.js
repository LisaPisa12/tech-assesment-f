import "./App.css";
import { useEffect, useState } from "react";
import FilmList from "./Components/FilmList";
import Navbar from "./Components/Navbar";
import ApiClient from "./Services/ApiClient";

const App = () => {
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    ApiClient.getFilms().then((data) => setFilms(data.results));
    ApiClient.getCharacters().then((data) => setPeople(data.results));
  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>
      <FilmList films={films}></FilmList>
    </div>
  );
};

export default App;
