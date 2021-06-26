import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducer';

const store = createStore(rootReducer); //createStore takes reducer as input and returns global store object

ReactDOM.render(
  /* Provider is the one who provides store to all components of react app */ 
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
