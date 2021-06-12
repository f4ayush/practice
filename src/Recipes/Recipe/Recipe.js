import React from 'react'
import './recipe.css'
export default function Recipe({ recipe, showRecipe }) {
    const handleClick = (e) => {
        showRecipe(recipe)
    }
    return (
        <div className="recipe-container" id={recipe.id} onClick={handleClick}>
            <img className="recipe-image" id={recipe.id} src={recipe.url} alt="" />
            <p id={recipe.id}>{recipe.name}</p>
        </div>
    )
}
