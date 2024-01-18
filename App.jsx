import React from 'react'
import { Text, View } from 'react-native'
import Home from './src/pages/Home';
import StackNavigation from './src/navigation/StackNavigation';

const App = () =>{
    return (
      <View style={{flex:1}}>
        <StackNavigation />
      </View>
    )
  }

export default App;