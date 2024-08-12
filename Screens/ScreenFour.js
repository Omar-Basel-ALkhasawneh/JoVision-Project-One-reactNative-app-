import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ScreenFour = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is Screen Four</Text>
            <Button title="Go to Screen One" onPress={() => navigation.navigate('ScreenOne')} />
            <Button title="Go to Screen Two" onPress={() => navigation.navigate('ScreenTwo')} />
            <Button title="Go to Screen Three" onPress={() => navigation.navigate('ScreenThree')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
    },
});

export default ScreenFour;
