/* 
The NavBar component is at the top of the page below the first header of the page.
It's responsible to let the user navigate to the page they click. If they want to nagivate 
to the recipe page it will take them to the list of recipes. If they want to go back to the home 
page they can click on Home and it will take them back. It also adds some style to the NAvBar 
instead of just having the plain words. 
*/


import React from "react";
import {NavLink} from "react-router-dom"
import './NavBar.css'

const linkStyles ={
    textDecoration: "none", 
    color: "black", 
    padding: "10px 20px", 
    marginRight: "10px", 
    borderRadius: "5px", 
    border: "1px solid #ccc",
}

function NavBar(){
    return (
        <div class="navbar">
            <NavLink
            to="/"
            exact
            style={linkStyles}
            activestyle={{background:"darkgrey"}}
            >
                Home
            </NavLink>
            <NavLink
            to="/recipes"
            exact 
            style={linkStyles}
            activestyle={{background:"darkgrey"}}
            >
                Recipes
            </NavLink>
            <NavLink
            to="/recipeform"
            exact
            style={linkStyles}
            activestyle={{background:"darkgrey"}}
            >
                Post a Recipe
            </NavLink>
        </div>
    )

}

export default NavBar