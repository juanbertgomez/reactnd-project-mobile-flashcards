import React from 'react'
import { View, Platform, StatusBar } from 'react-native'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { Constants } from 'expo'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { createStore } from 'redux'
import { purple, white } from './utils/colors'
import reducer from './reducers'
import Decks from './components/Decks'
import Deck from './components/Deck'
import AddDeck from './components/AddDeck'
import Questions from './components/Questions'
import Answer from './components/Answer'
import AddCard from './components/AddCard'


function CardsStatusBar ({backgroundColor, ...props}){
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View> 
  )
}

const Tabs = createBottomTabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
  },
},
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})


const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      header: null
    }
  },
  AddDeck: {
    screen: AddDeck
  },
  Questions: {
    screen: Questions
  },
  Answer: {
    screen: Answer
  },
  AddCard: {
    screen: AddCard
  }
})


export default class App extends React.Component {
  render () {
    return (
      <Provider store = {createStore(reducer)} >
        <View style={{ flex: 1 }}>
          <CardsStatusBar backgroundColor= {purple} barStyle="light-content" />
          <MainNavigator />
          </View>
      </Provider>
    )
  }
}



