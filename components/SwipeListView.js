import React, {Component} from 'react';
import {SwipeListView as RNSwipeList} from 'react-native-swipe-list-view';

export default class SwipeListView extends Component {
    render() {
        return (
            <RNSwipeList {...this.props} />
        )
    }
}