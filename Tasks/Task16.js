import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const App = () => {
  const [showName, setShowName] = useState(false);

  const toggleName = () => {
    setShowName(!showName);
  };

  return (
    <View style={styles.container}>
      <Button title="Show" onPress={toggleName} />
      {showName && <Text style={styles.nameText}>Omar Basel AL-khasawneh</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default App;
