import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import NavigationUtil from '../../navigation/NavigationUtil'; 
import { useFocusEffect } from '@react-navigation/native';

class TestPage2 extends Component {
  constructor(props) {
    super(props);

    let { navigation } = props;

    navigation.addListener('focus', () => {this.callBack()})
  }

  componentDidMount() {
    console.log('TestPage2  in');
  }

  goToPage3() {
    NavigationUtil.goTo('page3');
  }

  callBack() {
    console.log("我又回来啦")
  }

  render() {
    return (
      <>
        <Text>
        TestPage2
        </Text>
        <TouchableOpacity
          onPress={() => { this.goToPage3() }}
          style={{width:90,
            height: 50,
            borderRadius: 40,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"#666",}}
        >
          <Text>
          TestPage2
          </Text>
        </TouchableOpacity>
      </>
    )
  }
};

export default TestPage2;