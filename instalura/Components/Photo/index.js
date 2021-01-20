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
        </Fragment>
    )
}

export default Photo;