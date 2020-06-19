import React, {Component} from 'react';
import ThemeContext from './themeContext';

export default class ThemeProvider extends Component {
    render() {
        return (
            <ThemeContext.Provider value={this.props.style}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}
