import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn, Select } from "../../components/Form";
import RecipeCard from "../../components/RecipeCard";
import Wrapper from "../../components/Wrapper";
import Button from "../../components/Button";
class Main extends Component {
  state = {
    recipes: [],
    queryTerm: "",
    vote: 0,
    selectValue: "",
    Allergies: "",
    Calories: "",
    url:""
  };

  getRecipes = () => {
    let query = `${this.state.queryTerm}`;
    // console.log(this.state.selectValue)
    if (this.state.selectValue) {
      query = `${query}&diet=${this.state.selectValue}`;
    }
    if (this.state.Allergies) {
      query = `${query}&health=${this.state.Allergies}`;
    }
    if (this.state.Calories) {
      query = `${query}&calories=lte${this.state.Calories}`;
      console.log(query);
    }
    API.recipeSearch(query)
      .then(res => {
        console.log(res.data.hits);
        this.setState({
          recipes: res.data.hits,
          queryTerm: "",
          selectValue: "",
          Allergies: "",
          Calories: ""
          // endDate: ''
        });
        console.log(this.state.recipes[0].recipe.label);
      })
      .catch(err => console.log(err));
  };

  // saveRecipes = recipeInfo => {
  //   API.saveRecipes(recipeInfo)
  //     .then(res => {
  //       console.log("hey it saved");
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleChange = event => {
    this.setState({
      selectValue: event.target.value
    });
    console.log(this.state.selectValue);
  };
  handleAllergies = event => {
    this.setState({
      Allergies: event.target.value
    });
    console.log(this.state.Allergies);
  };
  handleCalories = event => {
    this.setState({
      Calories: event.target.value
    });
    console.log(this.state.Allergies);
  };
  handleFormSubmit = event => {
    event.preventDefault();
    // if (this.state.queryTerm) {
    this.getRecipes();
    // }
  };
  urlhandler= id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const url = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    // this.setState({ friends });
    console.log(id);
  };
  // Get value of button clicked
  // handleVote = event => {
  //   console.log(event.target);
  //   console.dir(event.target.attributes);
  //   alert("i am lykd");
  // };
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Search for a topic.</h1>
        </Jumbotron>
        <div id="advanced-searchbar-input-group">
          <label
            htmlFor="advanced-search-input"
            className="searchbar-input-labels"
          >
            Name
          </label>
          <Input
            value={this.state.queryTerm}
            onChange={this.handleInputChange}
            name="queryTerm"
            placeholder="Topic (required)"
          />
          <label
            htmlFor="diet-label-drop-down"
            className="searchbar-input-labels"
          >
            Diet Label
          </label>
          <Select
            id="diet-label-drop-down"
            value={this.state.selectValue}
            onChange={this.handleChange}
          >
            <option value="" />
            <option value="high-protein">high protein</option>
            <option value="high-fiber">high fibre</option>
            <option value="low-fat">low fat</option>
            <option value="low-carb">low carb</option>
            <option value="low-sodium">low sodium</option>
          </Select>
          <label
            htmlFor="health-label-drop-down"
            className="searchbar-input-labels"
          >
            Allergies
          </label>
          <Select
            id="health-label-drop-down"
            value={this.state.Allergies}
            onChange={this.handleAllergies}
          >
            <option value="" />
            <option value="alcohol-free">Alcohol Free</option>
            <option value="dairy-free">Dairy Free</option>
            <option value="egg-free">Egg Free</option>
            <option value="gluten-free">Gluten Free</option>
            <option value="peanut-free">Peanut Free</option>
            <option value="low-sugar">Low Sugar</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="soy-free">SoyFree</option>
            <option value="vegan">vegan</option>
          </Select>
          <label
            htmlFor="calories-drop-down"
            className="searchbar-input-labels"
          >
            max. calories
          </label>
          <Select
            id="calories-drop-down"
            value={this.state.Calories}
            onChange={this.handleCalories}
          >
            <option selected="selected" value=" " />
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option>
            <option value="600">600</option>
          </Select>
        </div>
        <FormBtn onClick={this.handleFormSubmit}>Submit Search</FormBtn>
        <Row>
          <Col size="col-md-3">
            <h1>Recipe Results</h1>
            <Row>
              <div className="row text-center">
                {this.state.recipes.length ? (
                  <div className="cards">
                    {this.state.recipes.map(recipe => (
                      <div className="col-md-4">
                        <RecipeCard
                          image={recipe.recipe.image}
                          class="img-fluid"
                          key={recipe.recipe.url}
                        />
                        <Link to={"/details/" + recipe.recipe.shareAs.split('/').slice(-2)[0]+ recipe.recipe.shareAs.split('/').slice(-3)[0]}>{recipe.recipe.label}</Link>
                        {/* render buttons and pass props to them */}

                      </div>
                    ))}
                  </div>
                ) : (
                  <h3>No Results to Display</h3>
                )}
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Main;
// render() {
//   return (
//     <div>
//     <Row>
//       <Col size="md-12">
//         <Jumbotron>
//           <h1>Search for a topic.</h1>
//         </Jumbotron>
//         </Col>

//         <Col size="md-12">

//         <form >
//        <Col size="md-4">
//           <Input
//             value={this.state.queryTerm}
//             onChange={this.handleInputChange}
//             name="queryTerm"
//             placeholder="Topic (required)"
//           />
//           </Col>
//           <Col size="md-4">
//           <label>Diet</label>
//           <select id="diet-label-drop-down"  value={this.state.selectValue} onChange={this.handleChange}>
//           <option value=""></option>
//           <option value="high-protein">high protein</option>
//             <option value="high-fiber">high fibre</option>
//             <option value="low-fat">low fat</option>
//             <option value="low-carb">low carb</option>
//             <option value="low-sodium">low sodium</option>
//           </select>
//           </Col>
//           <Col size="md-4">
//           <label>Allergies</label>
//           <select id="allergies-label-drop-down"  value={this.state.Allergies} onChange={this.handleAllergies}>
//           <option value=""></option>
//           <option value="alcohol-free">Alcohol Free</option>
//             <option value="dairy-free">Dairy Free</option>
//             <option value="egg-free">Egg Free</option>
//             <option value="gluten-free">Gluten Free</option>
//             <option value="peanut-free">Peanut Free</option>
//             <option value="low-sugar">Low Sugar</option>
//             <option value="vegetarian">Vegetarian</option>
//             <option value="soy-free">SoyFree</option>
//             <option value="vegan">vegan</option>
//           </select>
//     </Col>
//           <FormBtn

//             onClick={this.handleFormSubmit}
//           >
//             Submit Search
//           </FormBtn>
//         </form>
//       </Col>
//       </Row>
//       <Row>
//       <Col size="col-md-3" >
//             <h1>Recipe Results</h1>
//         <Row>
//         <div className="row text-center">
//         {this.state.recipes.length ? (
//         <div className="cards">
//             {this.state.recipes.map(recipe => (
//               <div className="col-md-3">
//               <RecipeCard image={recipe.recipe.image} key={recipe.id}/>
//               <a href={recipe.recipe.url} target="_blank"></a>
//               <h5 id="recipe-detail-title">{recipe.recipe.label}</h5>
//               {/* render buttons and pass props to them */}
//               <Button handleClick={this.handleVote}  needsIcon={true} btnClass='btn-danger' onClick={() =>
//                 this.likedRecipes({
//                   recipeTitle: recipe.recipe.label
//                 }) }  >
//                 </Button>
//               <button className="btn btn-primary" style={{ float: "right" }} onClick={() =>
//                       this.saveRecipes({
//                         recipeTitle: recipe.recipe.label,
//                         recipeLink: recipe.recipe.url,
//                         recipeImage:recipe.recipe.image,
//                         healthlabels:recipe.recipe.healthLabels,
//                         dietlabels:recipe.recipe.dietLabels,
//                         calories:recipe.recipe.calories,
//                         // date: recipe.pub_date
//                       }) }  > Save recipe
//                   </button>
//             </div>

//             ))}
// </div>
//         ) : (
//           <h3>No Results to Display</h3>
//         )}
//         </div>
//         </Row>
//       </Col>
//     </Row>
//     </div>
// );
// }
// }
// <div id="recipe-detail-container" className="twelve columns">
// <div id="recipe-detail-image" className="five columns">

// <RecipeCard image={recipe.recipe.image} key={recipe.id}/>

// <img src={recipe.recipe.image} alt="finished recipe" />
// </div>
// <div
//     id="recipe-detail-description" className="five columns offset-by-one"   >
//     <h3 id="recipe-detail-title">{recipe.recipe.label}</h3>
//     <ul id="ingredient-list">
//       {recipe.recipe.ingredientLines}
//     </ul>
//     <p id="recipe-detail-servings">
//     Servings: {recipe.recipe.yield}
//   </p>
//   <p id="recipe-detail-calories">
//     Calories per serving:{" "}
//     {Math.round(recipe.recipe.calories / recipe.recipe.yield)}
//   </p>
//   <p id="recipe-detail-source">
//     Source: {recipe.recipe.source}
//   </p>
//   <div id="nutrition-labels">
//     <div id="diet-labels">
//       <p>Diet Labels:</p>
//       <ul>
//         {recipe.recipe.dietLabels}
//       </ul>
//     </div>
//     <button className="btn btn-primary" style={{ float: "right" }} onClick={() =>
//       this.saveRecipes({
//         recipeTitle: recipe.recipe.label,
//         recipeLink: recipe.recipe.url,
//         recipeImage:recipe.recipe.image,
//         healthlabels:recipe.recipe.healthLabels,
//         dietlabels:recipe.recipe.dietLabels,
//         calories:recipe.recipe.calories,
//         // date: recipe.pub_date
//       }) }  > Save recipe
//   </button>
//     <div id="health-labels">
//       <p>Health Labels:</p>
//       <ul>
//         {recipe.recipe.healthLabels}
//       </ul>
//     </div>
//       <hr/>
//   </div>
//   </div>
// </div>
