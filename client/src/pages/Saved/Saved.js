import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../../components/Grid';
import {List, ListItem} from '../../components/List';
import Jumbotron from '../../components/Jumbotron';
import API from '../../utils/API';

class Saved extends Component {
  state = {
    recipes: []
  };

  componentDidMount() {
    this.loadRecipes();
  }

  loadRecipes = () => {
    API.getSavedRecipes()
      .then(res => {
        console.log(res.data);
        this.setState({
          recipes: res.data
        })
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteRecipes = id => {
    API.deleteRecipes(id)
      .then(res => this.loadRecipes())
      .catch(err => console.log(err));
  };

  render() {
    return (
        <Row>
          <Col size="md-12">
            {this.state.recipes.length ? (
              <List>
                {this.state.recipes.map(recipe=> (
                  <ListItem key={recipe.id}>
                  <div id="recipe-detail-image" className="five columns">
                  <img src={recipe.recipeImage} alt="finished recipe" />
                </div>
                    <a href={recipe.recipeLink} target="_blank">
                    <strong>{recipe.recipeTitle}</strong>
                    </a>
                    <br />
                    
                    <button
                      className="btn btn-danger"
                      style={{ float: 'right' }}
                      onClick={() => this.deleteRecipes(recipe._id)}>
                      Delete Recipe
                    </button>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Saved Recipes to Display</h3>
            )}
          </Col>
        </Row>
    );
  }
}

export default Saved;
