import React from "react";


function RecipeItem({recipe}){



    return(
        <li>
          <h2>{recipe.name}</h2>
      <p>Ingredients:</p>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
            <p>Cook Time: {recipe.cook_time}</p>
            <p>Prep Time: {recipe.prep_time}</p>
            <p>Dietary Info: {recipe.dietary_info.join(', ')}</p>  
        </li>
    )
}

export default RecipeItem