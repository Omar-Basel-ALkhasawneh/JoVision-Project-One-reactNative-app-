import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import TextInputComponent from '../Components/TextInputComponent';
import { useAsyncStorage } from '../hooks/useAsyncStorage';

const Task35 = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [country, setCountry] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [lastChangeTime, setLastChangeTime] = useState('');

    const { saveData, loadData } = useAsyncStorage();

    useEffect(() => {
        const loadStoredData = async () => {
            const data = await loadData('userData');
            if (data) {
                const timestamp = new Date(data.timestamp);
                const now = new Date();
                if ((now - timestamp) < 60000) { // less than one minute old
                    setName(data.name);
                    setAge(data.age);
                    setCountry(data.country);
                }
                setLastChangeTime(timestamp.toLocaleString());
            }
        };
        loadStoredData();
    }, []);

    const handleSubmit = async () => {
        const userData = {
            name,
            age,
            country,
            timestamp: new Date().toISOString(),
        };

        try {
            await saveData('userData', userData);
            setSuccessMessage('Data saved successfully');
            setLastChangeTime(new Date().toLocaleString());
            setTimeout(() => setSuccessMessage(''), 3000); // Clear the message after 3 seconds
        } catch (error) {
            setErrorMessage('Failed to save data');
        }
    };

    return (
        <View style={styles.container}>
            <TextInputComponent title="Name" value={name} onChangeText={setName} />
            <TextInputComponent title="Age" value={age} onChangeText={setAge} />
            <TextInputComponent title="Country" value={country} onChangeText={setCountry} />
            {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
            {successMessage ? <Text style={styles.successText}>{successMessage}</Text> : null}
            <Button title="Submit" onPress={handleSubmit} />
            {lastChangeTime ? <Text style={styles.infoText}>Last Change: {lastChangeTime}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    errorText: {
        color: 'red',
        marginTop: 10,
    },
    successText: {
        color: 'green',
        marginTop: 10,
    },
    infoText: {
        color: 'blue',
        marginTop: 10,
    },
});

export default Task35;
