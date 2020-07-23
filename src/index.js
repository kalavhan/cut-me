import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers';
import './style/main.css';

const store = createStore(rootReducer, { user: [], });

ReactDOM.render(
  <App store={store} />,
  document.getElementById('container'),
);
