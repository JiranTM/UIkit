import React, {Component} from 'react';
import SpinKit from 'react-spinkit';

export default class SpinKit extends Component {
    render() {
        const {isVisible, color, size, type} = this.props;
        if (isVisible)
            return <SpinKit name={this.props.type} style={{color, fontSize:size}} />
        else 
            return null;
    }
}