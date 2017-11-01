/**
 * Created by Xue on 2017/9/6.
 */

import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';

import { createLogger } from 'redux-logger';

import rootReducer from './reducers';


const configureStore = preloadedState => {
  return createStore (
    rootReducer,
	preloadedState,
	compose (
	  applyMiddleware(createLogger())
	)
  );
}

const store = configureStore();

export default store;

