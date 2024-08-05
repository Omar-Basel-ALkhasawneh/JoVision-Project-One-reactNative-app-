// Components/ComponentTwo.js
import React, { useContext } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { SharedTextContext } from './SharedTextContext';
import ComponentOne from './ComponentOne';

const ComponentTwo = () => {
  const { sharedText, setSharedText } = useContext(SharedTextContext);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={sharedText}
        onChangeText={setSharedText}
        placeholder="Type here..."
      />
      <ComponentOne />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default ComponentTwo;
