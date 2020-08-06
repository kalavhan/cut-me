import '@testing-library/jest-dom';
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { createStore } from 'redux';
import { render, screen } from '@testing-library/react';
import App from '../components/App';
import rootReducer from '../reducers';

describe('Test for the navigation of the app', () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    const store = createStore(rootReducer, { user: { id: 15, token: 'c69e85591471ce38b865521271d104899a92f6b1' }, barbers: [] });
    render(
      <Router history={history}>
        <App store={store} />
      </Router>,
    );
  });

  it('Should have the slogan', async () => {
    expect(screen.findByText('¡CUT THROUGH FASHION!')).toBeTruthy();
  });

  it('Should have the main text for home', () => {
    expect(screen.getByText('¡CUT THROUGH FASHION!')).toBeTruthy();
  });

  it('Shoud have an elements with data id submitLogIn', () => {
    expect(screen.getByTestId('submitLogIn')).toBeTruthy();
  });

  it('Should have a button with the data-testid myAppointmentsButton', () => {
    expect(screen.getByTestId('myAppointmentsButton')).toBeTruthy();
  });
});
