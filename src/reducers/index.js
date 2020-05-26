import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import detailReducer from './detailReducer';

const reducers = combineReducers({
  home: homeReducer,
  detail: detailReducer
});

export default reducers;