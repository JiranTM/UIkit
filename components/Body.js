import React, { Component } from "react";
import { View } from "react-native";

import ThemeContext from './themeContext';

export default class Body extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {value =>
                    <View {...this.props} style={{ ...value.Body, ...this.props.style }} />
                }
            </ThemeContext.Consumer>
            
        )
    }
}