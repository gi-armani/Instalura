import React, {Fragment} from 'react';
import {
  Text, 
  Image, 
  ScrollView,
  Dimensions,
  StyleSheet
} from 'react-native';

const phoneWidth = Dimensions.get("screen").width;

const App = () => {
  return (
    <ScrollView>
      <Text>Giovana</Text>
      <Image 
        source={require("./resources/alura.jpg")}
        style={style.image}></Image>
      <Text>Juliana</Text>
      <Image 
        source={require("./resources/alura.jpg")}
        style={style.image}></Image>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  image: {
    width: phoneWidth, 
    height: phoneWidth
  }
})

export default App;
