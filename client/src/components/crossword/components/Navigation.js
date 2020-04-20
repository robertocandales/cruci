import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CrosswordGenerator from './CrosswordGenerator';
import Crossword from '../Crossword';
import NavBar from './NavBar';

function Navigation() {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path='/' exact component={CrosswordGenerator} />
          <Route path='/crossword' component={Crossword} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default Navigation;
