import React, { Component } from 'react';
import { View } from 'react-native';
import Toast from './Toast';

export default class Root extends Component {
    render() {
        return (
            <View {...this.props} style={{flex: 1}}>
                {this.props.children}
                <Toast />
            </View>
        )
    }
}
