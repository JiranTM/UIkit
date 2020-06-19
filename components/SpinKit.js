import React, {Component} from 'react';
import RNSpinKit from 'react-native-spinkit';

export default class SpinKit extends Component {
    render() {
        return (
            <RNSpinKit {...this.props} />
        )
    }
};
