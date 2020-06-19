import React, { Component } from 'react';
import { Text as RNText } from 'react-native';

import ThemeContext from './themeContext';

export default class Text extends Component {
    render() {
        return (
            <RNText {...this.props} style={{ ...this.context.Text, ...this.props.style }} />
        )
    }
}

Text.contextType = ThemeContext;
