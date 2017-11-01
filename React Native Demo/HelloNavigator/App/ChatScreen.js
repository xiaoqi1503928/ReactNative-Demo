/**
 * Created by Xue on 2017/9/1.
 */

import React, {
  Component,
} from 'react';

import {
  View,
  Text,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';


export default class ChatScreen extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
	title: `Chat with ${navigation.state.params.user}`,
  });
  render() {
	// The screen's current route is passed in to `props.navigation.state`:
	const { params } = this.props.navigation.state;
	return (
	  <View>
		<Text>Chat with {params.user}</Text>
	  </View>
	);
  };
}