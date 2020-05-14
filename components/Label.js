import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Label extends Component {
    render() {
        return (
            <Text {...this.props} />
        )
    }
}