// Task19.js
import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import MyClassPageComponent_Task19 from '../components/MyClassPageComponent_Task19';

const App = () => {
    const [showTask19, setShowTask19] = useState(false);

    const toggleTask19 = () => {
        setShowTask19(!showTask19);
    };

    return (
        <View style={styles.container}>
            <Button title="Show" onPress={toggleTask19} />
            {showTask19 && <MyClassPageComponent_Task19 />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;
