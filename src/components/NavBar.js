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