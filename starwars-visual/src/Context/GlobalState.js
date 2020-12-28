import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  favoriteFilms: localStorage.getItem("favoriteFilms")
    ? JSON.parse(localStorage.getItem("favoriteFilms"))
    : [],
  favoriteCharacters: localStorage.getItem("favoriteCharacters")
    ? JSON.parse(localStorage.getItem("favoriteCharacters"))
    : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favoriteFilms", JSON.stringify(state.favoriteFilms));
    localStorage.setItem(
      "favoriteCharacters",
      JSON.stringify(state.favoriteCharacters)
    );
  }, [state]);

  const addToFavoriteFilms = (film) => {
    dispatch({ type: "ADD_MOVIE_TO_FAVORITES", payload: film });
  };

  const addToFavoriteCharacters = (character) => {
    dispatch({ type: "ADD_CHARACTER_TO_FAVORITES", payload: character });
  };

  return (
    <GlobalContext.Provider
      value={{
        favoriteFilms: state.favoriteFilms,
        favoriteCharacters: state.favoriteCharacters,
        addToFavoriteFilms,
        addToFavoriteCharacters,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
