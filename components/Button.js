import React, { Component } from 'react';
import { TouchableOpacity, Platform } from 'react-native';

import styles from '../styles'

export default class Button extends Component {
    render() {
        let backgroundColor, flex = null;
        const { light, primary, success, info, warning, danger, dark, bordered, transparent, block, full } = this.props;
        
        if (light) 
            backgroundColor = '#a9a9a9';
        else if (primary) 
            backgroundColor = (Platform.OS === "ios") ? "#007AFF" : '#3F51B5';
        else if (success) 
            backgroundColor = '#5cb85c';
        else if (info) 
            backgroundColor = '#62B1F6';
        else if (warning) 
            backgroundColor = '#f0ad4e';
        else if (danger) 
            backgroundColor = '#d9534f';
        else if (dark) 
            backgroundColor = '#000';
        else // (default)
            backgroundColor = (Platform.OS === "ios") ? "#007AFF" : '#3F51B5';
        
        let border = "none";

        let justifyContent = 'space-between'

        let alignSelf = 'flex-start'

        if (bordered)
            border = `1px solid ${backgroundColor}`;

        if (transparent || bordered) {
            backgroundColor = 'transparent'
        }
        
        if (full) {
            flex = 1
        }

        if (block) {
            justifyContent = 'center'
            alignSelf = 'stretch'
        }
        
        const children = React.Children.map(this.props.children, child => 
            React.cloneElement(child, 
                {
                    style: {
                        color: (transparent || bordered) 
                            ? backgroundColor 
                            : (backgroundColor === "#a9a9a9" || backgroundColor === "transparent") 
                                ? "black" 
                                : "white",
                        fontWeight: "bold",
                        flex: 1,
                        textAlign: "center",
                        fontFamily: (Platform.OS === "ios") ? "System" : (Platform.OS === "android") ? "Roboto_medium" : undefined
                    }
                }
            )
        )

        return (
            <TouchableOpacity {...this.props} 
                style={{...styles.Button, 
                    backgroundColor, 
                    border, 
                    flex,
                    justifyContent, 
                    alignSelf,
                ...this.props.style}}>
                {children}
            </TouchableOpacity>
        )
    }
}