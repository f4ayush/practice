import { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Recipes from "./Recipes/Recipes";
import { pannerPic } from './url'

function App() {
  const [recipe, setrecipe] = useState([{ id: '0', name: 'Paneer', source: 'self', url: pannerPic, ingredients: 's' }])
  const addRecipe = (newRecipe) => {
    setrecipe([...recipe, newRecipe])
  }

  const editRecipe = ({ id, name, source, url, ingredients }) => {
    // let updateRecipe = recipe.find(r => r.id === id)
    alert(id)
    // updateRecipe = { ...updateRecipe, name, source, url, ingredients }
    setrecipe(recipe => {
      recipe.map(r => {
        if (r.id === id) {
          r.name = name
          r.source = source
          r.url = url
          r.ingredients = ingredients
        }
        return r
      })
      return recipe
    })

  }

  const deleteRecipe = (id) => {
    let recipes = recipe.filter((item) => item.id !== id)
    setrecipe(recipes)

  }

  return (
    <div>
      <Navbar recipe={recipe} addRecipe={addRecipe} />
      <Recipes recipes={recipe} editRecipe={editRecipe} deleteRecipe={deleteRecipe} />
    </div>
  );
}

export default App;
