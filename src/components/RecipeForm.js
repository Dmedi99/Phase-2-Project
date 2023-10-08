/* 
The RecipeForm component is responsible for creating a form that the user can use to 
POST a recipe to the recipes.json server. The form must take in the values the 
user inputs and follow the same strucutre as the json to avoid running into errors. 
This is a controlled component as is keeps the components state (in this case setFormData)
in sync with users input. This happens in the handleInputChange function. it targets the value
and then sets the state. Once the user is done added data to the form the user will hit 
the submit button which will then run handleSubmit. This makes the POST to the json server and will 
make it aware if there are any errors via the console. A succesful post will add the data to the 
server and it will also appear in the Recipes page! 
*/


import React, { useState } from "react";
import './RecipeForm.css';

function RecipeForm() {
    const [formData, setFormData] = useState({
      name: "",
      ingredients: "",
      cook_time: "",
      prep_time: "",
      dietary_info: "",
    });

    function handleInputChange(e) {
        const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    
    const newRecipe = {
      name: formData.name,
      ingredients: formData.ingredients.split("\n").map((ingredient) => ingredient.trim()),
      cook_time: formData.cook_time,
      prep_time: formData.prep_time,
      dietary_info: formData.dietary_info.split(",").map((info) => info.trim()),
    };

    fetch("http://localhost:8000/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
      .then((response) => {
        if (response.ok) {
          setFormData({
            name: "",
            ingredients: "",
            cook_time: "",
            prep_time: "",
            dietary_info: "",
          });
        } else {
          console.error("Failed to add a new recipe.");
        }
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Recipe Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Ingredients (One per line):
          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Cook Time:
          <input
            type="text"
            name="cook_time"
            value={formData.cook_time}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Prep Time:
          <input
            type="text"
            name="prep_time"
            value={formData.prep_time}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Dietary Info (Comma-separated):
          <input
            type="text"
            name="dietary_info"
            value={formData.dietary_info}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RecipeForm;
