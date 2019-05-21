import React from 'react';
import {
  SafeAreaView, StatusBar, ScrollView, View, Image,
} from 'react-native';
import { Appbar } from 'react-native-paper';
import PropTypes from 'prop-types';

export default function AppBarScreen({ navigation }) {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#34515e" />
      <ScrollView>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} style={{ marginHorizontal: 8 }} />
          <Appbar.Content
            title="Title"
            subtitle="Subtitle"
            titleStyle={{ textAlign: 'center' }}
            subtitleStyle={{ textAlign: 'center' }}
            style={{ paddingHorizontal: 0, marginHorizontal: 8 }}
          />
          <Appbar.Action icon="search" onPress={() => {}} style={{ marginHorizontal: 8 }} />
        </Appbar.Header>
        <View style={{ height: 16 }} />
        <Appbar.Header>
          <Appbar.Content title="Title" subtitle="Subtitle" />
        </Appbar.Header>
        <View style={{ height: 16 }} />
        <Appbar.Header>
          <Appbar.Action icon="search" onPress={() => {}} />
          <Appbar.Content title="Title" subtitle="Subtitle" />
          <Appbar.Action icon="search" onPress={() => {}} />
        </Appbar.Header>
        <View style={{ height: 16 }} />
        <Appbar.Header>
          <Image
            source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
            style={{ resizeMode: 'contain', width: 50, height: 24 }}
          />
          <Appbar.Content title="Title" subtitle="Subtitle" />
        </Appbar.Header>
        <View style={{ height: 16 }} />
        <Appbar.Header>
          <Image
            source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
            style={{ resizeMode: 'cover', width: 100, height: '100%' }}
          />
          <Appbar.Content />
          <Appbar.Action icon="search" onPress={() => {}} />
        </Appbar.Header>
      </ScrollView>
    </SafeAreaView>
  );
}

AppBarScreen.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
