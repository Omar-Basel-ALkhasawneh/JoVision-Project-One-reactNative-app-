// Tasks/Task22.js
import React, { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import MyFunctionPage from '../components/MyFunctionPage';

const Task22 = () => {
    const [showFunctionPage, setShowFunctionPage] = useState(false);
    const [text, setText] = useState('');

    const toggleFunctionPage = () => {
        setShowFunctionPage(!showFunctionPage);
    };

    return (
        <View style={styles.container}>
            <Button title="Show" onPress={toggleFunctionPage} />
            <Text style={styles.displayText}>{text}</Text>
            {showFunctionPage && <MyFunctionPage onTextChange={setText} />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    displayText: {
        fontSize: 20,
        marginVertical: 20,
    },
});

export default Task22;
