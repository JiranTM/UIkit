import React, { Component } from 'react';
import Text from './Text';

import ThemeContext from './themeContext';

export default class H3 extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {value => 
                    <Text {...this.props} style={{ ...value.H3, ...this.props.style }} />
                }
            </ThemeContext.Consumer>
        )
    }
}