import React from "react";
import "./RecipeCard.css";
import { Link } from "react-router-dom";
const RecipeCard = props => (
  <div className="contimg"  >
      < img  className="img-fluid" alt="image" src={props.image} key ={props.id} className="click-item"/>
    
     <Link to="/details"><h3 id="recipe-detail-title">{props.label}</h3>  </Link>  
   </div>
);

export default RecipeCard;

