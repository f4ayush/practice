import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "./navbar.css"

export default function Navbar({ recipe, addRecipe }) {
    const [showFrom, setshowFrom] = useState(false)
    const [newRecipe, setnewRecipe] = useState({ id: "", name: "", source: "", url: "", ingredients: "" })

    const add = () => {
        let id = uuidv4()
        setnewRecipe(newRecipe => ({ ...newRecipe, id }))
        addRecipe(newRecipe)
        setshowFrom(false)
    }

    const handleClick = () => {
        setshowFrom(true)
    }

    const handleChange = (e) => {
        let key = e.target.name
        let value = e.target.value
        setnewRecipe(newRecipe => {
            return { ...newRecipe, [key]: value }
        })
    }
    return (
        <div className="nav">
            <div className="right">Recipe</div>
            <div className="left">
                <button onClick={handleClick}>
                    Add
                </button>
            </div>
            {
                showFrom &&
                <div className="form-div">
                    <input type="text" name="name" id="" placeholder="Recipe Name" onChange={handleChange} />
                    <input type="text" name="source" placeholder="Source" onChange={handleChange} />
                    <input type="text" name="url" id="" placeholder="Recipe Image Url" onChange={handleChange} />
                    <input type="text" name="ingredients" placeholder="Ingredients" onChange={handleChange} />
                    <button onClick={add}>Add</button>
                </div>
            }
        </div>
    )
}
