// compononet/MyClassPageComponent_Task19.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MyClassPageComponent_Task19 extends React.Component {
  render() {
    return (
      <View style={styles.classContainer}>
        <Text style={styles.classText}>Welcome to MyClassPageComponent_Task19</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  classContainer: {
    marginTop: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
  },
  classText: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default MyClassPageComponent_Task19;
