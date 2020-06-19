import React, {Component} from 'react';
import {View} from 'react-native';

import ThemeContext from './themeContext';

export default class Badge extends Component {
    render() {
        let backgroundColor;
        const {primary, warning, info, success, danger} = this.props;

        if (primary)
            backgroundColor = this.context.buttonPrimaryBg;
        else if (warning)
            backgroundColor = this.context.buttonWarningBg;
        else if (info)
            backgroundColor = this.context.buttonInfoBg;
        else if (success)
            backgroundColor = this.context.buttonSuccessBg;
        else if (danger)
            backgroundColor = this.context.buttonDangerBg;
        else // (default)
            backgroundColor = this.context.badgeBg;

        const children = React.Children.map(this.props.children, child => 
            React.cloneElement(child, 
                {
                    style: {
                        ...this.context.BadgeProps,
                        ...child.props.style
                    },
                }
            )
        )

        return (
            <View {...this.props} style={{...this.context.Badge, backgroundColor, ...this.props.style}}>
                {children}
            </View>
        )
    }
}

Badge.contextType = ThemeContext;
