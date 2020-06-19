import React, { Component } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import ThemeContext from './themeContext';

export default class Content extends Component {
    render() {
        return (
            <SafeAreaView style={{ ...this.context.Content }}>
                <ScrollView>
                    {this.props.children}
                </ScrollView>
            </SafeAreaView>
        )
    }
}

Content.contextType = ThemeContext;