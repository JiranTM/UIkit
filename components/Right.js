import React, { Component } from "react";
import { View } from 'react-native';

import styles from '../styles';

export default class Right extends Component {
    render() {
        return (
            <View {...this.props} style={{ ...styles.Right, ...this.props.style }} />
        )
    }
    
}