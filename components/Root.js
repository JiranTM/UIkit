import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import Toast from './Toast';

export default class Root extends Component {
    render() {
        return (
            <SafeAreaView {...this.props} style={{flex: 1}}>
                {this.props.children}
                <Toast />
            </SafeAreaView>
        )
    }
}
