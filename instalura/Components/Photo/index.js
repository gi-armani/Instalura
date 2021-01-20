import React, {Fragment} from 'react';
import {
  Image,
  Text
} from 'react-native';

import style from './style.js'

const Photo = ({photoUrl, description}) => {
    return (
        <Fragment>
            <Image 
                source={{uri: photoUrl}}
                style={style.image}>
            </Image>
            <Text>{description}</Text>
            <Image 
                source={checkIfLiked(1)}
                style={style.heartImage}
            />
        </Fragment>
    )
}

const checkIfLiked = (numberOfLikes) => {
    if(numberOfLikes > 0) {
        return require('../../resources/s2Checked.png')
    } else {
        return require('../../resources/s2Unchecked.png')
    }
}

export default Photo;