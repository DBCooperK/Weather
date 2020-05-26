import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import NavigationUtil from '../../navigation/NavigationUtil'; 
import PageListView from '../../utils/PageListView';

class TestPage1 extends Component {
  constructor(props) {
    super(props);
    
    this.refresh = this.refresh.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.renderRow = this.renderRow.bind(this);

    this.testData = [
      '四川',
      '重庆',
      '北京',
      '新疆',
      '黑龙江',
      '宁夏',
      '乌鲁木齐',
      '香港',
      '澳门',
      '深圳',
      '上海',
      '天津',
      '云南',
      '哈尔滨',
      '湖南'
    ]
  }

  componentDidMount() {
    console.log('TestPage1  in');
  }

  goToPage2() {
    NavigationUtil.push('page2');
  }

  refresh(callback) {
    callback(this.testData);
  }

  loadMore(page, callback) {
    setTimeout(() => {callback(this.testData);}, 2000)
  }

  renderRow(rowData, index) {
    const textStyle = (index%15 == 0) ? styles.textStyle : null;

    return (
      <View style={{height:100}}>
        <Text style={textStyle}>
          {rowData}
        </Text>
      </View>
    )
  }

  render() {
    return (
      <>
        {/* <Text>
          TestPage1
        </Text>
        <TouchableOpacity
          onPress={() => { this.goToPage2() }}
          style={{width:90,
            height: 50,
            borderRadius: 40,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"#666",}}
        >
          <Text>
          TestPage1
          </Text>
        </TouchableOpacity> */}
        <PageListView 
          pageLen={15} 
          refresh={this.refresh} 
          loadMore={this.loadMore} 
          renderRow={this.renderRow} 
        />
      </>
    )
  }
};

const styles = StyleSheet.create({
  textStyle: {
    color: '#ff0000'
  }
});

export default TestPage1;