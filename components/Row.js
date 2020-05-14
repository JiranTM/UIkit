import React, { Component } from 'react';
import { View } from 'react-native';

import styles from '../styles';

export default class Row extends Component {
    render() {
        let size = {
            flex: (this.props.size) ? this.props.size : 1
        }

        return (
            <View {...this.props} style={{...styles.Row, ...size, ...this.props.style }}>
                {this.props.children}
            </View>
        )
    }
}