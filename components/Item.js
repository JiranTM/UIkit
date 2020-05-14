import React, { Component } from 'react';
import { View } from 'react-native';

import styles from '../styles';

export default class Item extends Component {
    render() {
        const { inlineLabel } = this.props;
        let flexDirection = null

        if (inlineLabel) {
            flexDirection = "row"
        } else {
            flexDirection = "column"
        }
        
        return (
            <View style={{...styles.Item, flexDirection, ...this.props.style}}>
                {this.props.children}
            </View>
        )
    }
}