import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { WeekWordsEnum } from '../../../utils/constants';

const MonthWordsEnum = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

class DateFrame extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      curTime: '',
      curDate: ''
    })
  }

  componentDidMount() {
    this.updateDateTimer = setInterval(() => {
      let date = new Date();
      let curTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
      let curDate = WeekWordsEnum[date.getDay()] + ' , ' + date.getDate() + ' ' + MonthWordsEnum[date.getMonth()];

      this.setState({
        curTime,
        curDate
      })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.updateDateTimer);
    this.updateDateTimer = null;
  }

  render() {
    return(
      <View style={styles.dateWapper}>
        <Text style={styles.timeText}>
          {this.state.curTime}
        </Text>
        <Text style={styles.dateText}>
          {this.state.curDate}
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  dateWapper: {
    marginTop: 10,
    height: 180,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "#FFFFFF"
  },
  timeText: {
    fontSize: 40,
    color: "#192B55",
    fontWeight: "bold"
  },
  dateText: {
    color: "#626D8B",
  },
});

export default DateFrame;