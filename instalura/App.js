import React, {Fragment} from 'react';
import {
  Text, 
  Image, 
  ScrollView,
  Dimensions,
  StyleSheet,
  FlatList
} from 'react-native';

import Header from './Components/Header';

const data = [
  {id: 1, user: "Giovana"},
  {id: 2, user: "Juliana"},
  {id: 3, user: "Ricardo"}
]

const App = () => {
  return (
    <ScrollView>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={item => 
          <Fragment>
            <Header
              userName={item.item.user}
            />
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
