import { GDApiKey } from '../config';
import { fetchRequest } from '../manager/NetManager';
import { 
  LocationData,
  LiveWeathersData,
  ForecastWeathersData
} from '../data';
// import LocationData from '../data/LocationData';
// import LiveWeathersData from '../data/LiveWeathersData';
// import ForecastWeathersData from '../data/ForecastWeathersData';


/**
 * 获取定位数据
 */
export const fetchLocation = () => {
  let requestUrl = `https://restapi.amap.com/v3/ip?key=${GDApiKey}`;

  return new Promise((resolve, rejete) => {
    fetchRequest(requestUrl, 'GET')
      .then((responseJson) => {
        if (!!responseJson) {
          let locationData = LocationData.init(responseJson);

          if (locationData.isExist()) { 
            resolve(locationData);
          }
          else {
            throw new Error('GDAPI - fetchLocation: province or city or adcode is empty');
          }
        }
        else {
          throw new Error('GDAPI - fetchLocation: responseJson empty');
        }
      })
      .catch((error) => {
        rejete(error);
      });
  });
};

/**
 * 获取实况天气信息
 * adcode - 城市代码
 */
export const fetchLiveWeathers = (adcode) => {
  if (!adcode) throw new Error('GDAPI - fetchLiveWeathers: adcode is empty');

  let requestUrl = `https://restapi.amap.com/v3/weather/weatherInfo?key=${GDApiKey}&city=${adcode}&extensions=base`;

  return new Promise((resolve, rejete) => {
    fetchRequest(requestUrl, 'GET')
      .then((responseJson) => {
        let liveWeathersData = LiveWeathersData.init(responseJson);

        if (liveWeathersData.isExist()) {
          resolve(liveWeathersData)
        }
        else {
          throw new Error('GDAPI - fetchLiveWeathers: get live weather error')
        }
      })
      .catch((error) => {
        rejete(error);
      });
  });
};

/**
 * 获取预报天气信息
 * adcode - 城市代码
 */
export const fetchForecastWeathers = (adcode) => {
  if (!adcode) throw new Error('GDAPI - fetchForecastWeathers: adcode is empty');

  let requestUrl = `https://restapi.amap.com/v3/weather/weatherInfo?key=${GDApiKey}&city=${adcode}&extensions=all`;

  return new Promise((resolve, rejete) => {
    fetchRequest(requestUrl, 'GET')
      .then((responseJson) => {
        let forecastWeathersData = ForecastWeathersData.init(responseJson);

        if (forecastWeathersData.isExist()) {
          resolve(forecastWeathersData);
        }
        else {
          throw new Error('GDAPI - fetchForecastWeathers: get casts weather error');
        }
      })
      .catch((error) => {
        rejete(error);
      });
  });
};