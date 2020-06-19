import React, { Component } from "react";
import { View } from 'react-native';

import ThemeContext from './themeContext';

export default class Left extends Component {
    render() {
        return (
            <View {...this.props} style={{ ...this.context.Left, ...this.props.style }} />
        )
    }
    
}

Left.contextType = ThemeContext;
