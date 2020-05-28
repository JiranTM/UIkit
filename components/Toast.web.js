import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default class Toast extends Component {
    static show({text = "", type = "", duration = 1500, onClose = null}){
        let options = {
            autoClose:duration,
            onClose,
        };

        switch(type){
            case "danger":
                toast.error(text, options);
                break;
            case "success":
                toast.success(text, options);
                break;
            case "warning":
                toast.warn(text, options);
                break;
            default:
                toast.info(text, options);
        }
    }

    render(){
        return (<ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />);
    }
}