import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import CXIcon from '../../utils/CXIcon';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { width as headerWidth } from '../../utils/Adapter';

// 替换无状态组件
const HomeTitle = (props) => {
  const { provinceName, 
          cityName,
          weather,
          temperature } = props;

  return (
    <LinearGradient
      start={{x:0.5, y:0}} 
      end={{x:0.5, y:1}} 
      colors={['#1C2F58', '#364C7D']} 
      style={styles.titleLinearBg}
    >
      <View style={styles.titleWapper}>

        <View style={styles.cityWapper}>
          <Text style={styles.cityName}>
            {cityName}
          </Text>
          <Text style={styles.countryName}>
            {provinceName}
          </Text>
        </View> 

        <View style={styles.weatherWapper}>
          <View style={styles.iconWapper}>
            <CXIcon name={'sun'} size={60} color={'#fff'}/>
            <Text style={styles.weatherName}>{weather}</Text>
          </View>

          <View style={styles.tmpView}>
            <Text style={styles.tmpText}>{temperature}℃</Text>
          </View>
        </View>

      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  titleLinearBg: {
    height: 280,
    width: headerWidth,
    backgroundColor: '#2A3F6C',
    borderBottomLeftRadius: 40,
    marginLeft: -16,
  },  
  titleWapper: {
    marginTop: 35,
    flexDirection: "column",
    justifyContent: "space-around",
    height: 210,
    marginLeft : 31,
  },
  cityWapper: {
    flexDirection: "column",
    justifyContent: "center",
    height: 80,
  },
  cityName: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  countryName: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  weatherWapper: {
    height: 110,
    flexDirection: "row"
  },
  iconWapper: {
    height: 130,
    justifyContent: "center",
    alignItems: "center"
  },
  weatherName: {
    fontSize: 18,
    color: "#fff"
  },
  tmpView: {
    marginLeft: 20,
    marginTop: 10
  },  
  tmpText: {
    fontSize: 60,
    color: "#fff"
  },
  leftBtn: {
    backgroundColor:"#111",
    position:"absolute",
    right:10
  },
});

const mapState = (state) => ({
  provinceName: state.home.province,
  cityName: state.home.city,
  weather: state.home.weather,
  temperature: state.home.temperature
})

export default connect(mapState, null)(HomeTitle);