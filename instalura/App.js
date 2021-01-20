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

  return (
    <ScrollView>
      <FlatList
        data={photos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={item =>
          <Fragment>
            <Header
              userName={item.item.userName}
              profilePictureUrl={item.item.userURL}
            />
            <Photo
              photoUrl={item.item.url}
              description={item.item.description}
            />
    </Fragment>
        }
      />
    </ScrollView>
  );
};

export default App;
