/* 
The RecipeList component is responsible for fetching the data (using useEffect) from the data.json server 
and setting state for the recipes. That state is then passed to the RecipeItem component 
to get rendered on the page. 
*/


import React, { useState, useEffect } from "react";
import './RecipeList.css'
import RecipeItem from "./RecipeItem"

function RecipeList() {
    const [recipes, setRecipes] =useState([])

    useEffect(() =>{
        fetch('http://localhost:8000/recipes')
        .then((r)=>r.json())
        .then((recipes) => setRecipes(recipes))
    }, [])

    return (
        <section>
            <h1 className="title">Featured recipes</h1>
            <ul>
                {recipes.map((recipe)=>(
                    <RecipeItem key={recipe.id} recipe={recipe}/>
                ))}
            </ul>
        </section>

    )
}

export default RecipeList