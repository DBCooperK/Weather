import * as actionType from '../action/actionType';


const defaultState = {
  city: '',
  province: '',
  weather: 'loading...',
  temperature: 'loading...  ',
  humidity: 'loading...',
  windDirection: 'loading...',
  windPower: 'loading...',
  adcode: null,
  liveWeatherData: null,
  weatherList: [
    {
      time: '9AM',
      weather: 'sun',
      temperature: '10℃'
    },
    {
      time: '10AM',
      weather: 'sun',
      temperature: '12℃'
    },
    {
      time: '11AM',
      weather: 'sun',
      temperature: '12℃'
    },
    {
      time: '12AM',
      weather: 'sun',
      temperature: '13℃'
    },
    {
      time: '13PM',
      weather: 'sun',
      temperature: '14℃'
    },
    {
      time: '14PM',
      weather: 'sun',
      temperature: '15℃'
    }
  ]
};

export default (state = defaultState, action) => {
  switch(action.type){
    case actionType.GET_LOCATION_SUCCESS: 
      return {
        ...state,
        province: action.province,
        city: action.city
      }
    case actionType.GET_LIVE_WEATHER_SUCCESS: 
      return {
        ...state,
        weather: action.weather,
        temperature: action.temperature,
        humidity: action.humidity,
        windDirection: action.winddirection,
        windPower: action.windpower
      }
    default:
      return state;
  }
}