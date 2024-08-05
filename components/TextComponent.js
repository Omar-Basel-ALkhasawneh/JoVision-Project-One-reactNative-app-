// src/Components/TextComponent.js

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TextComponent = ({ text }) => {
  return (
    <View style={styles.item}>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default TextComponent;
