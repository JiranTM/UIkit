import React from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Row, Col, Text, Button, H1 } from '../index';
import { confirmAlert } from 'react-confirm-alert';

export default class Alert {
    static alert(title, message, buttons = []){
        confirmAlert({
            title: title,
            message: message,
            buttons: buttons.map((b)=>({
                    label: b.text,
                    onClick: b.onPress
                })),
            customUI: ({ onClose }) => {
                return (<Col>
                    <H1>{title}</H1>
                    <Text>{message}</Text>
                    <Row>
                        {buttons.map((b)=>(<Button 
                            success danger={b.style === 'cancel'} 
                            style={{marginRight:10}} 
                            onPress={()=>{b.onPress();onClose();}}>
                            <Text>{b.text}</Text>
                        </Button>))}
                    </Row>
                </Col>
                );
            }
        });
    }
};