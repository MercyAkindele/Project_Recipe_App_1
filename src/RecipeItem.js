import React, {useState, useEffect} from "react";

export default function RecipeItem({recipe, onClickDelete}){

  return(
          <tr>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td><img alt={recipe.name} src={recipe.photo}/></td>
      <td className="content_td"><p>{recipe.ingredients}</p></td>
      <td className="content_td"><p>{recipe.preparation}</p></td>
            <td>
              <button name="delete" onClick = {onClickDelete}>Delete</button>
            </td>
          </tr>

    
  );
}