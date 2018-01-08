import React, { Component } from "react";
//import Jumbotron from "../../components/Jumbotron";
//import API from "../../utils/API";
//import { Link } from "react-router-dom";
import { Row } from "../../components/Grid";
//import { List, ListItem } from "../../components/List";
//import { Input, TextArea, FormBtn, Select } from "../../components/Form";
// import RecipeCard from "../../components/RecipeCard";
// import Wrapper from "../../components/Wrapper";
// import Button from "../../components/Button";

class RecipeDetail extends Component{
   componentDidMount() {
     console.log("https://www.edamam.com/recipe/"+this.props.match.params.label+this.props.match.params.query)
    // API.getBook(this.props.match.params.id)
    //   .then(res => this.setState({ book: res.data }))
    //   .catch(err => console.log(err));
  }
  state = {
    Selectedrecipes: []
  };
  // loadRecipes = () => {
  //   API.getSelectedRecipe()
  //     .then(res => {
  //       console.log(res.data);
  //       this.setState({
  //         recipes: res.data
  //       })
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };
  render() {
    return (
        <Row>
    <h1>Selected Recipe</h1>
        </Row>
    );
  }
}
export default RecipeDetail;
// <Col size="md-12">
          //   {this.state.recipes.length ? (
          //     <List>
          //       {this.state.recipes.map(recipe=> (
          //         <ListItem key={recipe.id}>
          //         <div id="recipe-detail-image" className="five columns">
          //         <img src={recipe.recipeImage} alt="finished recipe" />
          //       </div>
          //           <a href={recipe.recipeLink} target="_blank">
          //           <strong>{recipe.recipeTitle}</strong>
          //           </a>
          //         </ListItem>
          //       ))}
          //     </List>
          //   ) : (
          //     <h3>No Saved Recipes to Display</h3>
          //   )}
          // </Col>