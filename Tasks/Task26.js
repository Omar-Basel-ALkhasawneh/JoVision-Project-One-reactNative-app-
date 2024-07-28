// Tasks/Task26.js

import React, { useState } from 'react';
import { StyleSheet, View, Button, Text, ActivityIndicator } from 'react-native';

const Task26 = () => {
  const [ip, setIp] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchIpNonBlocking = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      setIp(data.ip);
    } catch (error) {
      console.error('Error fetching IP:', error);
    }
  };

  const fetchIpBlocking = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      setIp(data.ip);
    } catch (error) {
      console.error('Error fetching IP:', error);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Fetch IP Non-Blocking" onPress={fetchIpNonBlocking} />
      <Button title="Fetch IP Blocking" onPress={fetchIpBlocking} />
      {loading ? <ActivityIndicator size="large" color="#0000ff" /> : <Text style={styles.text}>{ip}</Text>}
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
  text: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default Task26;
