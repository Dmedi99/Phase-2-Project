import React from "react";


function RecipeItem({recipe}){



    return(
        <li>
          <h2>{recipe.name}</h2>
            <p>Ingredients: {recipe.ingredients.join(', ')}</p>
            <p>Cook Time: {recipe.cook_time}</p>
            <p>Prep Time: {recipe.prep_time}</p>
            <p>Dietary Info: {recipe.dietary_info.join(', ')}</p>  
        </li>
    )
}

export default RecipeItem