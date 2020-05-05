import React, { Component } from 'react';
import { View } from 'react-native';

import styles from '../../styles';

export default class Item extends Component {
    render() {
        const { inlineLabel } = this.props;

        if (inlineLabel) {
            flexDirection = "row"
        } else {
            flexDirection = "column"
        }
        
        return (
            <View style={{...styles.Item, ...this.props.style, flexDirection}}>
                {this.props.children}
            </View>
        )
    }
}