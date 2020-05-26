import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import NavigationUtil from '../../navigation/NavigationUtil'; 

class TestPage3 extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('TestPage3  in');
  }

  goBack() {
    NavigationUtil.goBack();
  }

  render() {
    return (
      <>
        <Text>
          TestPage3
        </Text>
        <TouchableOpacity
          onPress={() => { this.goBack() }}
          style={{width:90,
            height: 50,
            borderRadius: 40,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"#666",}}
        >
          <Text>
          TestPage3
          </Text>
        </TouchableOpacity>
      </>
    )
  }
};

export default TestPage3;