import React, {Component} from 'react';
import RNSpinKit from 'react-spinkit';

export default class SpinKit extends Component {
    render() {
        const {isVisible, color, size, type} = this.props;
        if (isVisible)
            return <RNSpinKit name={type} style={{color, fontSize: size}} />
        else 
            return null;
    }
}
