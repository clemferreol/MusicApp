import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './Screens/Home';
import List from './Screens/List';
import Items from './Screens/Items';
import TrackPlayer from './Screens/TrackPlayer';

const AppNavigator = StackNavigator({
  Home: { screen: Home},
  List: { screen: List },
  Items: { screen: Items},
  TrackPlayer: { screen: TrackPlayer},

  }
);

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

AppRegistry.registerComponent('AppNavigator', () => AppNavigator);
