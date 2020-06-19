import React, { Component } from "react";
import { TextInput } from "react-native";

import ThemeContext from "./themeContext";

export default class Input extends Component {
    render() {
        return (
            <TextInput {...this.props} style={{...this.context.Input, ...this.props.style}} />
        )
    }
}

Input.contextType = ThemeContext;
