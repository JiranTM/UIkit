import React, { Component } from "react";
import { View } from 'react-native';

import styles from '../../styles';

export default class Side extends Component {
    render() {
        return (
            <View {...this.props} style={{ ...styles.Side, ...this.props.style }} />
        )
    }
}