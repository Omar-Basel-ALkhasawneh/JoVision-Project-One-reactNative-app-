// components/MyFunctionPage.js
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MyFunctionPage = () => {
  useEffect(() => {
    console.log('MyFunctionPage loaded');
    return () => {
      console.log('MyFunctionPage unloaded');
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Task21 done by Omar AL-khasawneh</Text>
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
});

export default MyFunctionPage;
