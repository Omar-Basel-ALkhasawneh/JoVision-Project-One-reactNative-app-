import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { setText } from '../utils/store_ClassComponent';

class ComponentThree_ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.storedText,
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.storedText !== this.props.storedText) {
            this.setState({ text: this.props.storedText });
        }
    }

    handleTextChange = (text) => {
        this.setState({ text });
        this.props.setText(text);
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={this.state.text}
                    onChangeText={this.handleTextChange}
                    placeholder="Type here..."
                />
            </View>
        );
    }
}

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

const mapStateToProps = (state) => ({
    storedText: state.component.text,
});

const mapDispatchToProps = {
    setText,
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentThree_ClassComponent);
