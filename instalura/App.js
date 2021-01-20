import React, { Fragment, useState, useEffect } from 'react';
import {
  ScrollView,
  FlatList
} from 'react-native';

import Header from './Components/Header';
import Photo from './Components/Photo';

const App = () => {
  const [photos, setPhotos] = useState();
  useEffect(() => {
    const getPhotos = async() => {
      const photosHTTP = await fetch("http://10.0.2.2:3030/feed")
      const photosJson = await photosHTTP.json();
      setPhotos(photosJson)
    }

    getPhotos();
  }, [])

  /* const photos = [
    {id: 1, user: "Giovana"}
  ] */

  return (
    <ScrollView>
      <FlatList
        data={photos}
        
        renderItem={item =>
          <Fragment>
            <Header
              userName={item.item.user}
            />
            <Photo />
    </Fragment>
        }
      />
    </ScrollView>
  );
};

export default App;
