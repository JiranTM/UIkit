import React, { Component } from 'react';
import { TouchableOpacity, Platform } from 'react-native';

import styles from '../styles';
import ThemeContext from './themeContext';

export default class Button extends Component {
    render() {
        let backgroundColor = null, color = null, flex = null;
        const { light, primary, success, info, warning, danger, dark, bordered, transparent, block, full, disabled } = this.props;
        
        if (light) {
            backgroundColor = styles.buttonLightBg;
            color = styles.brandLight;
        } else if (primary) {
            backgroundColor = styles.buttonPrimaryBg;
            color = styles.brandPrimary;
        } else if (success) {
            backgroundColor = styles.buttonSuccessBg;
            color = styles.brandSuccess;
        } else if (info) {
            backgroundColor = styles.buttonInfoBg;
            color = styles.brandInfo;
        } else if (warning) { 
            backgroundColor = styles.buttonWarningBg;
            color = styles.brandWarning;
        } else if (danger) {
            backgroundColor = styles.buttonDangerBg;
            color = styles.brandDanger;
        } else if (dark) {
            backgroundColor = styles.buttonDarkBg;
            color = styles.brandDark;
        } else {
            backgroundColor = styles.buttonBg;
            color = styles.brandLight;
        }

        if (disabled) {
            backgroundColor = "transparent";
            color = styles.buttonDisabledBg;
        }
        
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
                            : (backgroundColor === "transparent") 
                                ? "black" 
                                : "white",
                        ...styles.ButtonProps,
                        ...child.props.style
                    },
                }
            )
        )

        return (
            <ThemeContext.Consumer>
                {value => 
                    <TouchableOpacity {...this.props} 
                        style={{...value.Button, 
                            backgroundColor, 
                            border, 
                            flex,
                            justifyContent, 
                            alignSelf,
                        ...this.props.style}}>
                        {children}
                    </TouchableOpacity>
                }
            </ThemeContext.Consumer>
        )
    }
}