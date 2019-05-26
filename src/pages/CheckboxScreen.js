import React from 'react';
import { ScrollView } from 'react-native';
import { Checkbox } from 'react-native-paper';

import Container from '../components/Container';

export default class CardScreen extends React.PureComponent {
  state = {
    checked: false,
  };

  render() {
    const { checked } = this.state;

    return (
      <Container>
        <ScrollView>
          <Checkbox status="checked" style={{ marginHorizontal: 16, marginVertical: 16 }} />
          <Checkbox status="unchecked" style={{ marginHorizontal: 16, marginVertical: 16 }} />
          <Checkbox status="indeterminate" style={{ marginHorizontal: 16, marginVertical: 16 }} />
          <Checkbox
            status="checked"
            disabled
            style={{ marginHorizontal: 16, marginVertical: 16 }}
          />
          <Checkbox
            status="unchecked"
            disabled
            style={{ marginHorizontal: 16, marginVertical: 16 }}
          />
          <Checkbox
            status="indeterminate"
            disabled
            style={{ marginHorizontal: 16, marginVertical: 16 }}
          />
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked: !checked });
            }}
            color="#607d8b"
            uncheckedColor="#8b6e60"
            style={{ marginHorizontal: 16, marginVertical: 16 }}
          />
          <Checkbox.Android
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked: !checked });
            }}
            color="#607d8b"
            uncheckedColor="#8b6e60"
            style={{ marginHorizontal: 16, marginVertical: 16 }}
          />
          <Checkbox.IOS
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({ checked: !checked });
            }}
            color="#607d8b"
            style={{ marginHorizontal: 16, marginVertical: 16 }}
          />
        </ScrollView>
      </Container>
    );
  }
}
