// components/MyClassPage.js
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

class MyClassPage extends Component {
  componentDidMount() {
    console.log('MyClassPage loaded');
  }

  componentWillUnmount() {
    console.log('MyClassPage unloaded');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to MyClassPage</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here"
          onChangeText={this.props.onTextChange}
        />
      </View>
    );
  }
}

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

export default MyClassPage;
