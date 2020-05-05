import React, { Component } from 'react';
import { View } from 'react-native';

import styles from '../../styles';

export default class Row extends Component {
    render() {
        return (
            <View {...this.props} style={{...this.props.style, flexDirection: "row", flex: 1, alignSelf: "stretch" }}>
                {this.props.children}
            </View>
        )
    }
}