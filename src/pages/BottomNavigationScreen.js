/* eslint-disable react/no-unused-state */
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';

const MusicRoute = () => (
  <SafeAreaView>
    <StatusBar barStyle="light-content" backgroundColor="#34515e" />
    <Text>Music</Text>
  </SafeAreaView>
);

const AlbumsRoute = () => (
  <SafeAreaView>
    <StatusBar barStyle="light-content" backgroundColor="#34515e" />
    <Text>Albums</Text>
  </SafeAreaView>
);

const RecentsRoute = () => (
  <SafeAreaView>
    <StatusBar barStyle="light-content" backgroundColor="#34515e" />
    <Text>Recents</Text>
  </SafeAreaView>
);

export default class BottomNavigationScreen extends React.PureComponent {
  state = {
    index: 0,
    routes: [
      {
        key: 'music',
        title: 'Music',
        icon: 'queue-music',
        badge: true,
      },
      {
        key: 'albums', title: 'Albums', icon: 'album', badge: '5',
      },
      { key: 'recents', title: 'Recents', icon: 'history' },
    ],
  };

  renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  handleIndexChange = index => this.setState({ index });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this.handleIndexChange}
        renderScene={this.renderScene}
      />
    );
  }
}
