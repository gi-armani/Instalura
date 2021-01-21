import React, { Fragment } from 'react';
import {
    Text,
    Image,
    View,
    FlatList,
    TextInput,
    TouchableOpacity
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
            <View style={style.commentView}>
                <TextInput 
                    placeholder={"Deixe seu comentário..."}
                    style={style.commentInput}
                />
                <TouchableOpacity>
                    <Image 
                        source={require('../../resources/send.png')}
                        style={style.sendImage}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Comments;