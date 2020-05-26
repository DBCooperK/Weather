import * as actionTypes from '../action/actionType';

const defaultState = {
  forecastWeatherDatas: []
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.GET_FORCAST_WEATHER_SUCCESS: 
      return {
        ...state,
        forecastWeatherDatas: action.forecastWeatherDatas
      }
    default: 
      return state;
  }
}