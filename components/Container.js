import React, { Component } from 'react';
import { View } from 'react-native';

import ThemeContext from './themeContext';

export default class Container extends Component {
    render() {
        return (
            <View {...this.props} style={{ ...this.context.Container, ...this.props.style }} />
        )
    }
}

Container.contextType = ThemeContext;
