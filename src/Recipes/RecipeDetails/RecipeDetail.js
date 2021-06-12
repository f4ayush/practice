import React, { useState } from 'react'

export default function RecipeDetail({ recipe, hideRecipe, editRecipe, deleteRecipe }) {
    const [edit, setedit] = useState(false)
    const [updateRecipe, setupdateRecipe] = useState({ id: recipe.id, name: "", source: "", url: "", ingredients: "" })
    const showEdit = () => {
        setedit(true)
    }
    const deleteR = () => {
        deleteRecipe(recipe.id)
        hideRecipe()
    }
    const handleClick = (e) => {
        hideRecipe()
    }

    const handleChange = (e) => {
        let key = e.target.name
        let value = e.target.value
        setupdateRecipe(newRecipe => {
            return { ...newRecipe, [key]: value }
        })
    }

    const save = () => {
        console.log(updateRecipe)
        editRecipe(updateRecipe)
        setedit(false)
    }
    return (
        <div className="recipe-details-container">
            <div className="left">
                <img src={recipe.url} alt="" />
            </div>
            <div className="right">
                <button className="close" onClick={handleClick}>X</button>
                {!edit ?

                    <>
                        <p>{recipe.name}</p>
                        <div className="top">
                            <button onClick={handleClick}>Source</button>
                            <button onClick={deleteR}>Delete</button>
                            <button onClick={showEdit}>Edit</button>
                        </div>
                        <div className="bottom">
                            <p>{recipe.ingredients}</p>
                        </div>
                    </>
                    :
                    <>
                        <div className="a">
                            <input type="text" name="name" id="" placeholder="Recipe Name" onChange={handleChange} />
                            <input type="text" name="source" placeholder="Source" onChange={handleChange} />
                            <input type="text" name="url" id="" placeholder="Recipe Image Url" onChange={handleChange} />
                            <input type="text" name="ingredients" placeholder="Ingredients" onChange={handleChange} />
                            <button onClick={save}>Save</button>
                        </div>
                    </>
                }

            </div>
        </div>
    )
}
