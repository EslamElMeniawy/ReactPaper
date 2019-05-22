import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import MainScreen from './pages/MainScreen';
import AvatarScreen from './pages/AvatarScreen';
import ProgressScreen from './pages/ProgressScreen';
import AppBarScreen from './pages/AppBarScreen';
import BadgeScreen from './pages/BadgeScreen';
import BannerScreen from './pages/BannerScreen';
import BottomNavigationScreen from './pages/BottomNavigationScreen';
import ButtonsScreen from './pages/ButtonsScreen';
import TypographyScreen from './pages/TypographyScreen';
import CardScreen from './pages/CardScreen';
import CheckboxScreen from './pages/CheckboxScreen';
import ChipScreen from './pages/ChipScreen';
import DataTableScreen from './pages/DataTableScreen';
import DialogScreen from './pages/DialogScreen';

const AppNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Avatar: AvatarScreen,
    Progress: ProgressScreen,
    AppBar: AppBarScreen,
    Badge: BadgeScreen,
    Banner: BannerScreen,
    BottomNavigation: BottomNavigationScreen,
    Buttons: ButtonsScreen,
    Typography: TypographyScreen,
    Card: CardScreen,
    Checkbox: CheckboxScreen,
    Chip: ChipScreen,
    DataTable: DataTableScreen,
    Dialog: DialogScreen,
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
