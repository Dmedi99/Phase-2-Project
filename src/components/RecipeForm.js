import React, { useState } from "react";
import './RecipeForm.css';

function RecipeForm() {
    //setting state for the form data 
    const [formData, setFormData] = useState({
        name: "",
        ingredients: "",
        cook_time: "",
        prep_time: "",
        dietary_info: "",
    });
    //The fucntion makes the component a controlled component as it keeps it in sync with user input by getting the target value
    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    //function used to handle subimission of the form
    function handleSubmit(e) {
        e.preventDefault();

        //newRecipe creates an object from the form data 
        const newRecipe = {
            name: formData.name,
            //Used .split to split the ingredients into an array (each line is one ingredient) joined with .trim to removed unnecessary white space
            ingredients: formData.ingredients.split("\n").map((ingredient) => ingredient.trim()),
            cook_time: formData.cook_time,
            prep_time: formData.prep_time,
            //Used .split to split it into an array joined with .trim for white space removal
            dietary_info: formData.dietary_info.split(",").map((info) => info.trim()),
        };
        //Sends a post request to the JSON server 
        fetch("http://localhost:8000/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newRecipe),
        })
            //resets the form data if the POST request is succesful 
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
