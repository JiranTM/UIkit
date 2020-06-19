import React, {Component} from 'react';
import '../fonts/rwvi/styles.css';
import IconWeb from 'react-web-vector-icons';

import ThemeContext from './themeContext';

export default class Icon extends Component {
    render() {
        return (
            <IconWeb {...this.props} style={{...this.context.Icon, ...this.props.style}} font={this.props.type} />
        )
    }
};

Icon.contextType = ThemeContext;
