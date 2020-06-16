import React, { Component } from 'react';
import Text from './Text';

import ThemeContext from './themeContext';

export default class H1 extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {value => 
                    <Text {...this.props} style={{ ...value.H1, ...this.props.style }} />
                }
            </ThemeContext.Consumer>
        )
    }
}