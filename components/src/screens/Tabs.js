import 'react-native-gesture-handler';
import React from 'react';
import { useRef } from 'react';
import {
  Svg,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
  Button,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateFeed from './createFeed';
import HomeScreen from '../screens/HomeScreen';
import Peers from '../screens/Peers';
import Elibrary from '../screens/E-Library';
import MedScope from '../screens/MedScope';
//import Post from '../src/post';

const Tab = createBottomTabNavigator();
const Tabs = (props) => {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: 'white',
            position: 'absolute',
            // bottom: 40,
            // marginHorizontal: 20,
            height: 60,
            borderRadius: 10,
            showdowColor: '#000',
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            paddingHorizontal: 20,
          },
        }}>
        { }
        <Tab.Screen
          name={'home'}
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={require('../assests/MicrosoftTeams-image.png')}
                  style={{
                    width: 28,
                    height: 24,
                  }}
                />
                <Text style={{ fontSize: 12, color: '#000000' }}>
                  Posts
                </Text>
              </View>
            ),
          }} listeners={({ navigation, route }) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            }
          })
          }
        />

        <Tab.Screen
          name="connect"
          component={Peers}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={require('../assests/peers.png')}
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
                <Text style={{ fontSize: 12, color: '#000000' }}>
                  Peers
                </Text>
              </View>
            ),
          }} listeners={({ navigation, route }) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth(),
                useNativeDriver: true,
              }).start();
            }

          })
          }
        />

        {
          //extra tab screen for action button
        }
        
        <Tab.Screen
          name={'CreateFeed'}
          component={CreateFeed}
          options={{
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity
              onPress={() => props.navigation.navigate('CreateFeed')}>
                <View
                  style={{
                    marginBottom: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../assests/add.png')}
                    style={{
                      width: 60,
                      height: 60,
                      borderColor: 'white',
                      borderWidth: 10,
                      borderRadius: 30,
                    }}
                  />
                </View>
              </TouchableOpacity>
            ),
          }}
        />

        <Tab.Screen
          name="epractise"
          component={Elibrary}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={require('../assests/elib.png')}
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
                <Text style={{ fontSize: 12, color: '#000000' }}>
                  E-Library
                </Text>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3,
                useNativeDriver: true,
              }).start();
            }

          })
          }
        />

        <Tab.Screen
          name="medscope"
          component={MedScope}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={require('../assests/medscope.png')}
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
                <Text style={{ fontSize: 12, color: '#000000' }}>
                  MedScope
                </Text>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 4,
                useNativeDriver: true,
              }).start();
            }

          })
          }
        />
      </Tab.Navigator>
      <Animated.View
        style={{
          width: getWidth() - 20,
          position: 'absolute',
          left: 30,
          bottom: 20,
          height: 2,
          backgroundColor: '#0079C6',
          borderRadius: 20,
          transform: [
            { translateX: tabOffsetValue }
          ]
        }}></Animated.View>
    </>
  );
};

function getWidth() {
  let width = Dimensions.get("window").width
  width = width - 40
  return width / 5
}

export default Tabs;
