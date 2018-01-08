import React from "react";
import "./SelectedRecipe.css";
const SelectedRecipe = props => (
  <div className="contimg"  >
      <p>{props.recipeObj.recipeTitle}</p>
      <img  className="img-fluid" alt="recipe" src={props.recipeObj.recipeImage}/>
      <p>{props.recipeObj.healthlabels}</p>
      <p>{props.recipeObj.dietlabels}</p>
      <p>{props.recipeObj.calories}</p>
      <p>{props.recipeObj.recipeLink}</p>
 </div>
);

export default SelectedRecipe;

