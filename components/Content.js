import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import ThemeContext from './themeContext';

export default class Content extends Component {
    render() {
        return (
            <SafeAreaView style={{ ...this.context.Content }}>
                <KeyboardAwareScrollView>
                    {...this.props}
                </KeyboardAwareScrollView>
            </SafeAreaView>
        )
    }
}

Content.contextType = ThemeContext;
