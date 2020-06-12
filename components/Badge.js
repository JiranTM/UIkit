import React, {Component} from 'react';
import {View, Platform} from 'react-native';

import styles from '../styles';

export default class Badge extends Component {
    render() {
        let backgroundColor;
        const {primary, warning, info, success, danger} = this.props;

        if (primary)
            backgroundColor = (Platform.OS === "ios") ? "#007AFF" : '#3F51B5';
        else if (warning)
            backgroundColor = "#f0ad4e";
        else if (info)
            backgroundColor = "#62B1F6";
        else if (success)
            backgroundColor = "#5cb85c";
        else if (danger)
            backgroundColor = '#d9534f';
        else
            backgroundColor = '#ED1727';

        let justifyContent = Platform.OS === "ios" ? 'center' : undefined

        const children = React.Children.map(this.props.children, child => 
            React.cloneElement(child, 
                {
                    style: {
                        color: "#fff",
                        fontSize: 15,
                        lineHeight: Platform.OS === "ios" ? 20 : 24,
                        textAlign: "center",
                        paddingHorizontal: 3,
                        ...child.props.style
                    },
                    ...child.props
                }
            )
        )

        return (
            <View {...this.props} style={{...styles.Badge, backgroundColor, justifyContent, ...this.props.style}}>
                {children}
            </View>
        )
    }
}