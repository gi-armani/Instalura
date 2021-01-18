import React, {Fragment} from 'react';
import {
  Text, 
  Image
} from 'react-native';

import style from './style.js'

const Header = ({userName}) => {
    return (
        <Fragment>
            <Image 
                source={require('../../resources/alura.jpg')}
                style={style.userImage}
            />
            <Text>{userName}</Text>
        </Fragment>
    )
}

export default Header;