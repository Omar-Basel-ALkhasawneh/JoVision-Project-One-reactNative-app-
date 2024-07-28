// Tasks/Task27.js

import React, { useState } from 'react';
import { StyleSheet, View, Button, Image, Alert } from 'react-native';

const Task27 = () => {
    const [image, setImage] = useState(require('../Resources/image1.jpg'));

    const selectImage = () => {
        Alert.alert(
            'Select Image',
            'Pick the number of the image to display: 1, 2, or 3',
            [
                { text: '1', onPress: () => setImage(require('../Resources/image1.jpg')) },
                { text: '2', onPress: () => setImage(require('../Resources/image2.jpg')) },
                { text: '3', onPress: () => setImage(require('../Resources/image3.jpg')) },
                { text: 'Cancel', style: 'cancel' }
            ],
            { cancelable: true }
        );
    };

    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <Button title="Select Image" onPress={selectImage} />
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
    image: {
        width: 300,
        height: 300,
        marginBottom: 20,
    },
});

export default Task27;
