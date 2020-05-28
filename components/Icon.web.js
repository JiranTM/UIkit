import React, {Component} from 'react';
import './fonts/rwvi/styles.css';
import IconWeb from 'react-web-vector-icons';

export default class Icon extends Component {
    render() {
        return (
            <IconWeb {...this.props} font={this.props.type} />
        )
    }
};