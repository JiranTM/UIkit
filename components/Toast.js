import React, { Component } from 'react';
import { Toast as ToastRN } from 'rn-simple-toast';

let show = ()=>{};
export default class Toast extends Component {
    static show({ text = "", type = "", duration = 1500, onClose = () => { } }) {
        let color = "#3498DB" ;
        switch (type) {
            case "danger":
                color = "#E74C3C"
                break;
            case "success":
                color = "#07BC0C"
                break;
            case "warning":
                color = "#F1C40F"
                break;
            default:
                color = "#3498DB"
        }

        show(text, color);
        setTimeout(onClose, duration);
    }

    componentDidMount(){
        show = this.toastRef.show;
    }

    render() {
        return (<ToastRN ref={_ref => this.toastRef = _ref} />);
    }
}
