import React, {Component} from 'react';
import {Image, Dimensions} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {IMAGE} from './src/constants/image';
import {
  SideMenu,
  Feed,
  FeedDetails,
  Search,
  SearchDetails,
  Profile,
  Setting,
  Login,
  Register,
} from './src/components';

const navOptionsHandler = navigation => ({
  headerShown: false,
});

const FeedStack = createStackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: navOptionsHandler,
  },
  FeedDetails: {
    screen: FeedDetails,
    navigationOptions: navOptionsHandler,
  },
});
const SearchStack = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: navOptionsHandler,
  },
  SearchDetails: {
    screen: SearchDetails,
    navigationOptions: navOptionsHandler,
  },
});

const MainTabs = createBottomTabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={IMAGE.ICON_MENU}
          resizeMode="contain"
          style={{width: 30, height: 30}}
        />
      ),
    },
  },
  Search: {
    screen: SearchStack,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={IMAGE.ICON_MENU}
          resizeMode="contain"
          style={{width: 30, height: 30}}
        />
      ),
    },
  },
});

const MainStack = createStackNavigator(
  {
    Home: {
      screen: MainTabs,
      navigationOptions: navOptionsHandler,
    },
    Setting: {
      screen: Setting,
      navigationOptions: navOptionsHandler,
    },
    Profile: {
      screen: Profile,
      navigationOptions: navOptionsHandler,
    },
  },
  {initialRouteName: 'Home'},
);

const appDrawer = createDrawerNavigator(
  {
    drawer: MainStack,
  },
  {
    contentComponent: SideMenu,
    drawerWidth: (Dimensions.get('window').width * 3) / 4,
  },
);

const authStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: navOptionsHandler,
  },
  Register: {
    screen: Register,
    navigationOptions: navOptionsHandler,
  },
});

const Mainapp = createSwitchNavigator(
  {
    app: appDrawer,
    auth: authStack,
  },
  {
    initialRouteName: 'auth',
  },
);

const AppNavigator = createAppContainer(Mainapp);
export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
