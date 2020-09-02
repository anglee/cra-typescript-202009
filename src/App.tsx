import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import ListPage from './components/pages/ListPage';
import DetailsPage from './components/pages/DetailsPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/cities">
          <ListPage />
        </Route>
        <Route path="/cities/:id">
          <DetailsPage />
        </Route>
        <Redirect to="/cities" />
      </Switch>
    </Router>
  );
};

export default App;
