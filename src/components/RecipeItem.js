import React from "react";

//recipe is passed down as a prop from RecipeList. prop destructuring is used to avoid writing props.recipe 
//prop destructuring allows for cleaner code
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
            <p>Dietary Info: {recipe.dietary_info.join(', ')}</p>  {/*.join method is used combine the array of elements using a comma for organization  */}
        </li>
    )
}

export default RecipeItem