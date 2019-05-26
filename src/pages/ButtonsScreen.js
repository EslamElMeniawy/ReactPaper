import React from 'react';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

import Container from '../components/Container';

export default function ButtonsScreen() {
  return (
    <Container>
      <ScrollView>
        <Button onPress={() => {}} style={{ marginHorizontal: 16, marginTop: 16 }}>
          {'Button'}
        </Button>
        <Button mode="outlined" onPress={() => {}} style={{ marginHorizontal: 16, marginTop: 16 }}>
          {'Button'}
        </Button>
        <Button mode="contained" onPress={() => {}} style={{ marginHorizontal: 16, marginTop: 16 }}>
          {'Button'}
        </Button>
        <Button
          mode="text"
          color="#8b6e60"
          loading
          style={{ marginHorizontal: 16, marginTop: 16 }}
          onPress={() => {}}
        >
          {'Button'}
        </Button>
        <Button
          mode="outlined"
          color="#8b6e60"
          icon="add-a-photo"
          theme={{ roundness: 8 }}
          style={{ marginHorizontal: 16, marginTop: 16 }}
          onPress={() => {}}
        >
          {'Button'}
        </Button>
        <Button
          mode="contained"
          color="#8b6e60"
          uppercase={false}
          theme={{ roundness: 16 }}
          style={{ marginHorizontal: 16, marginTop: 16 }}
          onPress={() => {}}
        >
          {'Button'}
        </Button>
      </ScrollView>
    </Container>
  );
}
