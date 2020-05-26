import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import CXIcon from '../../../utils/CXIcon';
import {
  width as screenWidth
} from '../../../utils/Adapter';
import { WeekWordsEnum } from '../../../utils/constants';

const DailyWeatherItem = (props) => {
  const { week, 
          dayTemperature,
          nightTemperature } = props.item;

  return (
    <View style={styles.frame}>
      <View style={styles.leftHalfFrame}>
        <Text
          style={{
            marginLeft: 30,
            color: '#FFF'
          }}
        >
          {WeekWordsEnum[week]}
        </Text>
      </View>
      
      <View style={styles.rightHalfFrame}>
        <CXIcon
          name={'sun'} 
          size={20} 
          color={'#F2F3F5'}
        />
        <Text 
          style={{
            color: '#FFF'
          }}
        >
          {dayTemperature}℃
        </Text>
        <Text 
          style={{
            color: '#7A9FC8'
          }}
        >
          {nightTemperature}℃
        </Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  frame: {
    width: screenWidth,
    height: 60,
    flexDirection: 'row',
  },
  leftHalfFrame: {
    width: screenWidth * 0.5,
    justifyContent: 'center'
  },
  rightHalfFrame: {
    width: screenWidth * 0.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: "center"
  },
});

export default DailyWeatherItem;