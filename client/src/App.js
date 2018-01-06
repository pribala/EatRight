import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Container} from './components/Grid'
import Main from './pages/Main';
import Saved from './pages/Saved';
import RecipeDetail from './pages/RecipeDetail';
import Nav from './components/Nav';

const App = () => (
  <Router>
    <Container >
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/details" component={RecipeDetail} />
        <Route exact path="/saved" component={Saved} />
       
      </Switch>
    </Container>
  </Router>
);

export default App;
