import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import TextComponent from '../Components/TextComponent';

const generateRandomWord = (length) => {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

const Task36 = () => {
    const randomWords = Array.from({ length: 100 }, () => generateRandomWord(10));

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {randomWords.map((word, index) => (
                <TextComponent key={index} text={word} />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});

export default Task36;
