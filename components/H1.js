import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../styles';

export default class H1 extends Component {
    render() {
        return (
            <Text {...this.props} style={{ ...styles.H1, ...this.props.style }} />
        )
    }
}