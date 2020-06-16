import React, { Component } from "react";
import { View } from 'react-native';

import ThemeContext from './themeContext';

export default class Left extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {value => 
                    <View {...this.props} style={{ ...value.Left, ...this.props.style }} />
                }
            </ThemeContext.Consumer>
            
        )
    }
    
}