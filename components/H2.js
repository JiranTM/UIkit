import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../styles';

export default class H2 extends Component {
    render() {
        return (
            <Text {...this.props} style={{ ...styles.H2, ...this.props.style }} />
        )
    }
}