import React, {Component} from 'react';
import {View, Platform} from 'react-native';

import styles from '../styles';
import ThemeContext from './themeContext';

export default class Badge extends Component {
    render() {
        let backgroundColor;
        const {primary, warning, info, success, danger} = this.props;

        if (primary)
            backgroundColor = styles.buttonPrimaryBg;
        else if (warning)
            backgroundColor = styles.buttonWarningBg;
        else if (info)
            backgroundColor = styles.buttonInfoBg;
        else if (success)
            backgroundColor = styles.buttonSuccessBg;
        else if (danger)
            backgroundColor = styles.buttonDangerBg;
        else // (default)
            backgroundColor = styles.badgeBg;

        const children = React.Children.map(this.props.children, child => 
            React.cloneElement(child, 
                {
                    style: {
                        ...styles.BadgeProps,
                        ...child.props.style
                    },
                }
            )
        )

        return (
            <ThemeContext.Consumer>
                {value => 
                    <View {...this.props} style={{...value.Badge, backgroundColor, ...this.props.style}}>
                        {children}
                    </View>
                }
            </ThemeContext.Consumer>
        )
    }
}