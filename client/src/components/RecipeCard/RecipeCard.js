import React from "react";
import "./RecipeCard.css";
import { Link } from "react-router-dom";
const RecipeCard = props => (
  <div className="container">
      <img  className="img-fluid" alt="recipe" src={props.image} key ={props.id}  />
    <Link to> <h3 id="recipe-detail-title">{props.label}</h3>  </Link>
   </div>
);

export default RecipeCard;