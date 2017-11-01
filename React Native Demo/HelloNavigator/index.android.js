/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


// 导入需要的包 从一个路径  Component类似于Object基础组件
import React, { Component } from 'react';

// 导入需要的类 从一个路径
import { AppRegistry } from 'react-native';

// 导入类 从一个路径
import MainScreenNavigator from './App/App';


// class HelloNavigator extends Component  声明一个组件，继承Component
// export default 导出，此组件（类）在其他组件或文件中使用，需要导出

export default class HelloNavigator extends Component {
  
  // 渲染方法
  render() {
	return (
	  // 渲染的组件
	  <MainScreenNavigator></MainScreenNavigator>
	);
  }
}

// 注册组件，入口进来后，首先会执行注册函数
// 必须注册一个和工程名一样的组件
AppRegistry.registerComponent('HelloNavigator', () => HelloNavigator);
