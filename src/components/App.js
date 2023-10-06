import React from "react";
import {Route, Switch} from 'react-router-dom'
import NavBar from "./NavBar"
import Home from "./Home"
import RecipeList from "./RecipeList"
import RecipeForm from "./RecipeForm"

function App() {
  return (
    <div >
            <NavBar />
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
  );
}

export default App;
