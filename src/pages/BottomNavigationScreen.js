/* eslint-disable react/no-unused-state */
import React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import Container from '../components/Container';

const MusicRoute = () => (
  <Container>
    <Text>Music</Text>
  </Container>
);

const AlbumsRoute = () => (
  <Container>
    <Text>Albums</Text>
  </Container>
);

const RecentsRoute = () => (
  <Container>
    <Text>Recents</Text>
  </Container>
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
        key: 'albums',
        title: 'Albums',
        icon: 'album',
        badge: '5',
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
