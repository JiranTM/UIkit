import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import styles from '../../styles';

export default class Content extends Component {
    render() {
        return (
            <ScrollView {...this.props} style={{ ...styles.Content, ...this.props.style }} />
        )
    }
}