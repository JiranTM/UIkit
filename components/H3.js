import React, { Component } from 'react';
import Text from './Text';

import ThemeContext from './themeContext';

export default class H3 extends Component {
    render() {
        return (
            <Text {...this.props} style={{ ...this.context.H3, ...this.props.style }} />
        )
    }
}

H3.contextType = ThemeContext;
