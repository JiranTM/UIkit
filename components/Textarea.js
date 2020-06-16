import React, {Component} from 'react';
import {TextInput} from 'react-native';

import ThemeContext from './themeContext';

export default class Textarea extends Component {
    render() {
        const {placeholderTextColor, disabled} = this.props;

        return (
            <ThemeContext.Consumer>
                {value => 
                    <TextInput 
                        multiline 
                        placeholderTextColor={placeholderTextColor ? placeholderTextColor : "#575757"} 
                        editable={!disabled} 
                        style={{...value.Textarea, ...this.props.style}}
                        {...this.props} 
                    />
                }
            </ThemeContext.Consumer>
        )
    }
}