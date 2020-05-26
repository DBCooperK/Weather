import { 
  TouchableOpacity
} from 'react-native';
import React from 'react';
import CXIcon from '../../utils/CXIcon';
import NavigationUtil from '../NavigationUtil';

const HeaderRight = () => {
  return (
    <TouchableOpacity 
      style={{
        marginRight : 15, 
        marginBottom: 135
      }}
      onPress={() => NavigationUtil.push('page1')}
    > 
      <CXIcon name={'more'} size={30} color={'#fff'}/>
    </TouchableOpacity>
  );
}

export default HeaderRight;