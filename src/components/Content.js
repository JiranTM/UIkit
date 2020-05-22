import React, { Component } from 'react';
import { SafeAreaView, KeyboardAvoidingView } from 'react-native';

import styles from '../styles';

export default class Content extends Component {
    render() {
        return (
            <SafeAreaView {...this.props} style={{ ...styles.Content, ...this.props.style }}>
                <KeyboardAvoidingView>
                    {this.props.children}
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}