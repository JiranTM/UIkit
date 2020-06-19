import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

export default class List extends Component {
    render() {
        const {dataArray} = this.props;

        if (dataArray) {
            return (
                <View style={this.props.style}>
                    <FlatList 
                        data={dataArray}
                        renderItem={({item, index}) => 
                            this.props.renderItem
                                ? this.props.renderItem({item, index})
                                : this.props.renderRow(item, 0, index)
                        }
                        {...this.props}
                    />
                </View>
            ) 
        }
        return null
    }
}
