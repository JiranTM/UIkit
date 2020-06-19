import React, { Component } from 'react';
import { View } from 'react-native';

import ThemeContext from './themeContext';

export default class Header extends Component {
    render() {
        return (
            <View {...this.props} style={{ ...this.context.Header, ...this.props.style }}/>
        )
    }
}

Header.contextType = ThemeContext;
