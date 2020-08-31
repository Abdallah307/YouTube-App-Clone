import React from 'react';
import {View} from 'react-native';
import Home from './src/screens/Home'
import AppNavigator from './src/navigation/AppNavigator';

const App = (props) => {
  return (
    <View style={{flex:1}}>
      <AppNavigator/>
    </View>
  );
};



export default App;
