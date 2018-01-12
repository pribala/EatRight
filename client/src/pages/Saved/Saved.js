import React, { Component } from 'react';
import { Col, Row } from '../../components/Grid';
import {List, ListItem} from '../../components/List';
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
          <Col id="saved" size="md-12">
            {this.state.recipes.length ? (          
              <List>
                {this.state.recipes.map(recipe=> (
                  <ListItem key={recipe.id}>
                  <div className="card" size="md-12">
                  <img id ="savedimg" className="card-img-top" src={recipe.recipeImage} alt="Card image"/>
                  <div className="card-body">
                    <h5 className="card-title"><a href={recipe.recipeLink} target="_blank">{recipe.recipeTitle}</a></h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   </div>
                </div>  
                    <br />   
                    <button
                    className="btn btn-danger"
                    style={{ float: 'right' }}
                    onClick={() => this.deleteRecipes(recipe._id)}
                  >
                    Delete Article
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
