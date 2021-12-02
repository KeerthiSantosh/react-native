import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Keyboard,
  Image
} from "react-native";
import Search from "../screens/search";

import * as Animatable from 'react-native-animatable'

const listItems = ['Development', 'Business', 'IT & Software', 'Office Productivity', 'Personal Development', 'Design', 'Marketing', 'LifeStyle', 'Photography', 'Health & Fitness', 'Teacher Training', 'Music']


import Icon from 'react-native-vector-icons/Ionicons'
class App extends Component {

  // state = {
  //   searchBarFocused: false
  // }

  // componentDidMount() {
  //   this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
  //   this.keyboardWillShow = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
  //   this.keyboardWillHide = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)


  // }

  // keyboardDidShow = () => {
  //   this.setState({ searchBarFocused: true })
  // }

  // keyboardWillShow = () => {
  //   this.setState({ searchBarFocused: true })
  // }

  // keyboardWillHide = () => {
  //   this.setState({ searchBarFocused: false })
  // }
  render() {
    return (
      <View style={styles.header}>
        <Image
          source={require('../assests/notification.png')}
          style={{
            width: 28,
            height: 24,
          }}
        />
        <Search />

        <Image
          source={require('../assests/message.png')}
          style={{
            width: 28,
            height: 24,
          }}
        />
        <Image source={require('../assests/Rectangle.png')} style={{ height: 36, width: 36, borderRadius: 50 }} />
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  header: {
    height: 55,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#ffffff',
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});