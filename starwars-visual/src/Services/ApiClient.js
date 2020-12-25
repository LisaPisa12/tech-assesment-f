/* eslint-disable import/no-anonymous-default-export */
const BASE_URL = "https://swapi.dev/api";

export default {
  getFilms: () => {
    return fetchRequest(`films`);
  },
  getCharacters: () => {
    return fetchRequest(`people`);
  },
  getCharacter: async (character) => {
    const characterURL = new URL(character);
    const res = await fetch(characterURL);
    const data = await res.json();
  },
};

const fetchRequest = (url) => {
  return fetch(`${BASE_URL}/${url}`)
    .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((err) => {
      console.log(`${err.message} while fetching /${url}`);
    });
};
