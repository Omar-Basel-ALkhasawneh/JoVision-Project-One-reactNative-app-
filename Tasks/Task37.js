import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, RefreshControl } from 'react-native';
import TextComponent from '../Components/TextComponent';

const generateRandomWord = (length) => {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

const Task37 = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [randomWords, setRandomWords] = useState(Array.from({ length: 100 }, () => generateRandomWord(10)));

    const onRefresh = () => {
        setRefreshing(true);
        // Simulate a network request and wait for it to finish
        setTimeout(() => {
            setRandomWords(Array.from({ length: 100 }, () => generateRandomWord(10)));
            setRefreshing(false);
        }, 2000);
    };

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    colors={['#9Bd35A', '#689F38']} // Colors for Android pull to refresh
                    tintColor="#689F38" // Color for iOS pull to refresh
                />
            }
        >
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
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
});

export default Task37;
