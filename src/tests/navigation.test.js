import '@testing-library/jest-dom';
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { createStore } from 'redux';
import {
  render, screen, waitFor, fireEvent,
} from '@testing-library/react';
import App from '../components/App';
import rootReducer from '../reducers';

describe('Test for the navigation of the app', () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    const store = createStore(rootReducer, { categories: [], meals: [], mealDetails: 0 });
    render(
      <Router history={history}>
        <App store={store} />
      </Router>,
    );
  });

  it('should wait until the categories are loaded', async () => {
    await waitFor(() => expect(screen.getByText('Beef')).toBeTruthy());
  });

  it('Should have the link for categories page on Nav', () => {
    expect(screen.queryByText('Categories')).toBeTruthy();
  });

  it('Should show list of meals', async () => {
    await waitFor(() => screen.getByTestId('Beef'));
    fireEvent(screen.getByText('Beef'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }));
    expect(screen.findByText('List of meals')).toBeTruthy();
  });

  it('Should not show list of meals without clicking a category', async () => {
    await waitFor(() => screen.getByTestId('Beef'));
    expect(screen.queryByText('List of meals')).toBeNull();
  });

  it('Should redirect to meal detail page', async () => {
    const history = createMemoryHistory();
    history.push('/meal/52974');
    expect(screen.findByText('Beef and Mustard Pie')).toBeTruthy();
  });

  it('Should have the ingredients of the meal', async () => {
    const history = createMemoryHistory();
    history.push('/meal/52974');
    expect(screen.findByText('Ingredients')).toBeTruthy();
  });

  it('Should not show the name of another meal', async () => {
    const history = createMemoryHistory();
    history.push('/meal/52974');
    expect(screen.queryByText('Chicken & mushroom Hotpot')).toBeNull();
  });

  it('Should return to main page by clicking categories link', async () => {
    const history = createMemoryHistory();
    history.push('/meal/52974');
    fireEvent(screen.getByText('Categories'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }));
    expect(screen.findByText('beef')).toBeTruthy();
  });
});
