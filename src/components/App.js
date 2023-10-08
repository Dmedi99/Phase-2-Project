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
      <h1 className="title">What'sCookin.com</h1>
      
      {/* Navigation bar */}
      <NavBar className="navbar" />

      {/* Content container with routing */}
      <div className="content-container">
        {/* Switch component for rendering routes*/}
        <Switch>

          {/* Home route */}
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>

        {/* RecipeList route */}
        <Route exact path="/recipes">
          <RecipeList />
        </Route>

        {/* RecipeForm route */}
        <Route exact path="/recipeform">
          <RecipeForm />
        </Route>
      </div>
    </div>
  );
}

export default App;
