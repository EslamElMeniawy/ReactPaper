import React from 'react';
import { ScrollView } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';

import Container from '../components/Container';

export default class DrawerScreen extends React.PureComponent {
  state = {
    defaultText: '',
    placeholderText: '',
    labelPlaceholderText: '',
    outlinedText: '',
    outlinedPlaceholderText: '',
    helperText: '',
  };

  render() {
    const {
      defaultText,
      placeholderText,
      labelPlaceholderText,
      outlinedText,
      outlinedPlaceholderText,
      helperText,
    } = this.state;

    return (
      <Container>
        <ScrollView style={{ marginBottom: 16 }}>
          <TextInput
            label="Default Text Input"
            value={defaultText}
            onChangeText={text => this.setState({ defaultText: text })}
            style={{ marginHorizontal: 16, marginTop: 16 }}
          />
          <TextInput
            placeholder="Placeholder Text Input"
            value={placeholderText}
            onChangeText={text => this.setState({ placeholderText: text })}
            style={{ marginHorizontal: 16, marginTop: 16 }}
          />
          <TextInput
            label="Label Placeholder Text Input"
            placeholder="Placeholder"
            value={labelPlaceholderText}
            onChangeText={text => this.setState({ labelPlaceholderText: text })}
            style={{ marginHorizontal: 16, marginTop: 16 }}
          />
          <TextInput
            mode="outlined"
            label="Outlined Text Input"
            value={outlinedText}
            onChangeText={text => this.setState({ outlinedText: text })}
            style={{ marginHorizontal: 16, marginTop: 16 }}
          />
          <TextInput
            mode="outlined"
            placeholder="Outlined Placeholder Text Input"
            value={outlinedPlaceholderText}
            onChangeText={text => this.setState({ outlinedPlaceholderText: text })}
            style={{ marginHorizontal: 16, marginTop: 16 }}
          />
          <TextInput
            label="Helper Text Input"
            value={helperText}
            error={!helperText.includes('@')}
            onChangeText={text => this.setState({ helperText: text })}
            style={{ marginHorizontal: 16, marginTop: 16 }}
          />
          <HelperText
            type="error"
            visible={!helperText.includes('@')}
            style={{ marginHorizontal: 8, padding: 0 }}
          >
            {'Email address is invalid!'}
          </HelperText>
        </ScrollView>
      </Container>
    );
  }
}
