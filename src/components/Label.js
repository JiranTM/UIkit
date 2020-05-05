import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles';

export default class Label extends Component {
    render() {
        return (
            <Text {...this.props} />
        )
    }
}