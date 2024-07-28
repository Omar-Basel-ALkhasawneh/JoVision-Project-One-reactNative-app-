// Tasks/Task30.js

import React, { useRef, useState } from 'react';
import { StyleSheet, View, FlatList, Image, Pressable, Alert, Button, Modal, TextInput, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const initialImages = [
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

const Task30 = () => {
  const flatListRef = useRef(null);
  const [images, setImages] = useState(initialImages);
  const [modalVisible, setModalVisible] = useState(false);
  const [inputIndex, setInputIndex] = useState('');

  const handleImagePress = (index) => {
    Alert.alert(`You have selected image: ${index + 1}`);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.imageContainer}>
      <Pressable onPress={() => handleImagePress(index)}>
        <Image source={item} style={styles.image} />
      </Pressable>
      <Pressable style={styles.iconContainer} onPress={() => removeImage(index)}>
        <Icon name="delete" size={24} color="red" />
      </Pressable>
    </View>
  );

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const handleScrollToIndex = () => {
    const index = parseInt(inputIndex, 10) - 1;
    setModalVisible(false);
    if (!isNaN(index) && index >= 0 && index < images.length) {
      flatListRef.current.scrollToIndex({ animated: true, index });
    } else {
      Alert.alert('Invalid index', 'Please enter a valid index.');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Button title="Scroll to Image" onPress={openModal} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Enter the index of the image to scroll to:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter image index"
              keyboardType="numeric"
              onChangeText={setInputIndex}
              value={inputIndex}
            />
            <TouchableOpacity style={styles.button} onPress={handleScrollToIndex}>
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
    margin: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  iconContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginVertical: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Task30;
