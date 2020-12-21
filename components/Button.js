import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import ThemeContext from './themeContext';

export default class Button extends Component {
    render() {
        let backgroundColor = null, color = null, flex = null;
        const { light, primary, success, info, warning, danger, dark, bordered, transparent, block, full, disabled } = this.props;
        
        if (light) {
            backgroundColor = this.context.buttonLightBg;
            color = this.context.brandLight;
        } else if (primary) {
            backgroundColor = this.context.buttonPrimaryBg;
            color = this.context.brandPrimary;
        } else if (success) {
            backgroundColor = this.context.buttonSuccessBg;
            color = this.context.brandSuccess;
        } else if (info) {
            backgroundColor = this.context.buttonInfoBg;
            color = this.context.brandInfo;
        } else if (warning) { 
            backgroundColor = this.context.buttonWarningBg;
            color = this.context.brandWarning;
        } else if (danger) {
            backgroundColor = this.context.buttonDangerBg;
            color = this.context.brandDanger;
        } else if (dark) {
            backgroundColor = this.context.buttonDarkBg;
            color = this.context.brandDark;
        } else {
            backgroundColor = this.context.buttonBg;
            color = this.context.brandLight;
        }

        if (disabled) {
            backgroundColor = this.context.buttonDisabledBg;
            color = this.context.brandLight;
        }
        
        let borderWidth = null, borderColor = null;

        let justifyContent = 'space-between'

        let alignSelf = 'flex-start'

        if (bordered) {
            borderWidth = 1;
            borderColor = backgroundColor;
        }
            

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
                            ? color 
                            : (backgroundColor === "transparent") 
                                ? "black" 
                                : "white",
                        ...this.context.ButtonProps,
                        ...child.props.style
                    },
                }
            )
        )

        return (
            <TouchableOpacity {...this.props} 
                style={{...this.context[bordered ? "BorderedButton" : "Button"], 
                    backgroundColor, 
                    borderWidth,
                    borderColor, 
                    flex,
                    justifyContent, 
                    alignSelf,
                ...this.props.style}}>
                {children}
            </TouchableOpacity>
        )
    }
}

Button.contextType = ThemeContext;
