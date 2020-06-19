import React, { Component } from 'react';
import { View } from 'react-native';

import ThemeContext from './themeContext';

export default class Row extends Component {
    render() {
        let size = {
            flex: (this.props.size) ? this.props.size : 1
        }

        return (
            <View {...this.props} style={{...this.context.Row, ...size, ...this.props.style }}>
                {this.props.children}
            </View>
        )
    }
}

Row.contextType = ThemeContext;
