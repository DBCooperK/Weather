import React from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';
import CXIcon from '../../../../utils/CXIcon';
import LinearGradient from 'react-native-linear-gradient';

const WeatherItem = (props) => {
  const { time, weather, temperature } = props.item;

  return (
    <LinearGradient 
      start={{x:0.5, y:0}} 
      end={{x:0.5, y:1}} 
      colors={['#1C2F58', '#364C7D']} 
      style={styles.weatherItemWapper}
    >
      <Text style={styles.weatherTimeText}>{time}</Text>
      <CXIcon name={weather} size={30} color={'#FFF'}/>
      <Text style={styles.weatherTemperatureText}>{temperature}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  weatherItemWapper: {
    width: 70,
    height: 150,
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },

  weatherTimeText: {
    fontWeight: "bold",
    color: "#FFF"
  },
  
  weatherTemperatureText: {
    color: "#FFF"
  }
});

export default WeatherItem;