import React from "react";
import './App.css'
import NavBar from "./NavBar"
import {Route, Switch} from 'react-router-dom'
import Home from "./Home"
import RecipeList from "./RecipeList"
import RecipeForm from "./RecipeForm"



function App() {
  return (
    <div className="app-container">
      <h1 className="title">What'sCookin.com</h1>
            <NavBar className="navbar"/>
            <div className="content-container">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
            <Route exact path="/recipes">
                <RecipeList />
            </Route>
            <Route exact path="/recipeform">
                <RecipeForm />
            </Route>
            </div>
    </div>
  );
}

export default App;
