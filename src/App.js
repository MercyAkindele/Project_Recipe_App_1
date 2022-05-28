import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  
  function deleteRecipe(targetIndex){
    const newRecipeArray= recipes.filter((recipe, index) =>{
      return index !== targetIndex;
    })
    setRecipes(newRecipeArray);
  }
     const addToList= (additionalRecipe) => setRecipes([ ...recipes, additionalRecipe]);
    
  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1 className="header">Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate addToList={addToList}/>
      
    </div>
  );
}

export default App;
