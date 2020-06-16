import React, { Component } from 'react';
import Text from './Text';

import ThemeContext from './themeContext';

export default class H2 extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {value => 
                    <Text {...this.props} style={{ ...value.H2, ...this.props.style }} />
                }
            </ThemeContext.Consumer>
        )
    }
}