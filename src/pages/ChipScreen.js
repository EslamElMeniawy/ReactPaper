import React from 'react';
import { SafeAreaView, StatusBar, ScrollView } from 'react-native';
import { Chip, Avatar } from 'react-native-paper';

export default function ChipScreen() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#34515e" />
      <ScrollView>
        <Chip style={{ marginVertical: 16, marginHorizontal: 16 }}>Default Chip</Chip>
        <Chip mode="flat" style={{ marginVertical: 16, marginHorizontal: 16 }}>
          {'Flat Chip'}
        </Chip>
        <Chip mode="outlined" style={{ marginVertical: 16, marginHorizontal: 16 }}>
          {'Outlined Chip'}
        </Chip>
        <Chip icon="info" style={{ marginVertical: 16, marginHorizontal: 16 }}>
          {'Icon Chip'}
        </Chip>
        <Chip
          avatar={<Avatar.Text label="XD" size={20} />}
          style={{ marginVertical: 16, marginHorizontal: 16 }}
        >
          {'Avatar Chip'}
        </Chip>
        <Chip selected style={{ marginVertical: 16, marginHorizontal: 16 }}>
          {'Selected Chip'}
        </Chip>
        <Chip disabled style={{ marginVertical: 16, marginHorizontal: 16 }}>
          {'Disabled Chip'}
        </Chip>
        <Chip onPress={() => {}} style={{ marginVertical: 16, marginHorizontal: 16 }}>
          {'Clickable Chip'}
        </Chip>
        <Chip onClose={() => {}} style={{ marginVertical: 16, marginHorizontal: 16 }}>
          {'Closable Chip'}
        </Chip>
      </ScrollView>
    </SafeAreaView>
  );
}
