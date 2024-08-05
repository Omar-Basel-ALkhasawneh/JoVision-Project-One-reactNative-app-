// Components/ComponentOne.js
import React, { Component } from 'react';
import { Text } from 'react-native';
import { SharedTextContext } from './SharedTextContext';

class ComponentOne extends Component {
  static contextType = SharedTextContext;

  render() {
    const { sharedText } = this.context;
    return (
      <Text>{sharedText}</Text>
    );
  }
}

export default ComponentOne;
