import React, {Component} from 'react';
import * as RNSpinKit from 'react-native-spinkit';

export default class SpinKit extends Component {
    render() {
        return (
            <RNSpinKit {...this.props} />
        )
    }
};