/**
 * 实况天气数据
 */
class LiveWeathersData {
  constructor() {
    // 天气名字
    this.weather = '';
    // 温度
    this.temperature = '';
    // 湿度
    this.humidity = '';
    // 风向
    this.winddirection = '';
    // 风力
    this.windpower = '';
  }

  static init(jsonData) {
    if (!jsonData) throw new Error('LiveWeathersData - init: jsonData is null');
    
    let data = new LiveWeathersData();
    try {
      let { lives } = jsonData;
      let { weather, 
            temperature,
            humidity,
            winddirection,
            windpower } = lives[0];
      
      data.weather = weather;
      data.temperature = temperature;
      data.humidity = humidity;
      data.winddirection = winddirection;
      data.windpower = windpower;
    }
    catch(err) {
      console.log('LiveWeathersData - init: ' + err);
    }

    return data;
  }

  isExist() {
    let isExist = true;

    isExist = isExist && !!this.weather;
    isExist = isExist && !!this.temperature;
    isExist = isExist && !!this.humidity;
    isExist = isExist && !!this.winddirection;
    isExist = isExist && !!this.windpower;

    return isExist;
  }
};

export default LiveWeathersData;