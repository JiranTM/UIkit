import React, {Component} from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';

export default class SwipeListView extends Component {
    render() {
        return (
            <SwipeListView {...this.props} />
        )
    }
}