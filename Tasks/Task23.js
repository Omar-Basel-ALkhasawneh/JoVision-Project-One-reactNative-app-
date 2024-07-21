// Tasks/Task23.js
import React, { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import MyClassPage from '../components/MyClassPage';

const Task23 = () => {
  const [showClassPage, setShowClassPage] = useState(false);
  const [text, setText] = useState('');

  const toggleClassPage = () => {
    setShowClassPage(!showClassPage);
  };

  return (
    <View style={styles.container}>
      <Button title="Show" onPress={toggleClassPage} />
      <Text style={styles.displayText}>{text}</Text>
      {showClassPage && <MyClassPage onTextChange={setText} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayText: {
    fontSize: 20,
    marginVertical: 20,
  },
});

export default Task23;
