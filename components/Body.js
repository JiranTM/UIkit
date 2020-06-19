import React, { Component } from "react";
import { View } from "react-native";

import ThemeContext from './themeContext';

export default class Body extends Component {
    render() {
        return (
            <View {...this.props} style={{ ...this.context.Body, ...this.props.style }} />
        )
    }
}

Body.contextType = ThemeContext;
