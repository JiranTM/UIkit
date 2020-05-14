import React, { Component } from "react";
import { TextInput } from "react-native";

import styles from "../styles";

export default class Input extends Component {
    render() {
        return (
            <TextInput {...this.props} style={{...styles.Input, ...this.props.style}} />
        )
    }
}