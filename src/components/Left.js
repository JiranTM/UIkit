import React, { Component } from "react";
import { View } from 'react-native';

import styles from '../styles';

export default class Left extends Component {
    render() {
        return (
            <View {...this.props} style={{ ...styles.Left, ...this.props.style }} />
        )
    }
    
}