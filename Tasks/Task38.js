// App.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SharedTextProvider } from './Components/SharedTextContext';
import ComponentTwo from './Components/ComponentTwo';

const App = () => {
    return (
        <SharedTextProvider>
            <View style={styles.container}>
                <ComponentTwo />
                <ComponentTwo />
                <ComponentTwo />
                <ComponentTwo />
            </View>
        </SharedTextProvider>
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
