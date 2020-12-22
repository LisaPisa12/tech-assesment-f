const BASE_URL = "https://swapi.dev/api/";

const fetchRequest = (url) => {
  fetch(`${BASE_URL}/${url}`);
};
