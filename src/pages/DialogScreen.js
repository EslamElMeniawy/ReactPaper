import React from 'react';
import { SafeAreaView, StatusBar, ScrollView } from 'react-native';
import {
  Button, Portal, Dialog, Paragraph,
} from 'react-native-paper';

export default class DialogScreen extends React.PureComponent {
  state = {
    visible: false,
  };

  showDialog = () => this.setState({ visible: true });

  hideDialog = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;

    return (
      <SafeAreaView>
        <StatusBar barStyle="light-content" backgroundColor="#34515e" />
        <ScrollView>
          <Button onPress={this.showDialog}>Show Dialog</Button>
          <Portal>
            <Dialog visible={visible} onDismiss={this.hideDialog}>
              <Dialog.Title>Alert</Dialog.Title>
              <Dialog.Content>
                <Paragraph>This is simple dialog</Paragraph>
              </Dialog.Content>
              <Dialog.ScrollArea>
                <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
                  <Paragraph>This is a scrollable area</Paragraph>
                </ScrollView>
              </Dialog.ScrollArea>
              <Dialog.Actions>
                <Button onPress={this.hideDialog}>Done</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
