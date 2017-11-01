/**
 * Created by Xue on 2017/9/1.
 */


import React, {
  Component
} from 'react';
 import {
  Text,
  Button
} from 'react-native'

export default class AllContactsScreen extends React.Component {
  render(){
	return (
	  <Text>List of all contacts</Text>,
		<Button
		  onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
		  title="Chat with Lucy"
		/>
	);
  }
}
