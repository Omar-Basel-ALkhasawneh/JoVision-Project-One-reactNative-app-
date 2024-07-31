// Tasks/Task34.js

import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import TimeDisplay from '../Components/TimeDisplay';

const Task34 = () => {
    const [showTime, setShowTime] = useState(true);

    const toggleTimeDisplay = () => {
        setShowTime(!showTime);
    };

    return (
        <View style={styles.container}>
            {showTime && <TimeDisplay />}
            <Button title="Toggle Time Display" onPress={toggleTimeDisplay} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

export default Task34;
