import React, { Fragment } from 'react';
import {
  ScrollView,
  FlatList
} from 'react-native';

import Header from './Components/Header';
import Photo from './Components/Photo';

const data = [
  { id: 1, user: "Giovana" },
  { id: 2, user: "Juliana" },
  { id: 3, user: "Ricardo" }
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
            <Photo />
          </Fragment>
        }
      />
    </ScrollView>
  );
};

export default App;
