import React from "react";
import {NavLink} from "react-router-dom"
import './NavBar.css'


const linkStyles = {
    textDecoration: "none",
    color: "#333",
    padding: "10px 20px",
    marginRight: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    transition: "background-color 0.3s ease-in-out",
  }
  
  function NavBar() {
    return (
      <div className="navbar">
        {/* Navigation links using NavLink with to and exact props */}
        <NavLink
          to="/"
          exact
          style={linkStyles}
          activeStyle={{ backgroundColor: "darkgrey" }}
        >
          Home
        </NavLink>
        <NavLink
          to="/recipes"
          exact
          style={linkStyles}
          activeStyle={{ backgroundColor: "darkgrey" }}
        >
          Recipes
        </NavLink>
        <NavLink
          to="/recipeform"
          exact
          style={linkStyles}
          activeStyle={{ backgroundColor: "darkgrey" }}
        >
          Post a Recipe
        </NavLink>
      </div>
    );
  }
  
  export default NavBar;
  