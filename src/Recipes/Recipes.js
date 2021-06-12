import React, { useState } from 'react'
import Recipe from './Recipe/Recipe'
import RecipeDetail from './RecipeDetails/RecipeDetail'
import './recipes.css'

export default function Recipes({ recipes, editRecipe, deleteRecipe }) {
    const [display, setdisplay] = useState(false)
    const [recipe, setrecipe] = useState({ id: "", name: '', source: '', url: "", ingredients: '' })
    const showRecipe = (recipe) => {
        setrecipe({ id: recipe.id, name: recipe.name, source: recipe.name, url: recipe.url, ingredients: recipe.ingredients })
        setdisplay(true)
    }
    const hideRecipe = () => {
        setrecipe({ id: "", name: '', source: '', url: "", ingredients: "" })
        setdisplay(false)
    }
    return (
        <div className="recipes-container">
            {recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} showRecipe={showRecipe} />)}
            {
                display &&
                <RecipeDetail className="s" recipe={recipe} hideRecipe={hideRecipe} deleteRecipe={deleteRecipe} editRecipe={editRecipe} />
            }
        </div>
    )
}
