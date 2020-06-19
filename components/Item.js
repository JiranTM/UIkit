import React, { Component } from 'react';
import { View } from 'react-native';

import ThemeContext from './themeContext';

export default class Item extends Component {
    render() {
        const { inlineLabel } = this.props;
        let flexDirection = "column"

        if (inlineLabel)
            flexDirection = "row"
        
        return (
            <View style={{...this.context.Item, flexDirection, ...this.props.style}}>
                {this.props.children}
            </View>
            
        )
    }
}

Item.contextType = ThemeContext;
