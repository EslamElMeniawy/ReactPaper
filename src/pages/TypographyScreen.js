import React from 'react';
import { ScrollView } from 'react-native';
import {
  Caption, Headline, Paragraph, Subheading, Text, Title,
} from 'react-native-paper';

import Container from '../components/Container';

export default function TypographyScreen() {
  return (
    <Container>
      <ScrollView>
        <Caption style={{ marginVertical: 16, marginHorizontal: 16 }}>Caption</Caption>
        <Headline style={{ marginVertical: 16, marginHorizontal: 16 }}>Headline</Headline>
        <Paragraph style={{ marginVertical: 16, marginHorizontal: 16 }}>Paragraph</Paragraph>
        <Subheading style={{ marginVertical: 16, marginHorizontal: 16 }}>Subheading</Subheading>
        <Text style={{ marginVertical: 16, marginHorizontal: 16 }}>Text</Text>
        <Title style={{ marginVertical: 16, marginHorizontal: 16 }}>Title</Title>
      </ScrollView>
    </Container>
  );
}
