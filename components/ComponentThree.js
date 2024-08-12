import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setText } from '../utils/store';

const ComponentThree = () => {
    const dispatch = useDispatch();
    const storedText = useSelector((state) => state.component.text);
    const [text, setTextState] = useState(storedText);

    useEffect(() => {
        setTextState(storedText);
    }, [storedText]);

    const handleTextChange = (text) => {
        setTextState(text);
        dispatch(setText(text));
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={handleTextChange}
                placeholder="Type here..."
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
    },
});

export default ComponentThree;
