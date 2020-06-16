import React, { Component } from "react";
import { TextInput } from "react-native";

import ThemeContext from "./themeContext";

export default class Input extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {value =>
                    <TextInput {...this.props} style={{...value.Input, ...this.props.style}} />
                }
            </ThemeContext.Consumer>
        )
    }
}