import React, { Component } from 'react';
import {StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import SpinScreen from './components/SpinScreen';
import GiftsScreen from './components/GiftsScreen';
import MarketScreen from './components/MarketScreen';
import ProfileScreen from './components/ProfileScreen';

/*const RootStack = createStackNavigator(
  {
    Home: Home,
    Contact: Contact
  },
  {
    initialRouteName: 'Home'
  }
);*/

//const AppContainer = createAppContainer(RootStack);

//Bottom tab navigator
const TabNavigator = createBottomTabNavigator(
  {
  SpinScreen: { screen: SpinScreen, navigationOptions: { title: 'Çark' } },
  GiftsScreen: { screen: GiftsScreen, navigationOptions: { title: 'Hediyeler' } },
  MarketScreen: { screen: MarketScreen, navigationOptions: { title: 'Market' } },
  ProfileScreen: { screen: ProfileScreen, navigationOptions: { title: 'Profil' } }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'SpinScreen') {
          //iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          iconName = 'ios-disc';
        } else if (routeName === 'GiftsScreen') { 
          iconName = 'ios-gift';
        } else if(routeName === 'MarketScreen'){
          iconName = 'ios-basket';
        } else if(routeName === 'ProfileScreen'){
          iconName = 'ios-contact';
        }
        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }, 
    }),
    tabBarOptions: {
      activeTintColor: '#AEAE0A',
      inactiveTintColor: '#EAE7E7', 
      style: {
        backgroundColor: '#B42830'
      }, 
    }
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default class App extends Component {
  render(){
    return (
      <AppContainer />
    );
  }
}
