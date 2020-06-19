import React, { Component } from 'react';
import Text from './Text';

import ThemeContext from './themeContext';

export default class H1 extends Component {
    render() {
        return (
            <Text {...this.props} style={{ ...this.context.H1, ...this.props.style }} />
        )
    }
}

H1.contextType = ThemeContext;
