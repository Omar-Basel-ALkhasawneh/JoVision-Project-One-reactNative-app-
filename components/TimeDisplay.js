// Components/TimeDisplay.js

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import useCurrentTime from '../hooks/useCurrentTime';

const TimeDisplay = () => {
    const currentTime = useCurrentTime();

    return (
        <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{currentTime.toLocaleTimeString()}</Text>
            <Text style={styles.dateText}>{currentTime.toLocaleDateString()}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    timeContainer: {
        marginBottom: 20,
    },
    timeText: {
        fontSize: 48,
        fontWeight: 'bold',
    },
    dateText: {
        fontSize: 24,
    },
});

export default TimeDisplay;
