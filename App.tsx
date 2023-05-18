import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import 'react-native-gesture-handler';
import AppContainer from './src/navigator';
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <AppContainer />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
