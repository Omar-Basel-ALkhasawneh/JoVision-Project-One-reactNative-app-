import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ScreenOne = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is Screen One</Text>
            <Button title="Go to Screen Two" onPress={() => navigation.navigate('ScreenTwo')} />
            <Button title="Go to Screen Three" onPress={() => navigation.navigate('ScreenThree')} />
            <Button title="Go to Screen Four" onPress={() => navigation.navigate('ScreenFour')} />
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

export default ScreenOne;
