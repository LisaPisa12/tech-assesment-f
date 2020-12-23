/* eslint-disable import/no-anonymous-default-export */

export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_FAVORITES":
      return {
        ...state,
        favoriteFilms: [action.payload, ...state.favoriteFilms],
      };
    case "ADD_CHARACTER_TO_FAVORITES":
      return {
        ...state,
        favoriteCharacters: [action.payload, ...state.favoriteCharacters],
      };
    default:
      return state;
  }
};
