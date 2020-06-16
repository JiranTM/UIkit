import React, { Component } from 'react';
import { Text as RNText } from 'react-native';

import ThemeContext from './themeContext';

export default class Text extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {value => 
                    <RNText {...this.props} style={{ ...value.Text, ...this.props.style }} />
                }
            </ThemeContext.Consumer>
        )
    }
}