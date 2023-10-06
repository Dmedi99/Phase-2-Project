import React, {useState} from "react";
import './RecipeForm.css'


function RecipeForm(){
    const [formData, setFormData] = useState({
        name:'',
        ingredients:'',
        cook_time:'',
        prep_time:'',
        dietary_info:'',
    })

    const dietaryOptions = [
        "Low Carb",
        "High Protien",
        "Keto",
        "Paleo",
    ]

    function handleInputChange(e){
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:8000/recipes', {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(formData),
        })
        .then((response)=>{
            if (!response.ok){
                throw new Error('response failed')
            }
            return response.json()
        })
        .then((newRecipe) =>{
            console.log('New Recipe:', newRecipe)
        })
    }


    return (
        <div>
        <h2>Add a New Recipe</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Recipe Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="ingredients">Ingredients:</label>
                <textarea
                    id="ingredients"
                    name="ingredients"
                    value={formData.ingredients}
                    onChange={handleInputChange}
                    required
                ></textarea>
            </div>
            <div>
                <label htmlFor="cook_time">Cook Time:</label>
                <input
                    type="text"
                    id="cook_time"
                    name="cook_time"
                    value={formData.cook_time}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="prep_time">Prep Time:</label>
                <input
                    type="text"
                    id="prep_time"
                    name="prep_time"
                    value={formData.prep_time}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="dietary_info">Dietary Info:</label>
                <select
                    id="dietary_info"
                    name="dietary_info"
                    value={formData.dietary_info}
                    onChange={handleInputChange}
                    required
                >
                    <option value="" disabled>Select dietary info</option>
                    {dietaryOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
)
    
}

export default RecipeForm