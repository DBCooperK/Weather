import React, { Component } from 'react';
import {
  View, 
  Text,
  StyleSheet
} from 'react-native';
import CXIcon from '../../../utils/CXIcon';
import { connect } from 'react-redux';

const WeatherDetails = (props) => {
  const {humidity, windDirection, windPower} = props;

  return (
    <View style={styles.weatherDetailWapper}>
      <View style={styles.weatherDetailItem}>
        <CXIcon name={'water'} size={30} color={'#6D7892'}/>
        <Text style={styles.detailsItemText}>
          {humidity}%
        </Text>
      </View>
      <View style={styles.weatherDetailItem}>
      <CXIcon name={'windDirection'} size={30} color={'#6D7892'}/>
        <Text style={styles.detailsItemText}>
          {windDirection}风
        </Text>
      </View>
      <View style={styles.weatherDetailItem}>
      <CXIcon name={'wind'} size={30} color={'#6D7892'}/>
        <Text style={styles.detailsItemText}>
          {windPower}级
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherDetailWapper: {
    height: 100,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#FDFDFD",
    borderBottomLeftRadius: 40,
  },
  weatherDetailItem: {
    width: 100,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },
  detailsItemText: {
    color: "#4C5A79",
    fontWeight: "bold",
  },
});

const mapState = (state) => ({
  humidity: state.home.humidity,
  windDirection: state.home.windDirection,
  windPower: state.home.windPower
});

export default connect(mapState, null)(WeatherDetails);