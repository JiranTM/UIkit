import React, { Component } from "react";
import { View } from 'react-native';

import ThemeContext from './themeContext';

export default class Col extends Component {
    render() {
        let size = {
            flex: (this.props.size) ? this.props.size : 1
        }
        
        return (
            <View {...this.props} style={{ ...this.context.Col, ...size, ...this.props.style }}>
                {this.props.children}
            </View>
        )
    }
}

Col.contextType = ThemeContext;
