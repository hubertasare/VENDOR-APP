import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import StackHandler from './StackHandler';
import ButtomTabNav from './ButtomTabNav';
import Home from './Home';
export default function App() {
  return (
    <View>
      <NavigationContainer>
        
          <Home/>

        {/* <StackHandler/> */}
        <ButtomTabNav/>




      </NavigationContainer>




      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
