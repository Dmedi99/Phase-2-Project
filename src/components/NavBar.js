

import React from "react";
import {NavLink} from "react-router-dom"
import './NavBar.css'


//styles to add for NavBar
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
            {/*'to' specifies the path it should navigate to when clicked*/}
            {/*'exact' ensures that the link is active if and only if the URL matches exactly */}
            {/*'stlye gets the styling form linkStyles and activeStyle chages the color when the path is active */}
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