import * as actionType from './actionType';
import { 
  fetchLocation,
  fetchLiveWeathers,
  fetchForecastWeathers
} from '../api/GDApi';

/**
 * 获取定位数据成功
 */
const getLocationSuccess = (locationData) => ({
  type: actionType.GET_LOCATION_SUCCESS,
  ...locationData
})

/**
 * 获取定位数据失败
 */
const getLocationFailure = (errorMsg) => ({
  type: actionType.GET_LOCATION_FAILURE,
  errorMsg
})

/**
 * 获取实况天气信息成功
 */
const getLiveWeathersSuccess = (liveWeathersData) => ({
  type: actionType.GET_LIVE_WEATHER_SUCCESS,
  ...liveWeathersData
})

/**
 * 获取实况天气信息失败
 */
const getLiveWeathersFailure = (errorMsg) => ({
  type: actionType.GET_LIVE_WEATHER_FAILURE,
  errorMsg
})

/**
 * 获取预告天气成功
 */
const getForcastWeathersSuccess = (forecastWeathersData) => ({
  type: actionType.GET_FORCAST_WEATHER_SUCCESS,
  forecastWeatherDatas: forecastWeathersData.forecastWeathersList
})

/**
 * 获取预告天气失败
 */
const getForcastWeathersFailure = (errorMsg) => ({
  type: actionType.GET_FORCAST_WEATHER_FAILURE,
  errorMsg
})

/**
 * 修改按钮状态
 */
export const getSelectedBtnAction = (selectedBtnType) => ({
  type: actionType.CHANGE_SELECTED_BTN_ACTION,
  selectedBtnType
})

/**
 * 获取天气列表
 */
export const getWeatherList = ({
  type: actionType.GET_WEATHER_LIST
})

/**
 * 获取实况天气信息
 */
export const getLiveWeathers = (adcode) => {
  return async (dispatch) => {
    await fetchLiveWeathers(adcode)
            .then((liveWeathersData) => {
              dispatch(getLiveWeathersSuccess(liveWeathersData));
            })
            .catch((error) => {
              console.log(error);
              dispatch(getLiveWeathersFailure(error));
            });
  }
}

/**
 * 获取预告天气信息
 */
export const getForcastWeathers = (adcode) => {
  return async (dispatch) => {
    await fetchForecastWeathers(adcode)
            .then((forecastWeathersData) => {
              dispatch(getForcastWeathersSuccess(forecastWeathersData));
            })
            .catch((error) => {
              console.log(error);
              dispatch(getForcastWeathersFailure(error));
            });
  }
}

/**
 * 获取位置
 */
export const getLocation = () => {
  return async (dispatch) => {
    await fetchLocation()
            .then((locationData) => {
              dispatch(getLocationSuccess(locationData));
              return locationData.adcode;
            })
            .then((adcode) => {
              dispatch(getLiveWeathers(adcode));
              return adcode;
            })
            .then((adcode) => {
              dispatch(getForcastWeathers(adcode));
            })
            .catch((error) => {
              console.log(error);
              dispatch(getLocationFailure(error));
            });
  }
}