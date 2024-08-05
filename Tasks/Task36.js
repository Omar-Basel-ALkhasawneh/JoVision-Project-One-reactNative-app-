// src/Tasks/Task36.js

import React, { useState, useCallback } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import TextComponent from '../Components/TextComponent';
import { generateRandomWord } from '../utils/utils';

const Task36 = () => {
    const [data, setData] = useState(Array.from({ length: 100 }, () => generateRandomWord(10)));
    const [refreshing, setRefreshing] = useState(false);

    const handleRefresh = useCallback(() => {
        setRefreshing(true);
        // Simulate a network request
        setTimeout(() => {
            setData(Array.from({ length: 100 }, () => generateRandomWord(10)));
            setRefreshing(false);
        }, 2000);
    }, []);

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <TextComponent text={item} />}
            keyExtractor={(item, index) => index.toString()}
            refreshing={refreshing}
            onRefresh={handleRefresh}
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});

export default Task36;
