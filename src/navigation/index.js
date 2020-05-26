import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from '../pages/home/HomePage';
import DetailsPage from '../pages/details/DetailsPage';
import HomeTitle from './home/HeaderTitle';
import { 
  StyleSheet
} from 'react-native';
import HeaderRight from './home/HeaderRight';
import TestPage1 from '../pages/test/TestPage1';
import TestPage2 from '../pages/test/TestPage2';
import TestPage3 from '../pages/test/TestPage3';

const Stack = createStackNavigator();

const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='home' 
          component={HomePage}
          options={{
            headerStyle: styles.homeHeaderStyle,
            headerTitle: props => <HomeTitle {...props} />,
            headerRight: () => <HeaderRight />,
          }} 
        />

        <Stack.Screen 
          name='Details' 
          component={DetailsPage} 
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen 
          name='page1' 
          component={TestPage1}
        />

        <Stack.Screen 
          name='page2' 
          component={TestPage2}
        />

        <Stack.Screen 
          name='page3' 
          component={TestPage3}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeHeaderStyle: {
    height: 280,
    borderBottomWidth: 0,
    elevation: 0,
  }
});

export default Nav;