import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/index';
import middleware from './middleware';

const store = createStore(reducers, applyMiddleware(...middleware));

export default store;