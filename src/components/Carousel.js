import React, {Component} from 'react';
import RNCarousel from 'react-native-snap-carousel';

export default class Carousel extends Component {
    render() {
        return <RNCarousel {...this.props} />
    }
}