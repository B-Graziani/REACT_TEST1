import React, { FunctionComponent } from "react";
import PokemonList from "./pages/pokemon-list";
import PokemonDetail from "./pages/pokemon-detail";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//OR
// import React from "react";

// const App: React.FC = () => {
const App: FunctionComponent = () => {
  return (
    <Router>
      <div>
        {/* la barre de navigation à toutes les pages */}
        <nav>
          <div className="nav-wrapper teal">
            <Link to="/" className="brand-logo center">
              Pokédex
            </Link>
          </div>
        </nav>
        {/* le systeme de gestion des routes de notre app */}
        <Switch>
          <Route exact path="/" component={PokemonList} />
          <Route exact path="/pokemons" component={PokemonList} />
          <Route path="/pokemons/:id" component={PokemonDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
