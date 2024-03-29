import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Route} from './Routes';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import SingleViewScreen from '../screens/SinglePageView/SingleViewScreen';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Route.Login}>
      <Stack.Screen name={Route.Home} component={HomeScreen} />
      <Stack.Screen name={Route.Login} component={LoginScreen} />
      <Stack.Screen name={Route.Register} component={RegisterScreen} />
      <Stack.Screen name={Route.SingleView} component={SingleViewScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
