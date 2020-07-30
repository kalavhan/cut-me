import '@testing-library/jest-dom';
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { createStore } from 'redux';
import { render, screen } from '@testing-library/react';
import App from '../components/App';
import rootReducer from '../reducers';

describe('Test for barbers component', () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    const store = createStore(rootReducer, { user: { id: 15, token: 'c69e85591471ce38b865521271d104899a92f6b1' }, barbers: [] });
    render(
      <Router history={history}>
        <App store={store} />
      </Router>,
    );
    history.push('/barbers');
  });

  it('Should show the name of a barber', async () => {
    expect(screen.findByText('Joey')).toBeTruthy();
  });

  it('Should show the role of another barber', async () => {
    expect(screen.findByText('Monica')).toBeTruthy();
  });

  it('Should show title OUR BARBERS', async () => {
    expect(screen.findByText('OUR BARBERS')).toBeTruthy();
  });

  it('Should show the indication to select a new barber', async () => {
    expect(screen.findByText('Please select a barber'));
  });
});
