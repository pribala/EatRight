import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row } from "../../components/Grid";
import { Input, FormBtn, Select } from "../../components/Form";
import RecipeCard from "../../components/RecipeCard";
import SelectedRecipe from "../../components/SelectedRecipe";
class Main extends Component {
  state = {
    recipes: [],
    queryTerm: "",
    vote: 0,
    selectValue: "",
    Allergies: "",
    Calories: "",
    displayChild: false,
    recipeDetail: {},
    savedPage: true
  };
  componentDidMount() {
    this.loadSavedRecipes();
  }

  loadSavedRecipes = () => {
    API.getSavedRecipes()
      .then(res => {
        console.log(res.data);
        this.setState({
          recipes: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
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
          Calories: "",
          singleRecipe: ""
        });
        console.log(this.state.recipes[0].recipe.label);
      })
      .catch(err => console.log(err));
  };
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
    this.setState({ recipes: "" });
    this.setState({ savedPage: false });
    this.getRecipes();
  };

  recipeDetail = recipeInfo => {
    this.setState({ displayChild: true });
    this.setState({ recipeDetail: recipeInfo }, this.otherFunction);
    console.log(this.state.recipeObj);
  };

  // setState() does not immediately mutate this.state but creates a pending state transition.
  // Accessing this.state after calling this method can potentially return the existing value.

  otherFunction = () => {
    //console.log(this.state.recipeDetail);
    console.log(this.state.displayChild);
  };

  changeDisplay = status => {
    this.setState({ displayChild: status }, this.otherFunction);
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Search for a Recipe</h1>
        </Jumbotron>
        <br />
        <div className="col-sm-12" id="advanced-searchbar-input-group">
          <label
            htmlFor="advanced-search-input"
            className="searchbar-input-labels"
          >
            {" "}
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
            <option defaultValue="selected" value=" " />
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option>
            <option value="600">600</option>
          </Select>
        </div>
        <FormBtn onClick={this.handleFormSubmit}>Submit Search</FormBtn>
<<<<<<< HEAD
          <Col size="col-md-3">
              {this.state.displayChild ? (
                <SelectedRecipe
                  recipeObj={this.state.recipeDetail}
                  onChangeDisplay={this.changeDisplay}
                />
=======
        <h1>Recipes</h1>
        {this.state.savedPage ? (
          <Row>
            <div className="row text-center">
              {this.state.recipes.length ? (
                <div className="cards">
                  {this.state.recipes.map(recipe => (
                    <div className="col-md-4" key={recipe._id}>
                      <RecipeCard
                        image={recipe.recipeImage}
                        className="img-fluid"
                        key={recipe.recipeLink}
                      />
                      <a href={recipe.recipeLink} target="_blank">
                        <strong>{recipe.recipeTitle}</strong>
                      </a>

                      {/* render buttons and pass props to them */}
                    </div>
                  ))}
                </div>
>>>>>>> 70740c726ef00b9344b7d7883736a944f8fb4b53
              ) : (
                <span
                  role="img"
                  id="notes"
                  aria-label="Face With Rolling Eyes Emoji"
                >
                  🙄No Results to Display
                </span>
              )}
            </div>
          </Row>
        ) : (
          <Col size="col-md-3 col-sm-1">
            {this.state.displayChild ? (
              <SelectedRecipe
                recipeObj={this.state.recipeDetail}
                onChangeDisplay={this.changeDisplay}
              />
            ) : (
              <Row>
                <div className="row text-center">
                  {this.state.recipes.length ? (
                    <div className="cards">
                      {this.state.recipes.map(recipe => (
                        <div className="col-md-4" key={recipe.recipe.url}>
                          <RecipeCard
                            image={recipe.recipe.image}
                            className="img-fluid"
                            key={recipe.recipe.url}
                          />
                          <div
                            onClick={() =>
                              this.recipeDetail({
                                recipeYield: recipe.recipe.yield,
                                recipeTitle: recipe.recipe.label,
                                recipeLink: recipe.recipe.url,
                                recipeImage: recipe.recipe.image,
                                healthlabels: recipe.recipe.healthLabels,
                                dietlabels: recipe.recipe.dietLabels,
                                calories: recipe.recipe.calories,
                                recipeIngredients:
                                  recipe.recipe.ingredientLines,
                                recipeIngredient: recipe.recipe.ingredients
                              })
                            }
                          >
                            {recipe.recipe.label}
                          </div>
                          {/* render buttons and pass props to them */}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <span
                      role="img"
                      id="notes"
                      aria-label="Face With Rolling Eyes Emoji"
                    >
                      🙄No Results to Display
                    </span>
                  )}
                </div>
              </Row>
            )}
          </Col>
        )}
      </div>
    );
  }
}
<<<<<<< HEAD

export default Main;
=======
export default Main;
>>>>>>> 70740c726ef00b9344b7d7883736a944f8fb4b53
