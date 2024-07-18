// Tasks/Task21.js
import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import MyFunctionPage from '../components/MyFunctionPage';

const Task21 = () => {
  const [showFunctionPage, setShowFunctionPage] = useState(false);

  const toggleFunctionPage = () => {
    setShowFunctionPage(!showFunctionPage);
  };

  return (
    <View style={styles.container}>
      <Button title="Show" onPress={toggleFunctionPage} />
      {showFunctionPage && <MyFunctionPage />}
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

export default Task21;
