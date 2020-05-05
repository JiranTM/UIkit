import React from 'react';
import SpinKit from 'react-spinkit';

function SpinKitWeb({isVisible, color, size, type}){
    if(isVisible)
        return <SpinKit name={type} style={{color,fontSize:size}}/>
    else 
        return null;
}

export default SpinKitWeb;