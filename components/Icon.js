import React, { Component } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

import ThemeContext from './themeContext';

export default class Icon extends Component {
    render() {
        let Ic = Ionicons;

        switch (this.props.type) {
            case 'AntDesign': Ic = AntDesign; break;
            case 'Entypo': Ic = Entypo; break;
            case 'EvilIcons': Ic = EvilIcons; break;
            case 'Feather': Ic = Feather; break;
            case 'FontAwesome': Ic = FontAwesome; break;
            case 'FontAwesome5': Ic = FontAwesome5; break;
            case 'Fontisto': Ic = Fontisto; break;
            case 'Foundation': Ic = Foundation; break;
            case 'Ionicons': Ic = Ionicons; break;
            case 'MaterialCommunityIcons': Ic = MaterialCommunityIcons; break;
            case 'MaterialIcons': Ic = MaterialIcons; break;
            case 'Octicons': Ic = Octicons; break;
            case 'SimpleLineIcons': Ic = SimpleLineIcons; break;
            case 'Zocial': Ic = Zocial; break;
            default: Ic = Ionicons;
        }

        return (<Ic {...this.props} style={{ ...this.context.Icon, ...this.props.style }} />)
    }
}

Icon.contextType = ThemeContext;