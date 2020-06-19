import React, { Component } from 'react';
import Text from './Text';

import ThemeContext from './themeContext';

export default class H2 extends Component {
    render() {
        return (
            <Text {...this.props} style={{ ...this.context.H2, ...this.props.style }} />
        )
    }
}

H2.contextType = ThemeContext;
