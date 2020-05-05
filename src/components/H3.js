import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles';

export default class H3 extends Component {
    render() {
        return (
            <Text {...this.props} style={{ ...styles.H3, ...this.props.style }} />
        )
    }
}