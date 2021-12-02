import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { name as appName } from './app.json';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from "./components/src/screens/Tabs";
import CreateFeed from './components/src/screens/createFeed';
import Header from './components/src/screens/Header';
import React from 'react';

const Stack = createStackNavigator();
export const Navigation = () => {
    return (
        <NavigationContainer>
          {/* <Stack.Navigator initialRouteName="HomeScreen">
          <Tabs/> */}
          <Stack.Navigator>
          {/* <Stack.Screen component={Header} name="Header" options={{ headerShown: false }}/> */}
          <Stack.Screen component={Tabs} name="Tabs" options={{ headerShown: false }}/>
          <Stack.Screen component={CreateFeed} name="createFeed" options={{ headerShown: false }}/>
          </Stack.Navigator>
        </NavigationContainer>
    )
}

AppRegistry.registerComponent(appName, () =>Navigation)

