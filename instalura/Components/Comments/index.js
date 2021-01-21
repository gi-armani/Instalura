import React, { Fragment, useState } from 'react';
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
    const [allComments, setAllComments] = useState(comments);

    const addComment = () => {
        let newComment = {
            date: Date.now(),
            text: inputFieldContent,
            userName: "teste"
        }

        setAllComments([...allComments, newComment])

        console.log(inputFieldContent)
        inputField.clear();
    }

    let inputField;
    let inputFieldContent = "";

    return (
        <View >
            <FlatList
                data={allComments}
                keyExtractor={(item, index) => index.toString()}
                renderItem={item =>
                    <View style={style.singleComment}>
                        <Text>{item.item.userName + " "}</Text>
                        <Text>{item.item.text}</Text>
                    </View>
                }
            />
            <View style={style.commentView}>
                <TextInput 
                    ref={textInput => inputField = textInput}
                    onChangeText={text => inputFieldContent = text}
                    placeholder={"Deixe seu comentário..."}
                    style={style.commentInput}
                />
                <TouchableOpacity onPress={addComment}>
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