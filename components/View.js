import React, {Component} from 'react';
import {View as RNView} from 'react-native';

export default class View extends Component {
    render() {
        return (
            <RNView {...this.props} />
        )
    }
}