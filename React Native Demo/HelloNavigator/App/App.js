/**
 * Created by Xue on 2017/8/31.
 */

// 导入包和组件
import React, {
  Component
} from 'react';

// 导入需要的组件
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';

// 导入组要的组件
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';

// 导入需要的组件 from 一个路径
import RecentChatsScreen from './RecentChatsScreen';
import AllContactsScreen from './AllContactsScreen';
import ChatScreen from './ChatScreen';



// 声明一个常量并赋值 构建了一个tabbar
const TabbarNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});


// 设置tabbar在导航中的配置
TabbarNavigator.navigationOptions = {
  title: 'My Chats',
};


// 嵌套Navigator
// Tab嵌入Stack中 即  tabbar中嵌套nav
const MainScreenNavigator = StackNavigator({
  Home: { screen: TabbarNavigator },
  Chat: { screen: ChatScreen },
});


// 导出组件，可以供其他组件调用
export default MainScreenNavigator;
