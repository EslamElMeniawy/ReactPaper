import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import MainScreen from './pages/main/MainScreen';

const AppNavigator = createStackNavigator(
  {
    Main: MainScreen,
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
}
