import React from 'react';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';

import Container from '../components/Container';

export default function MainScreen({ navigation }) {
  return (
    <Container>
      <ScrollView style={{ marginBottom: 16 }}>
        <Button
          mode="contained"
          style={{ marginHorizontal: 16, marginTop: 16 }}
          onPress={() => {
            navigation.navigate('Progress');
          }}
        >
          {'Progress'}
        </Button>
        <Button
          mode="contained"
          style={{ marginHorizontal: 16, marginTop: 16 }}
          onPress={() => {
            navigation.navigate('AppBar');
          }}
        >
          {'App Bar'}
        </Button>
        <Button
          mode="contained"
          style={{ marginHorizontal: 16, marginTop: 16 }}
          onPress={() => {
            navigation.navigate('Avatar');
          }}
        >
          {'Avatar'}
        </Button>
        <Button
          mode="contained"
          style={{ marginHorizontal: 16, marginTop: 16 }}
          onPress={() => {
            navigation.navigate('Badge');
          }}
        >
          {'Badge'}
        </Button>
        <Button
          mode="contained"
          style={{ marginHorizontal: 16, marginTop: 16 }}
          onPress={() => {
            navigation.navigate('Banner');
          }}
        >
          {'Banner'}
        </Button>
        <Button
          mode="contained"
          style={{ marginHorizontal: 16, marginTop: 16 }}
          onPress={() => {
            navigation.navigate('BottomNavigation');
          }}
        >
          {'Bottom Navigation'}
        </Button>
        <Button
          mode="contained"
          style={{ marginHorizontal: 16, marginTop: 16 }}
          onPress={() => {
            navigation.navigate('Buttons');
          }}
        >
          {'Buttons'}
        </Button>
        <Button
          mode="contained"
          style={{ marginHorizontal: 16, marginTop: 16 }}
          onPress={() => {
            navigation.navigate('Typography');
          }}
        >
          {'Typography'}
        </Button>
        <Button
          mode="contained"
          style={{ marginHorizontal: 16, marginTop: 16 }}
          onPress={() => {
            navigation.navigate('Card');
          }}
        >
          {'Card'}
        </Button>
        <Button
          mode="contained"
          style={{ marginHorizontal: 16, marginTop: 16 }}
          onPress={() => {
            navigation.navigate('Checkbox');
          }}
        >
          {'Checkbox'}
        </Button>
        <Button
          mode="contained"
          style={{ marginHorizontal: 16, marginTop: 16 }}
          onPress={() => {
            navigation.navigate('Chip');
          }}
        >
          {'Chip'}
        </Button>
        <Button
          mode="contained"
          style={{ marginHorizontal: 16, marginTop: 16 }}
          onPress={() => {
            navigation.navigate('DataTable');
          }}
        >
          {'Data Table & Surface'}
        </Button>
        <Button
          mode="contained"
          style={{ marginHorizontal: 16, marginTop: 16 }}
          onPress={() => {
            navigation.navigate('Dialog');
          }}
        >
          {'Dialog'}
        </Button>
        <Button
          mode="contained"
          style={{ marginHorizontal: 16, marginTop: 16 }}
          onPress={() => {
            navigation.navigate('Drawer');
          }}
        >
          {'Drawer & Divider'}
        </Button>
        <Button
          mode="contained"
          style={{ marginHorizontal: 16, marginTop: 16 }}
          onPress={() => {
            navigation.navigate('FAB');
          }}
        >
          {'FAB'}
        </Button>
        <Button
          mode="contained"
          style={{ marginHorizontal: 16, marginTop: 16 }}
          onPress={() => {
            navigation.navigate('TextInput');
          }}
        >
          {'Text Input & Helper Text'}
        </Button>
      </ScrollView>
    </Container>
  );
}

MainScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
