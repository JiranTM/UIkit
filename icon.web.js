import React from 'react';
import './fonts/rwvi/styles.css';
import Icon from 'react-web-vector-icons';

export default function (props){
    return <Icon font={props.type} 
        {...props}/>
};