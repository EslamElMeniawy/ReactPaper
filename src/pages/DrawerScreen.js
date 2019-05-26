import React from 'react';
import { ScrollView } from 'react-native';
import { Drawer, Divider } from 'react-native-paper';

import Container from '../components/Container';

export default class DrawerScreen extends React.PureComponent {
  state = {
    active: 'first',
  };

  render() {
    const { active } = this.state;

    return (
      <Container>
        <ScrollView>
          <Drawer.Item label="Default drawer item" />
          <Drawer.Item label="Icon drawer item" icon="folder" />
          <Divider />
          <Drawer.Item label="Active drawer item" active />
          <Divider inset />
          <Drawer.Item label="Clickable drawer item" onPress={() => {}} />
          <Drawer.Section title="Drawer section">
            <Drawer.Item
              label="First Item"
              active={active === 'first'}
              onPress={() => {
                this.setState({ active: 'first' });
              }}
            />
            <Drawer.Item
              label="Second Item"
              active={active === 'second'}
              onPress={() => {
                this.setState({ active: 'second' });
              }}
            />
          </Drawer.Section>
        </ScrollView>
      </Container>
    );
  }
}
