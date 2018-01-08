import React, { Component } from "react";
import "./SelectedRecipe.css";

class SelectedRecipe extends Component{
	constructor(props) {
    super(props);
  }

  mainPage = () => {
  	console.log("Hello Back");
  	console.log(super.props.state.displayChild);
  }
  // state = {
  //   Selectedrecipes: []
  // };

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

// const SelectedRecipe = props => (
  
// );

export default SelectedRecipe;

