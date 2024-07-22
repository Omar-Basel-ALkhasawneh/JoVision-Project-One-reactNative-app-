// Tasks/Task24.js
import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import MyFunctionPage from '../components/MyFunctionPage';

const Task24 = () => {
  const [text, setText] = useState('');
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.setNativeProps({ text });
    }
  }, [text]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type here"
        onChangeText={setText}
      />
      <MyFunctionPage ref={textRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 8,
  },
});

export default Task24;
