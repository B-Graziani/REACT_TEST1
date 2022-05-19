import Pokemon from "./models/pokemon";
import POKEMONS from "./models/mock-pokemon";

import React, { FunctionComponent, useState, useEffect } from "react";
//OR
// import React from "react";

// const App: React.FC = () => {
const App: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    setPokemons(POKEMONS);
  }, []);

  return (
    <div>
      <h1> Pokedex</h1>
      <p>il y a {pokemons.length} pokemons dans ce pokedex</p>
    </div>
  );
};

export default App;
