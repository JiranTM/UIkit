import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../styles';

const POSITION = {
    ABSOLUTE: 'absolute',
    BOTTOM: 'bottom',
    TOP: 'top'
};

export default class Toast extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            // isKeyboardVisible: false
        }
    }

    static show({...config}) {
        this.setState({
            visible: true,
            text: config.text,
            buttonText: config.buttonText,
            type: config.type,
            position: config.position ? config.position : POSITION.BOTTOM,
            supportedOrientations: config.supportedOrientations,
            style: config.style,
            buttonTextStyle: config.buttonTextStyle,
            buttonStyle: config.buttonStyle,
            textStyle: config.textStyle,
            onClose: config.onClose
        })

        // Custom duration
        if (config.duration !== 0) {
            const duration = config.duration > 0 ? config.duration : 1500;
            this.closeTimeout = setTimeout(
                this.closeToast.bind(this, 'timeout'),
                duration
            );
        }
    }

    static hide() {
        this.setState({visible: false});
        const { onClose } = this.state;
        if (onClose && typeof onClose === 'function') {
            onClose(reason);
        }
    }

    render() {
        let toastColor;
        
        switch(this.state.type) {
            case        "danger":  toastColor = '#d9534f';  break;
            case        "warning": toastColor = '#f0ad4e';  break;
            case        "success": toastColor = '#5cb85c';  break;
            default:                                        break;
        }

        let position = {
            top: this.state.position === POSITION.TOP ? 30 : undefined,
            bottom: this.state.position === POSITION.BOTTOM ? 0 : undefined
        }

        if (this.state.visible) {
            return (
                <View {...this.props} style={{...styles.Toast, backgroundColor: toastColor, ...position, ...this.state.style}}>
                    <Text style={{color: "#fff", flex: 1, ...this.state.textStyle}}>{this.state.text}</Text>
                    {this.state.buttonText && 
                        <TouchableOpacity style={{backgroundColor: "transparent", height: 30, elevation: 0, ...this.state.buttonStyle}} onPress={() => this.hide}>
                            <Text style={{fontSize: 14}}>{this.state.buttonText}</Text>
                        </TouchableOpacity>
                    }
                </View>
            )
        }
        return null;
    }
}