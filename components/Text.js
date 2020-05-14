import React, { Component } from 'react';
import { Text as RNText } from 'react-native';

import styles from '../styles';

export default class Text extends Component {
    render() {
        return (
            <RNText {...this.props} style={{...styles.Text, ...this.props.style}}>
                {this.props.children}
            </RNText>
        )
    }
}