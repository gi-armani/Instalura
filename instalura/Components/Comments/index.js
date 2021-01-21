import React, { Fragment } from 'react';
import {
    Text,
    Image,
    View,
    FlatList
} from 'react-native';

import style from './style.js'

const Comments = ({ comments }) => {
    return (
        <View >
            <FlatList
                data={comments}
                keyExtractor={(item, index) => index.toString()}
                renderItem={item =>
                    <Text>
                        {item.item.text}
                    </Text>
                }
            />
        </View>
    )
}

export default Comments;