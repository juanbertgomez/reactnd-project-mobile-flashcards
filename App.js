import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { MainNavigator } from './utils/routes'
import AppStatusBar from './components/AppStatusBar'
import { createStore } from 'redux'
import { purple } from './utils/colors'
import reducer from './reducers'

export default class App extends React.Component {
  render () {
    return (
      <Provider store = {createStore(reducer)} >
        <View style={{ flex: 1 }}>
          <AppStatusBar backgroundColor= {purple} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}



