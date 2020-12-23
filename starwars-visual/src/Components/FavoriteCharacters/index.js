/* eslint-disable import/no-anonymous-default-export */
import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";

export default () => {
  const { favoriteFilms } = useContext(GlobalContext);
  return (
    <div>
      <h1>HELLOOO</h1>
    </div>
  );
};
