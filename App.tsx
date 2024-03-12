/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/navigation/MainNavigation';

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
