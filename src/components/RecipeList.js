import React, { useState, useEffect } from "react";
import './RecipeList.css'
import RecipeItem from "./RecipeItem"

function RecipeList() {
    //state is being set 
    const [recipes, setRecipes] =useState([])

    useEffect(() =>{
        fetch('http://localhost:8000/recipes')
        .then((r)=>r.json())
        .then((recipes) => setRecipes(recipes))
    }, []) //empty dependeny array is needed to avoid reccurring GET requests to the server 

    return (
        <section>
            <h1 className="title">Featured recipes</h1>
            <ul>
                {/*The RecipeItem component is being rendered while passed down the recipe prop and 
                the keys for them since its being mapped */}
                {recipes.map((recipe)=>(
                    <RecipeItem key={recipe.id} recipe={recipe}/>
                ))}
            </ul>
        </section>

    )
}

export default RecipeList