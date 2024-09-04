// compononet/MyClassPageComponent_Task19.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MyClassPageComponent_Task19 extends React.Component {

  constructor(){
    this.state = {
      show : false
    }
  }

  componentDidMount(){
    console.log("hello")
  }

  componentDidUpdate(prevState, prevProps){
    // console.log(prevState, this.state)
    if (this.state.x != prevState.x){
      console.log("new x", x)
    }
    console,log("render")
  }

  componentWillUnmount(){
    console.log("bye")
  }

  onpress(){
    this.setState({show : !this.state.show})
  }


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
