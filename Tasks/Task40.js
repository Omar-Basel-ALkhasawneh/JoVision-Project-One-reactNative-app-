import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Provider, connect } from 'react-redux';
import store, { toggleVisibility } from '../utils/store_ClassComponent';
import ComponentThree_ClassComponent from '../Components/ComponentThree_ClassComponent';

class MainComponent extends React.Component {
    handleToggle = () => {
        this.props.toggleVisibility();
    };

    render() {
        const { isVisible } = this.props;
        return (
            <View style={styles.container}>
                <Button title="Toggle Component Three" onPress={this.handleToggle} />
                {isVisible && <ComponentThree_ClassComponent />}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const mapStateToProps = (state) => ({
    isVisible: state.component.isVisible,
});

const mapDispatchToProps = {
    toggleVisibility,
};

const ConnectedMainComponent = connect(mapStateToProps, mapDispatchToProps)(MainComponent);

const Task40 = () => (
    <Provider store={store}>
        <ConnectedMainComponent />
    </Provider>
);

export default Task40;
