// import React from "react";
// import "./SelectedRecipe.css";
// const SelectedRecipe = props => (
//   <div className="contimg"  >
//       <p>{props.recipeObj.recipeTitle}</p>
//       <img  className="img-fluid" alt="recipe" src={props.recipeObj.recipeImage}/>
//       <p>{props.recipeObj.healthlabels}</p>
//       <p>{props.recipeObj.dietlabels}</p>
//       <p>{props.recipeObj.calories}</p>
//       <p>{props.recipeObj.recipeLink}</p>
//       <button>Back</button>
//   </div>

// );

// export default SelectedRecipe;

import React, { Component } from "react";
import "./SelectedRecipe.css";

class SelectedRecipe extends Component{

  mainPage = () => {
  	this.props.onChangeDisplay(false);  
  }
  
  render() {
    return (
        <div className="contimg"  >
      <p>{this.props.recipeObj.recipeTitle}</p>
      <img  className="img-fluid" alt="recipe" src={this.props.recipeObj.recipeImage}/>
      <p>{this.props.recipeObj.healthlabels}</p>
      <p>{this.props.recipeObj.dietlabels}</p>
      <p>{this.props.recipeObj.calories}</p>
      <p>{this.props.recipeObj.recipeLink}</p>
      <button onClick={() => this.mainPage()}>Go Back</button>
 </div>
    );
  }
}

export default SelectedRecipe;


