import React from 'react';
import { ScrollView } from 'react-native';
import { Avatar, Colors } from 'react-native-paper';

import Container from '../components/Container';

export default function AvatarScreen() {
  return (
    <Container>
      <ScrollView>
        <Avatar.Icon icon="folder" style={{ marginVertical: 16, marginHorizontal: 16 }} />
        <Avatar.Icon icon="folder" size={24} style={{ marginVertical: 16, marginHorizontal: 16 }} />
        <Avatar.Icon
          icon="folder"
          color={Colors.red800}
          style={{ marginVertical: 16, marginHorizontal: 16 }}
        />
        <Avatar.Icon
          icon="folder"
          theme={{ colors: { primary: Colors.red800 } }}
          style={{ marginVertical: 16, marginHorizontal: 16 }}
        />
        <Avatar.Image
          source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
          style={{ marginVertical: 16, marginHorizontal: 16 }}
        />
        <Avatar.Image
          source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
          size={24}
          style={{ marginVertical: 16, marginHorizontal: 16 }}
        />
        <Avatar.Text label="XD" style={{ marginVertical: 16, marginHorizontal: 16 }} />
      </ScrollView>
    </Container>
  );
}
