import React, {Component} from 'react';
import {SwipeRow as RNSwipeRow} from 'react-native-swipe-list-view';

export default class SwipeRow extends Component {
    render() {
        return (
            <RNSwipeRow {...this.props} />
        )
    }
}