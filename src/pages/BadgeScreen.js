import React from 'react';
import { ScrollView } from 'react-native';
import { Badge, Colors } from 'react-native-paper';

import Container from '../components/Container';

export default function BadgeScreen() {
  return (
    <Container>
      <ScrollView>
        <Badge style={{ marginVertical: 16, marginHorizontal: 16 }}>5</Badge>
        <Badge size={30} style={{ marginVertical: 16, marginHorizontal: 16 }}>
          {5}
        </Badge>
        <Badge style={{ marginVertical: 16, marginHorizontal: 16 }}>String</Badge>
        <Badge size={30} style={{ marginVertical: 16, marginHorizontal: 16 }}>
          {'String'}
        </Badge>
        <Badge style={{ marginVertical: 16, marginHorizontal: 16, backgroundColor: Colors.red800 }}>
          {5}
        </Badge>
      </ScrollView>
    </Container>
  );
}
