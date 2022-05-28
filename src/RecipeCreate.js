import React, { useState } from "react";

function RecipeCreate({addToList}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
    const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
    const[formData, setFormData] = useState({...initialFormState});
  
  const addRecipeHandler= ({target}) =>{
    setFormData({...formData, [target.name]:target.value,})
  }
  const submitHandler = (e) =>{
    e.preventDefault();
    addToList(formData)
    setFormData({...initialFormState})
  }
  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody className="alternateColor">
          <tr className="row">
            <td><input name="name" type="text" required={true} value={formData.name} 
                  placeholder="Name" onChange={addRecipeHandler}/></td>
            <td><input name="cuisine" type="text" required={true} value={formData.cuisine} 
                  placeholder="Cuisine" onChange={addRecipeHandler}/></td>
            <td><input name="photo" type="text" required={true} value={formData.photo} 
                  placeholder="URL" onChange={addRecipeHandler}/></td>
            <td><textarea name="ingredients" required={true} value={formData.ingredients} 
                  placeholder="Ingredients" onChange={addRecipeHandler}></textarea></td>
            <td><textarea name="preparation"required={true} value={formData.preparation} 
                  placeholder="Preparation" onChange={addRecipeHandler}></textarea></td>
            
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
