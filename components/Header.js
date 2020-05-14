import React, { Component } from 'react';
import { View } from 'react-native';

import styles from '../styles';

export default class Header extends Component {
    render() {
        return (
            <View {...this.props} style={{ ...styles.Header, ...this.props.style }}/>
        )
    }
}