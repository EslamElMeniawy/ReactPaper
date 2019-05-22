import React from 'react';
import { SafeAreaView, StatusBar, ScrollView } from 'react-native';
import { Badge, Colors } from 'react-native-paper';

export default function BadgeScreen() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#34515e" />
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
    </SafeAreaView>
  );
}
