import React, {Component} from 'react';
import {TextInput} from 'react-native';
import styles from '../styles';

export default class Textarea extends Component {
    render() {
        const {placeholderTextColor, disabled, style} = this.props;

        return (
            <TextInput 
                multiline 
                placeholderTextColor={placeholderTextColor ? placeholderTextColor : "#575757"} 
                underlineColorAndroid="rgba(0,0,0,0)" 
                editable={!disabled} 
                style={{...styles.Textarea, ...style}}
                {...this.props} 
            />
        )
    }
}