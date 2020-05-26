import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

let DateEnum = {
  today: 'today',
  tommorow: 'tommorow',
  week: 'week'
}

class WeatherStatus extends Component {
  constructor(props) {
    super(props);
    this.changeSelectedBtnType = this.changeSelectedBtnType.bind(this);

    this.state = ({
      selectedBtnType: DateEnum.today,
    })
  }

  changeSelectedBtnType(curSelectedType) {
    this.setState({
      selectedBtnType: curSelectedType
    });
  }

  renderButtonItem(btnType, btnText) {
    let { selectedBtnType } = this.state;

    return (
      <TouchableOpacity
        style={
          selectedBtnType === btnType ? 
          styles.selectedDateButton : 
          styles.unselectedDateButton
        }
        onPress={
          () => this.changeSelectedBtnType(btnType)
        }
      >
        <Text 
          style={
            selectedBtnType === btnType ? 
            styles.selectedText : 
            styles.unselectedText
          }
        >
          {btnText}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const {today, tommorow, week} = DateEnum;

    return (
      <View>
        <View style={styles.dateButtonBar}>
          {this.renderButtonItem(today, 'today')}
          {this.renderButtonItem(tommorow, 'tommorow')}
          {this.renderButtonItem(week, 'week')}
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  dateButtonBar: {
    marginTop: 10,
    width: 300,
    height: 50,
    flexDirection:"row",
    justifyContent: "space-between",
    backgroundColor:"#FDFDFD",
    alignSelf: "center",
    borderRadius: 40
  },
  selectedDateButton: {
    width:90,
    height: 50,
    borderRadius: 40,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#EBF1FF",
  },
  unselectedDateButton: {
    width:90,
    height: 50,
    borderRadius: 40,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#FDFDFD",
  },
  selectedText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#4C5A79"
  },
  unselectedText: {
    fontSize: 15,
    color: "#858FA6"
  }
});

export default WeatherStatus;