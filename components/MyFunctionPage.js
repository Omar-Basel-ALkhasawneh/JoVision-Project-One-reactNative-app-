// components/MyFunctionPage.js
import React, { forwardRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MyFunctionPage = forwardRef((props, ref) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to MyFunctionPage</Text>
      <Text style={styles.text} ref={ref}></Text>
    </View>
  );
});

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
});

export default MyFunctionPage;
