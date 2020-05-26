/**
 * 定位数据
 */
class LocationData {
  constructor() {
    // 省份
    this.province = '';
    // 城市
    this.city = '';
    // 城市代码
    this.adcode = '';
  }

  static init(jsonData) {
    if (!jsonData) throw new Error('LocationData - init: data is null');

    let data = new LocationData();
    try {
      let { province, 
            city, 
            adcode } = jsonData;
      
      data.province = province;
      data.city = city;
      data.adcode = adcode;
    }
    catch(err) {
      console.log('LocationData - init: ' + err);
    }

    return data;
  }

  isExist() {
    let isExist = true;

    isExist = isExist && !!this.province;
    isExist = isExist && !!this.city;
    isExist = isExist && !!this.adcode;

    return isExist;
  }
};

export default LocationData;