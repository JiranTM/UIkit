import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from './Icon';

import styles from '../styles';

export default class Radio extends Component {
    render() {
        return (
            <TouchableOpacity {...this.props}>
                <Icon type="FontAwesome" name={this.props.selected ? "check-square" : "square-o"} style={{...styles.Radio}} selected={this.props.selected} />
            </TouchableOpacity>
        )
    }
}