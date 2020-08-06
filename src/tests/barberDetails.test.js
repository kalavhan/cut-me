import '@testing-library/jest-dom';
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { createStore } from 'redux';
import { render, screen } from '@testing-library/react';
import App from '../components/App';
import rootReducer from '../reducers';

describe('Test for barber details component', () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    const store = createStore(rootReducer, { user: { id: 15, token: 'c69e85591471ce38b865521271d104899a92f6b1' }, barbers: [] });
    render(
      <Router history={history}>
        <App store={store} />
      </Router>,
    );
    history.push('/barber-details/15');
  });

  it('Should show the name of Ross Geller', async () => {
    expect(screen.findByText('Ross Geller')).toBeTruthy();
  });

  it('Should not show the details of Joey Tribbiany', async () => {
    expect(screen.queryByText('Joey Tribbiany')).toBeFalsy();
  });

  it('Should show the role of Barber Apprentice', async () => {
    expect(screen.findByText('Barber Apprentice')).toBeTruthy();
  });

  it('Should not show the role Master Barber', async () => {
    expect(screen.queryByText('Master Barber')).toBeFalsy();
  });

  it('Should show his services', () => {
    expect(screen.findByText('Shavign and trimming beards')).toBeTruthy();
  });
});
