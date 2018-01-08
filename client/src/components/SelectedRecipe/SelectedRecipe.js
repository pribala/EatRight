import React, { Component } from "react";
import "./SelectedRecipe.css";
import API from "../../utils/API";
//import { Col, Row } from "../../components/Grid";
class SelectedRecipe extends Component {
  mainPage = () => {
    this.props.onChangeDisplay(false);
  };
  saveRecipes = recipeInfo => {
    console.log(recipeInfo)
    API.saveRecipes(recipeInfo)
      .then(res => {
        console.log("hey it saved");
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="container" id="recipe-detail-container">
      <button className="btn btn-danger" style={{ float: "right" }} onClick={() => this.mainPage()}>Go Back</button>
        <div className="row justify-content-md-center">
          <div className="col-6" id="recipe-detail-description">
            <h1 id="recipe-detail-title">{this.props.recipeObj.recipeTitle}</h1>
            <ul id="ingredient-list">{this.props.recipeObj.ingredient}</ul>
            <div>
              <button
                className="btn btn-primary"
                style={{ float: "right" }}
                onClick={() =>
                  this.saveRecipes({
                    recipeTitle: this.props.recipeObj.recipeTitle,
                    recipeLink: this.props.recipeObj.recipeLink,
                    recipeImage: this.props.recipeObj.recipeImage,
                    healthlabels: this.props.recipeObj.healthlabels,
                    dietlabels: this.props.recipeObj.dietlabels,
                    calories: this.props.recipeObj.calories
                    // date: recipe.pub_date
                  })
                }
              >
                {" "}
                Save recipe
              </button>
              <p id="recipe-detail-servings">
                Servings: {this.props.recipeObj.recipeYield}
              </p>
              <p id="recipe-detail-calories">
                Calories per serving:{" "}
                {Math.round(
                  this.props.recipeObj.calories /
                    this.props.recipeObj.recipeYield
                )}
              </p>
              
              <a href={this.props.recipeObj.recipeLink} target="_blank">Source:{this.props.recipeObj.recipeLink}</a>
            </div>
            <div id="nutrition-labels">
              <div id="diet-labels">
                <p>Diet Labels: {this.props.recipeObj.dietlabels}</p>
              </div>
              <div id="health-labels">
                <p>Health Labels:</p>
                <li>{this.props.recipeObj.healthlabels}</li>
              </div>
              
            </div>
          </div>
          <div className="col" id="recipe-detail-image">
            <img
              className="img-fluid"
              src={this.props.recipeObj.recipeImage}
              alt="finished recipe"
            />
            
          </div>
        </div>
      </div>
    );
  }
}

export default SelectedRecipe;
