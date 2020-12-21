import React, { Component } from 'react';
import Text from './Text';

import ThemeContext from './themeContext';

export default class Title extends Component {
    render() {
        return (
            <Text {...this.props} style={{ ...this.context.Title, ...this.props.style }} />
        )
    }
}

Title.contextType = ThemeContext;
