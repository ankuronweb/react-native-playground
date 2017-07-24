'use strict'
import React, { Component } from 'react'
import { AppRegistry, Text, View } from 'react-native'
import ViewContainer from './app/components/viewContainer/index'
import StatusBar from './app/components/statusBar/index'

export default class sc extends Component {
  render() {
    return (
      <ViewContainer>
        <StatusBar></StatusBar>
        <Text>{'Hello! Hello! Hello!'}</Text>
      </ViewContainer>
    );
  }
}

AppRegistry.registerComponent('sc', () => sc)
