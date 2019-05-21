import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import MainScreen from './pages/MainScreen';
import AvatarScreen from './pages/AvatarScreen';
import ProgressScreen from './pages/ProgressScreen';
import AppBarScreen from './pages/AppBarScreen';
import ButtonsScreen from './pages/ButtonsScreen';

const AppNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Avatar: AvatarScreen,
    Progress: ProgressScreen,
    AppBar: AppBarScreen,
    Buttons: ButtonsScreen,
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppNavigator);

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#607d8b',
    accent: '#8b6e60',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AppContainer />
    </PaperProvider>
  );
}
