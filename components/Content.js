import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from '../styles';

export default class Content extends Component {
    render() {
        return (
            <SafeAreaView style={{ ...styles.Content }}>
                <KeyboardAwareScrollView>
                    {...this.props}
                </KeyboardAwareScrollView>
            </SafeAreaView>
        )
    }
}