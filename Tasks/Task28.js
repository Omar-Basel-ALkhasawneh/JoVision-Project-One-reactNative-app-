// Tasks/Task28.js

import React from 'react';
import { StyleSheet, View, FlatList, Image, Pressable, Alert } from 'react-native';

const images = [
  require('../Resources/image1.jpg'),
  require('../Resources/image2.jpg'),
  require('../Resources/image3.jpg'),
  require('../Resources/image4.jpg'),
  require('../Resources/image5.jpg'),
  require('../Resources/image6.jpg'),
  require('../Resources/image7.jpg'),
  require('../Resources/image8.jpg'),
  require('../Resources/image9.jpg'),
  require('../Resources/image10.jpg'),
];

const Task28 = () => {
  const handleImagePress = (index) => {
    Alert.alert(`You have selected image: ${index + 1}`);
  };

  const renderItem = ({ item, index }) => (
    <Pressable onPress={() => handleImagePress(index)}>
      <Image source={item} style={styles.image} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
});

export default Task28;
