import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Main extends Component {
  state = {
    recipes: [],
    queryTerm: ""
  };

  getRecipes = () => {
    let query = `${this.state.queryTerm}`;

    API.recipeSearch(query)
      .then(res => {
        console.log(res.data.hits);
        this.setState({
          recipes: res.data.hits,
          queryTerm: ""
          // beginDate: '',
          // endDate: ''
        });
        console.log(this.state.recipes[0].recipe.label);
      })
      .catch(err => console.log(err));
  };

  saveRecipes = recipeInfo => {
    API.saveRecipes(recipeInfo)
      .then(res => {
        console.log("hey it saved");
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.queryTerm) {
      this.getRecipes();
    }
  };

  render() {
    return (
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Search for a topic.</h1>
          </Jumbotron>
          <form>
            <Input
              value={this.state.queryTerm}
              onChange={this.handleInputChange}
              name="queryTerm"
              placeholder="Topic (required)"
            />
            <FormBtn
              disabled={!this.state.queryTerm}
              onClick={this.handleFormSubmit}
            >
              Submit Search
            </FormBtn>
          </form>
        </Col>
        <Col size="md-12">
          <h1>Recipe Results</h1>
          {this.state.recipes.length ? (
            <ListItem>
              {this.state.recipes.map(recipe => (
                <div id="recipe-detail-container" className="twelve columns">
                <div id="recipe-detail-image" className="five columns">
                <img src={recipe.recipe.image} alt="finished recipe" />
              </div>
                <div
                    id="recipe-detail-description" className="five columns offset-by-one"   >
                    <h3 id="recipe-detail-title">{recipe.recipe.label}</h3>        
                    <ul id="ingredient-list">
                      {recipe.recipe.ingredientLines}
                    </ul>
                    <p id="recipe-detail-servings">
                    Servings: {recipe.recipe.yield}
                  </p>
                  <p id="recipe-detail-calories">
                    Calories per serving:{" "}
                    {Math.round(recipe.recipe.calories / recipe.recipe.yield)}
                  </p>
                  <p id="recipe-detail-source">
                    Source: {recipe.recipe.source}
                  </p>
                  <div id="nutrition-labels">
                    <div id="diet-labels">
                      <p>Diet Labels:</p>
                      <ul>
                        {recipe.recipe.dietLabels}
                      </ul>
                    </div>
                    <button className="btn btn-primary" style={{ float: "right" }} onClick={() =>
                      this.saveRecipes({                      
                        recipeTitle: recipe.recipe.label,
                        recipeLink: recipe.recipe.url,
                        recipeImage:recipe.recipe.image,
                        healthlabels:recipe.recipe.healthLabels,
                        dietlabels:recipe.recipe.dietLabels,
                        calories:recipe.recipe.calories,
                        // date: recipe.pub_date
                      }) }  > Save recipe
                  </button>  
                    <div id="health-labels">
                      <p>Health Labels:</p>
                      <ul>
                        {recipe.recipe.healthLabels}
                      </ul>
                    </div>
                      <hr/>
                  </div>                   
                  </div>                 
                </div>              
              ))}
            
            </ListItem>
          ) : (
            <h3>No Results to Display</h3>
          )}
          
        </Col>
      </Row>
    
    );
  }
}

export default Main;
// {<ListItem key={recipe.recipe.id}>
// <img src={recipe.recipe.image} alt="boohoo" className="img-responsive"/>
//   <a href={recipe.recipe.url} target="_blank">
//   <strong>{recipe.recipe.label}</strong>
//    <ul>
//    <h4>Ingredients</h4>
//     <li>{recipe.recipe.ingredientLines}</li>
//     </ul>
//     <h3>Health Labels{recipe.recipe.healthLabels}</h3>
//     <h3>{recipe.recipe.tags}</h3>
//   </a>
//   <span>calories {recipe.recipe.calories}</span>
//   <button className="btn btn-primary" style={{float: "right"}} onClick={() => this.saveRecipe({
//     recipeTitle: recipe.recipe.lable,
//     recipeLink: recipe.recipe.url,
//     // date: recipe.pub_date
//   })}> Save recipe </button>
// </ListItem>}
