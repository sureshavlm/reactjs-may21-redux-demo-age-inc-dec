import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducer';

import createSagaMiddleware from 'redux-saga';
import watchAgeUp from './saga/saga';

const sagaMiddleware = createSagaMiddleware();//all async calls will be routed through middleware

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware)); 
//createStore has a middleware defined all Async calls goes through this saga middleware

sagaMiddleware.run(watchAgeUp); //saga middleware listens or watches for events gets dispatched to reducers

ReactDOM.render(
  /* Provider is the one who provides store to all components of react app */ 
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
