import React, { useState, useEffect } from "react";
import './RecipeList.css'
import RecipeItem from "./RecipeItem"

function RecipeList() {
    // State is being set to store the list of recipes
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        // Make a GET request to fetch recipes from the server
        fetch('http://localhost:8000/recipes')
            .then((r) => r.json())
            .then((recipes) => setRecipes(recipes))
    }, []) //empty dependeny array is needed to avoid reccurring GET requests to the server 

    return (
        <section>
            <h1 className="title">Featured recipes</h1>
            <ul>
                {/*Map on the recipes. For each recipe it will render RecipeItem and pass down recipe as a prop*/}
                {recipes.map((recipe) => (
                    <RecipeItem key={recipe.id} recipe={recipe} />
                ))}
            </ul>
        </section>

    )
}

export default RecipeList