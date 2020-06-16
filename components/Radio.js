import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from './Icon';

import ThemeContext from './themeContext';

export default class Radio extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {value => 
                    <TouchableOpacity {...this.props}>
                        <Icon type="FontAwesome" name={this.props.selected ? "check-square" : "square-o"} style={{...value.Radio}} selected={this.props.selected} />
                    </TouchableOpacity>
                }
            </ThemeContext.Consumer>
            
        )
    }
}