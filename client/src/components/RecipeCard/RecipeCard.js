import React from "react";
import "./RecipeCard.css";
import { Link } from "react-router-dom";
const RecipeCard = props => (
  <div className="contimg"  >
      < img  className="img-fluid click-item" alt="recipe" src={props.image} key ={props.id} />
    
     <Link to="/details"><h3 id="recipe-detail-title">{props.label}</h3>  </Link>  
   </div>
);

export default RecipeCard;

