// Task20.js
import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import MyClassPageComponent_Task20 from '../components/MyClassPageComponent_Task20';

const Task20 = () => {
  const [showTask20, setShowTask20] = useState(false);

  const toggleTask20 = () => {
    setShowTask20(!showTask20);
  };

  return (
    <View style={styles.container}>
      <Button title="Show" onPress={toggleTask20} />
      {showTask20 && <MyClassPageComponent_Task20 />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Task20;
