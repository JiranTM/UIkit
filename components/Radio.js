import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from './Icon';

import ThemeContext from './themeContext';

export default class Radio extends Component {
    render() {
        return (
            <TouchableOpacity {...this.props}>
                <Icon 
                    type="MaterialIcons" 
                    name={this.props.selected ? "radio-button-checked" : "radio-button-unchecked"} 
                    style={{...this.context.Radio}} 
                    selected={this.props.selected} 
                />
            </TouchableOpacity>
        )
    }
}

Radio.contextType = ThemeContext;
