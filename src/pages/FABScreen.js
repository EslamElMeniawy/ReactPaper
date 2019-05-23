import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { FAB, Portal } from 'react-native-paper';

export default class DrawerScreen extends React.PureComponent {
  state = {
    fabOpen: false,
  };

  render() {
    const { fabOpen } = this.state;

    return (
      <SafeAreaView>
        <StatusBar barStyle="light-content" backgroundColor="#34515e" />
        <FAB
          icon="add"
          onPress={() => {}}
          style={{
            position: 'absolute',
            margin: 16,
            top: 0,
            right: 0,
          }}
        />
        <FAB
          icon="add"
          small
          onPress={() => {}}
          style={{
            position: 'absolute',
            margin: 16,
            top: 0,
            left: 0,
          }}
        />
        <FAB
          icon="add"
          label="Add"
          onPress={() => {}}
          style={{
            position: 'absolute',
            margin: 16,
            top: 70,
            right: 0,
          }}
        />
        <FAB
          icon="add"
          color="#8b6e60"
          onPress={() => {}}
          theme={{ colors: { accent: '#607d8b' } }}
          style={{
            position: 'absolute',
            margin: 16,
            top: 70,
            left: 0,
          }}
        />
        <FAB
          icon="add"
          loading
          onPress={() => {}}
          style={{
            position: 'absolute',
            margin: 16,
            left: 0,
            top: 140,
          }}
        />
        <Portal>
          <FAB.Group
            open={fabOpen}
            icon={fabOpen ? 'close' : 'add'}
            actions={[
              { icon: 'add', onPress: () => {} },
              { icon: 'star', label: 'Star', onPress: () => {} },
              { icon: 'email', label: 'Email', onPress: () => {} },
              { icon: 'notifications', label: 'Remind', onPress: () => {} },
            ]}
            onStateChange={({ open }) => this.setState({ fabOpen: open })}
          />
        </Portal>
      </SafeAreaView>
    );
  }
}
