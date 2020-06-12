import React, { Component } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import styles from '../styles';

export default class Content extends Component {
    render() {
        return (
            <SafeAreaView style={{ ...styles.Content }}>
                <ScrollView>
                    {this.props.children}
                </ScrollView>
            </SafeAreaView>
        )
    }
}