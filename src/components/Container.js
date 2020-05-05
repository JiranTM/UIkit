import React, { Component } from 'react';
import { KeyboardAvoidingView } from 'react-native';

import styles from '../../styles';

export default class Container extends Component {
    render() {
        return (
            <KeyboardAvoidingView  {...this.props} style={{ ...styles.Container, ...this.props.style }} />
        )
    }
}