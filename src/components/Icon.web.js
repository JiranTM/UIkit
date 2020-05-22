import React, {Component} from 'react';
import './fonts/rwvi/styles.css';
import Icon from 'react-web-vector-icons';

export default class Icon extends Component {
    render() {
        return (
            <Icon {...this.props} font={this.props.type} />
        )
    }
};