import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './style/index.css';
import App from './components/App';
import rootReducer from './reducers';

const store = createStore(rootReducer, { user: [], });

ReactDOM.render(
  <App store={store} />,
  document.getElementById('container'),
);
