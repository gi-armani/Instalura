import React, {Fragment, useState} from 'react';
import {
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

import style from './style.js'

const Photo = ({photoUrl, description}) => {
    const [liked, setLiked] = useState(false);

    const likePhoto = () => {
        setLiked(!liked)
    }
    return (
        <Fragment>
            <Image 
                source={{uri: photoUrl}}
                style={style.image}>
            </Image>
            <Text>{description}</Text>
            <TouchableOpacity onPress={likePhoto}>
                <Image 
                    source={checkIfLiked(liked)}
                    style={style.heartImage}
                />
            </TouchableOpacity>
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