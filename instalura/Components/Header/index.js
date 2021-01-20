import React, {Fragment} from 'react';
import {
  Text, 
  Image,
  View
} from 'react-native';

import style from './style.js'

const Header = ({userName, profilePictureUrl}) => {
    return (
        <View style={style.header}>
            <Image 
                source={{uri: profilePictureUrl}}
                style={style.userImage}
            />
            <Text>{userName}</Text>
        </View>
    )
}

export default Header;