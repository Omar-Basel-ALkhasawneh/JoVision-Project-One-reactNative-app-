import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const TextInputComponent = ({ title, value, onChangeText }) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{title}:</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={`Enter ${title.toLowerCase()}`}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
    },
});

export default TextInputComponent;
