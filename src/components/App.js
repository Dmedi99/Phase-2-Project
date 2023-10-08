import React from "react";
import './App.css'
import NavBar from "./NavBar"
import { Route, Switch } from 'react-router-dom'
import Home from "./Home"
import RecipeList from "./RecipeList"
import RecipeForm from "./RecipeForm"

function App() {
  return (
    <div className="app-container">
      {/* Main title */}
      <h1 className="app-title">What'sCookin.com</h1>

      {/* Navigation bar */}
      <NavBar className="app-nav-bar" />

      {/* Content container with routing */}
      <div className="app-content">
        {/* Switch component for rendering routes*/}
        <Switch>

          {/* Home route */}
          <Route exact path="/">
            <Home />
          </Route>

          {/* RecipeList route */}
          <Route exact path="/recipes">
            <RecipeList />
          </Route>

          {/* RecipeForm route */}
          <Route exact path="/recipeform">
            <RecipeForm />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
