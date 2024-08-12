import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store, { toggleVisibility } from '../utils/store';
import ComponentThree from '../Components/ComponentThree';

const MainComponent = () => {
    const dispatch = useDispatch();
    const isVisible = useSelector((state) => state.component.isVisible);

    const handleToggle = () => {
        dispatch(toggleVisibility());
    };

    return (
        <View style={styles.container}>
            <Button title="Toggle Component Three" onPress={handleToggle} />
            {isVisible && <ComponentThree />}
        </View>
    );
};

const Task39 = () => (
    <Provider store={store}>
        <MainComponent />
    </Provider>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Task39;
