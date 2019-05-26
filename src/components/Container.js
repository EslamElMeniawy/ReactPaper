import React from 'react';
import { SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';

export default function Container({ children }) {
  return <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>{children}</SafeAreaView>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
