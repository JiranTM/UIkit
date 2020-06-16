import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import ThemeContext from './themeContext';

export default class Content extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {value => 
                    <SafeAreaView style={{ ...value.Content }}>
                        <KeyboardAwareScrollView>
                            {...this.props}
                        </KeyboardAwareScrollView>
                    </SafeAreaView>
                }
            </ThemeContext.Consumer>
        )
    }
}