import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import {Item} from './components/Item';

export default class App extends Component {

  //returns some of sort of view/item components
  render(){
    return (
      <SafeAreaView>

      </SafeAreaView>
    )
  }

}

const styles = StyleSheet.create({
  main: {

    paddingHorizontal: 10,
  }
})