/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
//noinspection JSUnresolvedVariable
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
} from 'react-native';


// 模拟数据
var mockedMoviesData = [
    {title: '标题', year: '2017', poster: {thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
];
// 请求URL
let REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';


export default class HelloReactNative extends Component {

  //构造器
  constructor(props){
    super(props)
	this.state = {
	  dataSource: new ListView.DataSource({
		rowHasChanged: (row1, row2) => row1 !== row2,
	  }),
	  loaded: false,
	};
    
    this.fetchData = this.fetchData.bind(this);
  }
  
  componentDidMount() {
	this.fetchData();
  }
  
  fetchData() {
	fetch(REQUEST_URL)
	  .then((response) => response.json())
	  .then((responseData) => {

		this.setState({
		  dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
		  loaded: true,
		});
	  })
	  .done();
  }

  render() {
	if (!this.state.loaded) {
	  return this.renderLoadingView();
	}
  
	return (
	  <ListView
		dataSource={this.state.dataSource}
		renderRow={this.renderMovie}
		style={styles.listView}
	  />
	);
  }
  
  renderLoadingView() {
	return (
	  <View style={styles.container}>
		<Text>
		  正在加载电影数据……
		</Text>
	  </View>
	);
  }
  
  renderMovie(movie) {
	return (
	  <View style={styles.container}>
		<Image
		  source={{uri: movie.posters.thumbnail}}
		  style={styles.thumbnail}
		/>
		<View style={styles.rightContainer}>
		  <Text style={styles.title}>{movie.title}</Text>
		  <Text style={styles.year}>{movie.year}</Text>
		</View>
	  </View>
	);
  }
  
  

}



const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      backgroundColor: '#F5FCFF',
  },

  thumbnail: {
    width: 100,
    height: 100
  },

  rightContainer: {
    flex: 1,
  },

  title: {
    fontSize: 20,
    textAlign: 'center',
    height: 50,
    backgroundColor: '#FF5C4F'
  },

  year: {
    textAlign: 'center',
    height: 50,
    backgroundColor: '#C0FF51'

  },
  
  listView: {
	paddingTop: 20,
	backgroundColor: '#F5FCFF',
  }
  
});

AppRegistry.registerComponent('HelloReactNative', () => HelloReactNative);
