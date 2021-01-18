import React, {Fragment} from 'react';
import {
  Image
} from 'react-native';

import style from './style.js'

const Photo = () => {
    return (
        <Image 
            source={require("../../resources/alura.jpg")}
            style={style.image}>
        </Image>
    )
}

export default Photo;