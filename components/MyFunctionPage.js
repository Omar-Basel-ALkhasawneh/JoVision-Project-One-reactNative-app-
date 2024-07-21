// components/MyFunctionPage.js
import React, { useEffect } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const MyFunctionPage = ({ onTextChange }) => {
  useEffect(() => {
    console.log('MyFunctionPage loaded');
    return () => {
      console.log('MyFunctionPage unloaded');
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to MyFunctionPage</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here"
        onChangeText={onTextChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    paddingLeft: 10,
  },
});

export default MyFunctionPage;
