import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers';
import './style/main.css';

const initializeUser = window.sessionStorage.getItem('user') !== null ? JSON.parse(window.sessionStorage.getItem('user')) : null;
const store = createStore(rootReducer, { user: initializeUser, barbers: [] });

ReactDOM.render(
  <App store={store} />,
  document.getElementById('container'),
);
