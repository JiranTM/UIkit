import React, { Component } from 'react';
import ToastRN from 'react-native-toast-native';

export default class Toast extends Component {
    static show({text = "", type = "", duration = 1500, onClose = ()=>{} }){
        let style = {};
        switch(type){
            case "danger":
                style = {backgroundColor:"#E74C3C"}
                break;
            case "success":
                style = {backgroundColor:"#07BC0C"}
                break;
            case "warning":
                style = {backgroundColor:"#F1C40F"}
                break;
            default:
                style = {backgroundColor:"#3498DB"}
        }

        ToastRN.show(text, Toast.SHORT, Toast.BOTTOM, style);
        setTimeout(onClose, duration);
    }

    render(){
        return (<></>);
    }
}