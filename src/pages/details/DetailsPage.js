import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  width as headerWidth,
  height as headerHeight
} from '../../utils/Adapter';
import CXIcon from '../../utils/CXIcon';
import NavigationUtil from '../../navigation/NavigationUtil';
import imageRes from '../../config/imageRes';
import DailyWeatherItem from './components/DailyWeatherItem';
import { connect } from 'react-redux';

class DetailsPage extends Component {
  render() {
    let { forecastWeatherDatas } = this.props;

    return (
      <LinearGradient
          start={{x:0.5, y:0}} 
          end={{x:0.5, y:1}} 
          colors={['#1C2F58', '#364C7D']} 
          style={{
            width: headerWidth,
            height: headerHeight + 16,
          }}
        >
          
        <View style={styles.titleBar}>
          <TouchableOpacity
            style={{
              width: 20,
              height: 20,
              marginLeft: 20,
            }}
            onPress={
              () => NavigationUtil.goTo('home')
            }
          >
            <CXIcon
              name={'leftArrow'} 
              size={20} 
              color={'#F2F3F5'}
            />
          </TouchableOpacity>
        </View>
        <Image
          source={imageRes.detailWeatherImg}
          style={{
            width: headerWidth,
            height: 270,
          }}
        />
        <View style={{alignItems:'center'}} >
          <Text
            style={{
              fontSize: 33,
              color: '#FFF'
            }}
          >
            Week
          </Text>
        </View>
        <FlatList
            keyExtractor={(item) => item.week.toString()}
            data={forecastWeatherDatas}
            renderItem={({item}) => <DailyWeatherItem item={item} />}
            showsVerticalScrollIndicator={false}
          />
      </LinearGradient>
    );
  }
};

const styles = StyleSheet.create({
  titleBar: {
    height: 80,
    justifyContent: 'center'
  }
});

const mapState = (state) => ({
  forecastWeatherDatas: state.detail.forecastWeatherDatas
});

export default connect(mapState, null)(DetailsPage);