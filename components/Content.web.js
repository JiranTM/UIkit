import React, { Component } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import ThemeContext from './themeContext';

export default class Content extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {value => 
                    <SafeAreaView style={{ ...value.Content }}>
                        <ScrollView>
                            {this.props.children}
                        </ScrollView>
                    </SafeAreaView>
                }
            </ThemeContext.Consumer>
        )
    }
}