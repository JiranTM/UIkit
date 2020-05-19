import React, {Component} from 'react';
import {SwipeListView as SwipeList} from 'react-native-swipe-list-view';

export default class SwipeListView extends Component {
    render() {
        return (
            <SwipeList {...this.props} />
        )
    }
}