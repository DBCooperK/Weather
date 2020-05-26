import React from 'react';
import {
  View,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';
import WeatherItem from './WeatherItem';

const WeatherList = (props) => {
  const { weatherList } = props;

  return (
    <View 
      style={{  
        marginTop: 20,
        height: 150,
      }}
    >
      <FlatList
        horizontal={true}
        ItemSeparatorComponent={() => <View style={{width: 15}}></View>}
        ListHeaderComponent={() => <View style={{width: 40}}></View>}
        ListFooterComponent={() => <View style={{width: 40}}></View>}
        keyExtractor={(item) => item.time}
        data={weatherList}
        renderItem={({item}) => <WeatherItem key={item.time} item={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const mapState = (state) => ({
  weatherList: state.home.weatherList
});

export default connect(mapState, null)(WeatherList);