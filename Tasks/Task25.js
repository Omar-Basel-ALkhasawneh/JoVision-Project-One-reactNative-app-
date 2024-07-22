// Tasks/Task25.js
import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import MyClassPageWithRef from '../components/MyClassPage';

const Task25 = () => {
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
      <MyClassPageWithRef ref={textRef} />
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

export default Task25;
