import React from "react";
import "./RecipeCard.css";

const RecipeCard = props => (
  <div className="contimg"  >
      <img  onClick={props.handleIncrement} className="img-fluid" alt="image" src={props.image} key ={props.id} className="click-item"
      />
      <h3 id="recipe-detail-title">{props.label}</h3>    
   </div>
);

export default RecipeCard;

