'use strict'
import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './styles'

class StatusBar extends Component {
	render(){
		return(
			<View style={styles.statusBarBackground}>
			</View>
		)
	}
}

module.exports = StatusBar