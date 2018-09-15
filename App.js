import React from 'react'
import { View } from 'react-native'
import { MainNavigator } from './config/routes'
import AppStatusBar from './components/AppStatusBar'

const App = () => (
  <View style={{ flex: 1 }}>
    <AppStatusBar backgroundColor="#692476" barStyle="light-content" />
    <MainNavigator />
  </View>
)

export default App
