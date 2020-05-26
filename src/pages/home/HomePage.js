import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import NavigationUtil from '../../navigation/NavigationUtil';
import { connect } from 'react-redux';
import WeatherDetails from './components/WeatherDetails';
import DateFrame from './components/DateFrame';
import WeatherStatus from './components/WeatherStatus'
import WeatherList from './components/WeatherList/WeatherList';
import { getLocation as getLocationAction } from '../../action/actionCreators';

class HomePage extends Component {
  constructor(props) {
    super(props);
    NavigationUtil.init(props.navigation);
  }

  componentDidMount() {
    this.props.getLocation();
  }

  render() {
    return (
      <View>
        <WeatherDetails />
        <DateFrame />
        <WeatherStatus />
        <WeatherList />
      </View>
    );
  }
};

const mapDispatch = (dispatch) =>({
  getLocation() {
    dispatch(getLocationAction());
  }
})

export default connect(null, mapDispatch)(HomePage);