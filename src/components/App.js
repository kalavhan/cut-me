import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropType from 'prop-types';
import Home from '../containers/Home/Home';
import Barbers from '../containers/BarbersIndex/Barbers';
import BarberDetails from '../containers/BarbersShow/BarberDetails';
import Appointments from '../containers/AppointmentsIndex/Appointments';

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route expect path="/barbers">
        <Barbers />
      </Route>
      <Route path="/barber-details/:idBarber">
        <BarberDetails />
      </Route>
      <Route expect path="/appointments">
        <Appointments />
      </Route>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropType.objectOf(PropType.func).isRequired,
};

export default App;
