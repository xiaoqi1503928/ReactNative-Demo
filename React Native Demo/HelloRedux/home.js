/**
 * Created by Xue on 2017/9/6.
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import {
  increase,
  decrease,
  reset
} from './Redux/actions';

class Home extends Component {
  
  onPressReset(){
	this.props.dispatch(reset());
  }
  
  onPressInc(){
	this.props.dispatch(increase());
  }
  
  onPressDec(){
	this.props.dispatch(decrease());
  }
  
  render() {
	return (
	  <View style={styles.container}>
		<Text style={styles.counter}>
		  {this.props.counter.count}
		</Text>
		<TouchableOpacity style={styles.reset} onPress={()=>this.onPressReset()}>
		  <Text>归零</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.start} onPress={()=>this.onPressInc()}>
		  <Text>加1</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.stop} onPress={()=>this.onPressDec()}>
		  <Text>减1</Text>
		</TouchableOpacity>
	  </View>
	);
  }
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	flexDirection: "column",
	justifyContent: 'center',
	alignItems: 'center',
  },
  counter: {
	fontSize: 50,
	marginBottom: 70
  },
  reset: {
	margin: 10,
	backgroundColor: 'yellow'
  },
  start: {
	margin: 10,
	backgroundColor: 'yellow'
  },
  stop: {
	margin: 10,
	backgroundColor: 'yellow'
  }
});

const mapStateToProps = state => ({
  counter: state.counter
})

export default connect(mapStateToProps)(Home);