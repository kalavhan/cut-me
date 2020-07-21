import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropType from 'prop-types';
import CategoriesList from '../containers/Home';

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropType.objectOf(PropType.func).isRequired,
};

export default App;
