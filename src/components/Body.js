import React, { Component } from "react";
import { View } from "react-native";

import styles from '../../styles'

export default class Body extends Component {
    render() {
        return (
            <View {...this.props} style={{ ...styles.Body, ...this.props.style }} />
        )
    }
}