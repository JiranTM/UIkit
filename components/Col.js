import React, { Component } from "react";
import { View } from 'react-native';

import ThemeContext from './themeContext';

export default class Col extends Component {
    render() {
        let size = {
            flex: (this.props.size) ? this.props.size : 1
        }
        
        return (
            <ThemeContext.Consumer>
                {value =>
                    <View {...this.props} style={{ ...value.Col, ...size, ...this.props.style }}>
                        {this.props.children}
                    </View>
                }
            </ThemeContext.Consumer>
            
        )
    }
}