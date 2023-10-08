/* 
The RecipeItem component is responsible for iterating the data fetched from the 
data.json. That data is passed down from the RecipeList component (hence recipe 
  being an argument for the component) Most of the work is done in the return 
  JSX of the component. It get the recipe name, ingredients, cook time, prep time 
  and the dietary information. It uses the .join method meaning which takes in 1 argument 
  (the separator that will be used to join the elements) in this case a comma 
*/


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