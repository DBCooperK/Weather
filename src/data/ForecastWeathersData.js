/**
 * 预告天气详情数据
 */
class WeatherDetailData {
  constructor() {
    // 星期几
    this.week = '';
    // 天气名字
    this.weatherName = '';
    // 白天温度
    this.dayTemperature = '0'; 
    // 夜晚温度
    this.nightTemperature = '0';
  }

  static init(jsonData) {
    if (!jsonData) throw new Error('WeatherDetailData - init: jsonData is null');

    let data = new WeatherDetailData();
    try {
      let { week,
            dayweather,
            daytemp,
            nighttemp } = jsonData;

      let weekIndex = week - 1;
      data.week = weekIndex;
      data.weatherName = dayweather;
      data.dayTemperature = daytemp;
      data.nightTemperature = nighttemp;
    }
    catch(err) {
      console.log('WeatherDetailData - init: ' + err);
    }

    return data;
  }
};

/**
 * 预告天气数据
 */
class ForecastWeathersData {
  constructor() {
    // 预告天气数据列表
    this.forecastWeathersList = [];
  }

  static init(jsonData) {
    if (!jsonData) throw new Error('ForecastWeathersData - init: jsonData is null');

    let data = new ForecastWeathersData();
    try{
      let { forecasts } = jsonData;
      let { casts } = forecasts[0];
      
      data.forecastWeathersList = casts.map((value) => {
        return WeatherDetailData.init(value);
      });
    }
    catch (err) {
      console.log('ForecastWeathersData - init: ' + err);
    }
    
    return data;
  }

  isExist() {
    let isExist = this.forecastWeathersList.length > 0;

    return isExist ? true : false;
  }
};

export default ForecastWeathersData;