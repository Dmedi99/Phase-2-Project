/* 
The NavBar component is at the top of the page below the first header of the page.
It's responsible to let the user navigate to the page they click. If they want to nagivate 
to the recipe page it will take them to the list of recipes. If they want to go back to the home 
page they can click on Home and it will take them back. It also adds some style to the NAvBar 
instead of just having the plain words. 


The way this works it by first importing NavLink from the React library and use the to and 
exact props. To specifies the exact URL path the link should navigate to when clicked. The 
exact prop ensures that the link is active ONLY if the URL matches exactly. This avois similar
URLS to become active. 
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