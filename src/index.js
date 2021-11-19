import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

//reducers go here
const feedback = ( state=[], action)=>{
    if( action.type === 'ADD_FEEDBACK'){
      return[...state, action.payload];
    }
    return state;
  }

const storeInstance = createStore(
    combineReducers(
      {
        feedback
      }
    ),
    applyMiddleware(
      logger
    )
  );

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
