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
        switch(this.props.type) {
            case    'AntDesign':               this.Icon = AntDesign;              break;
            case    'Entypo':                  this.Icon = Entypo;                 break;
            case    'EvilIcons':               this.Icon = EvilIcons;              break;
            case    'Feather':                 this.Icon = Feather;                break;
            case    'FontAwesome':             this.Icon = FontAwesome;            break;
            case    'FontAwesome5':            this.Icon = FontAwesome5;           break;
            case    'Fontisto':                this.Icon = Fontisto;               break;
            case    'Foundation':              this.Icon = Foundation;             break;
            case    'Ionicons':                this.Icon = Ionicons;               break;
            case    'MaterialCommunityIcons':  this.Icon = MaterialCommunityIcons; break;
            case    'MaterialIcons':           this.Icon = MaterialIcons;          break;
            case    'Octicons':                this.Icon = Octicons;               break;
            case    'SimpleLineIcons':         this.Icon = SimpleLineIcons;        break;
            case    'Zocial':                  this.Icon = Zocial;                 break;
            default:                           this.Icon = Ionicons;
        }

        return (
            <ThemeContext.Consumer>
                {value => 
                    <this.Icon {...this.props} style={{...value.Icon, ...this.props.style}} />
                }
            </ThemeContext.Consumer>
        )
    }
}