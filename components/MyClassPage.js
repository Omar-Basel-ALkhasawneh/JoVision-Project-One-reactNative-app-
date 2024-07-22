// components/MyClassPage.js
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MyClassPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to MyClassPage</Text>
        <Text style={styles.text} ref={this.props.forwardedRef}></Text>
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
});

const MyClassPageWithRef = React.forwardRef((props, ref) => {
  return <MyClassPage {...props} forwardedRef={ref} />;
});

export default MyClassPageWithRef;
