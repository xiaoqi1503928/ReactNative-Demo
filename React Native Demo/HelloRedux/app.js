/**
 * Created by Xue on 2017/9/6.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  Provider
} from 'react-redux';

import Home from './home';

import store from './Redux/store';

export default class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
		<Home/>
	  </Provider>
	);
  }
}