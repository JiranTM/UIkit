import React, { Component } from "react";
import { View } from 'react-native';

import ThemeContext from './themeContext';

export default class Right extends Component {
    render() {
        return (
            <View {...this.props} style={{ ...this.context.Right, ...this.props.style }} />
        )
    }
}

Right.contextType = ThemeContext;
