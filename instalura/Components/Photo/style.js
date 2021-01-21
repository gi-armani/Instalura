import {Dimensions, StyleSheet} from 'react-native'

const phoneWidth = Dimensions.get("screen").width;
const style = StyleSheet.create({
  image: {
    width: phoneWidth, 
    height: phoneWidth
  },

  heartImage: {
    width: 40,
    height: 40,
    margin: 5
  },

  heartView: {
    flexDirection: "row",
    alignItems: "center"
  }
})

export default style;