import {Dimensions, StyleSheet} from 'react-native'

const phoneWidth = Dimensions.get("screen").width;
const style = StyleSheet.create({
  image: {
    width: phoneWidth, 
    height: phoneWidth
  }
})

export default style;