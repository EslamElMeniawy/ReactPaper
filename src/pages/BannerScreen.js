import React from 'react';
import { Image, View } from 'react-native';
import {
  Banner, Avatar, Colors, Button,
} from 'react-native-paper';

import Container from '../components/Container';

export default class BannerScreen extends React.PureComponent {
  state = {
    banner1Visible: false,
    banner2Visible: false,
  };

  render() {
    const { banner1Visible, banner2Visible } = this.state;
    return (
      <Container>
        <Banner
          visible={banner1Visible}
          actions={[
            {
              label: 'Fix it',
              onPress: () => this.setState({ banner1Visible: false }),
            },
            {
              label: 'Learn more',
              onPress: () => this.setState({ banner1Visible: false }),
            },
          ]}
          image={({ size }) => (
            <Image
              source={{ uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4' }}
              style={{
                width: size,
                height: size,
              }}
            />
          )}
        >
          {'Banner 1'}
        </Banner>
        <Banner
          visible={banner2Visible}
          actions={[
            {
              label: 'Fix it',
              onPress: () => this.setState({ banner2Visible: false }),
            },
            {
              label: 'Learn more',
              onPress: () => this.setState({ banner2Visible: false }),
              color: Colors.red800,
            },
          ]}
          image={({ size }) => <Avatar.Icon icon="folder" size={size} />}
        >
          {' Banner 2'}
        </Banner>
        <View style={{ flexDirection: 'row' }}>
          <Button onPress={() => this.setState({ banner1Visible: true })}>Banner 1</Button>
          <Button onPress={() => this.setState({ banner2Visible: true })}>Banner 2</Button>
        </View>
      </Container>
    );
  }
}
