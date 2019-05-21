import React from 'react';
import { SafeAreaView, StatusBar, ScrollView } from 'react-native';
import { ActivityIndicator, ProgressBar, Colors } from 'react-native-paper';

export default function ProgressScreen() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#34515e" />
      <ScrollView>
        <ActivityIndicator style={{ marginVertical: 16 }} />
        <ActivityIndicator color={Colors.red800} style={{ marginVertical: 16 }} />
        <ActivityIndicator size="small" style={{ marginVertical: 16 }} />
        <ActivityIndicator size="large" style={{ marginVertical: 16 }} />
        <ActivityIndicator size={40} style={{ marginVertical: 16 }} />
        <ProgressBar progress={0.5} style={{ marginVertical: 16, marginHorizontal: 16 }} />
        <ProgressBar
          progress={0.5}
          color={Colors.red800}
          style={{ marginVertical: 16, marginHorizontal: 16 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
