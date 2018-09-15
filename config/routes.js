import React from 'react';
import { Platform } from 'react-native';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import Decks from '../components/Decks';
import CreateQuiz from '../components/CreateQuiz';
import Settings from '../components/Settings';

export const Tabs = createMaterialTopTabNavigator(
  {
    Decks: {
      screen: Decks,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="home" size={30} color={tintColor} />
        ),
      },
    },
    CreateQuiz: {
      screen: CreateQuiz,
      navigationOptions: {
        tabBarLabel: 'Create quiz',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="plus-square" size={30} color={tintColor} />
        ),
      },
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="cog" size={30} color={tintColor} />
        ),
      },
    },
  },
  {
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? '#292477' : '#fff',
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? '#fff' : '#292477',
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      },
    },
  }
);

export const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
  },
  CreateQuiz: {
    screen: CreateQuiz,
    navigationOptions: {
      headerTintColor: '#hhh',
      headerStyle: {
        backgroundColor: '#292477',
      },
    },
  },
});
