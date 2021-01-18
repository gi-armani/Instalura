import React, {Fragment} from 'react';
import {
  Text, 
  Image, 
  ScrollView,
  Dimensions,
  StyleSheet,
  FlatList
} from 'react-native';

const data = [
  {user: "Giovana"},
  {user: "Juliana"},
  {user: "Ricardo"}
]

const App = () => {
  return (
    <ScrollView>
      <FlatList
        data={data}
        renderItem={item => 
          <Fragment>
            <Text>{item.item.user}</Text>
            <Image 
              source={require("./resources/alura.jpg")}
              style={style.image}></Image>
          </Fragment>
        }
      />
    </ScrollView>
  );
};

const phoneWidth = Dimensions.get("screen").width;
const style = StyleSheet.create({
  image: {
    width: phoneWidth, 
    height: phoneWidth
  }
})

export default App;
