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
const feedback = ( state={}, action)=>{
    if( action.type === 'ADD_FEELING_FEEDBACK'){
      return{...state, feeling: action.payload};
    }
    if( action.type === 'ADD_UNDERSTANDING_FEEDBACK'){
        return{...state, understanding: action.payload};
      }
      if( action.type === 'ADD_SUPPORT_FEEDBACK'){
        return{...state, support: action.payload};
      }
      if( action.type === 'ADD_COMMENTS_FEEDBACK'){
        return{...state, comments: action.payload};
      }
      if( action.type === 'EMPTY'){
        return{};
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

ReactDOM.render(
<Provider store={storeInstance}><App /></Provider>,
 document.getElementById('root')
 );
registerServiceWorker();
