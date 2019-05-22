import React from 'react';
import { SafeAreaView, StatusBar, ScrollView } from 'react-native';
import {
  Card, Avatar, IconButton, Title, Paragraph, Button,
} from 'react-native-paper';

export default function CardScreen() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#34515e" />
      <ScrollView>
        <Card elevation={8} style={{ marginHorizontal: 16, marginVertical: 16 }}>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={props => <Avatar.Icon {...props} icon="folder" />}
            right={props => <IconButton {...props} icon="more-vert" onPress={() => {}} />}
          />
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
            <Button onPress={() => {}}>Cancel</Button>
            <Button onPress={() => {}}>Ok</Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
