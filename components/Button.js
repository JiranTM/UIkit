import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import styles from '../styles'

export default class Button extends Component {
    render() {
        let buttonTheme = '#3F51B5', buttonFlex = null;
        const { light, primary, success, info, warning, danger, dark, bordered, transparent, block, full } = this.props;
        
        if(light) buttonTheme = '#a9a9a9';
        if(primary) buttonTheme = '#3F51B5';
        if(success) buttonTheme = '#5cb85c';
        if(info) buttonTheme = '#62B1F6';
        if(warning) buttonTheme = '#f0ad4e';
        if(danger) buttonTheme = '#d9534f';
        if(dark) buttonTheme = '#000';

        let backgroundColor = buttonTheme
        
        let border = "none";

        let alignSelf = 'flex-start'

        if (bordered)
            border = `1px solid ${buttonTheme}`;

        if (transparent || bordered) {
            backgroundColor = 'transparent'
        }
        
        if (full) {
            buttonFlex = 1
        }

        if (block) {
            alignSelf = 'stretch'
        }
        
        const children = React.Children.map(this.props.children, child => 
            React.cloneElement(child, 
                {
                    style: {
                        color: (transparent || bordered) 
                            ? buttonTheme 
                            : (buttonTheme === "#a9a9a9" || backgroundColor === "transparent") 
                                ? "black" 
                                : "white",
                        fontWeight: "bold",
                        flex: 1,
                        textAlign: "center"
                    }
                }
            )
        )

        return (
            <TouchableOpacity {...this.props} 
                style={{...styles.Button, 
                    backgroundColor, 
                    border, 
                    flex: buttonFlex, 
                    alignSelf,
                ...this.props.style}}>
                {children}
            </TouchableOpacity>
        )
    }
}