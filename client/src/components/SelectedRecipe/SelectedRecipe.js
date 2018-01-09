import React, { Component } from "react";
import "./SelectedRecipe.css";
import API from "../../utils/API";
//import Jumbotron from "../../components/Jumbotron";
//import { Link } from "react-router-dom";
import { Col, Row ,Container} from "../../components/Grid";
//import { List, ListItem } from "../../components/List";
import { Input, FormBtn,TextArea } from "../../components/Form";
//import RecipeCard from "../../components/RecipeCard";
//import SelectedRecipe from "../../components/SelectedRecipe";
// import Wrapper from "../../components/Wrapper";
// import Button from "../../components/Button";
class SelectedRecipe extends Component {
  state = {
   comments: [],
  };
  componentDidMount() {
    this.loadComments();
    console.log(this.props.recipeObj);
  }
  loadComments = () => {
    API.getComments()
      .then(res => this.setState({ comments: res.data }))
      .catch(err => console.log(err));
  };
  mainPage = () => {
    this.props.onChangeDisplay(false);
  };
  handleFormSubmit = event => {
    event.preventDefault();
    // if (this.state.queryTerm) {
    this.getComments();
    // }
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
  saveComment = comment => {
    console.log(comment)
    API.saveComment(comment)
      .then(res => {
        console.log("hey it saved");
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div id ="back">
      <button  className="btn btn-danger" style={{ float: "right" }} onClick={() => this.mainPage()}><i className="fa fa-backward" aria-hidden="true"></i></button>     
      <div id="selectedrecipe">   
          <div className="col-md-8" id="recipe-detail-description">
            <h1 id="recipe-detail-title">{this.props.recipeObj.recipeTitle}</h1>
            <ul id="ingredient-list">{this.props.recipeObj.ingredient}</ul>
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
            <div id="nutrition-labels">
              <div id="diet-labels">
                <p>Diet-Labels: {this.props.recipeObj.dietLabels }</p>
              </div>
              <div id="health-labels">
                <p>Health-Labels:</p>
                <li>{this.props.recipeObj.healthlabels}</li>
              </div>
              <div id="IngredientLines">
                <p>Ingredients:</p>
                 {this.props.recipeObj.recipeIngredients.map(recipe => (
                  <li> { recipe}</li>))}
              </div>
            </div>
           <div>
            <a href={this.props.recipeObj.recipeLink} target="_blank">Source:{this.props.recipeObj.recipeLink}</a>
               </div>
               <Container fluid> 
               <Row>
                 <Col size="md-12">      
                   <form>
                   <h4>
                   Comments:
                 </h4>
                     <Input name="author" placeholder="Author (required)" />
                     <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
                     <FormBtn onClick={() =>
                  this.saveComment({
                    commentAuthor: this.props.author,
                    commentBody: this.props.synopsis,
                    rating: this.props.rating,
                  })
                }>Submit</FormBtn>
                   </form>
                 </Col>
               </Row>
             </Container>
       </div>
          <div className="col-md-4" id="recipe-detail-image">
            <img
              className="img-fluid"
              src={this.props.recipeObj.recipeImage}
              alt="finished recipe"
            />   
            <button 
                className="heart"
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
   </button>     
          </div>
      </div>
    
      </div>
    );
  }
}
export default SelectedRecipe;

