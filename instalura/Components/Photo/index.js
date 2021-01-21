import React, {Fragment, useState} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import style from './style.js'

const Photo = ({photoUrl, description, likesAmount}) => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(likesAmount);

    const likePhoto = () => {
        let qnt = likes;
        if(liked) {
            qnt--;
        } else {
            qnt++
        }
        setLikes(qnt)
        setLiked(!liked)
    }
    return (
        <Fragment>
            <Image 
                source={{uri: photoUrl}}
                style={style.image}>
            </Image>
            <Text>{description}</Text>
            <View style={style.heartView}>
                <TouchableOpacity onPress={likePhoto}>
                    <Image 
                        source={checkIfLiked(liked)}
                        style={style.heartImage}
                    />
                </TouchableOpacity>
                <Text>{likes}</Text>
            </View>
        </Fragment>
    )
}

const checkIfLiked = (liked) => {
    if(liked) {
        return require('../../resources/s2Checked.png')
    } else {
        return require('../../resources/s2Unchecked.png')
    }
}

export default Photo;