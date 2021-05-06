import React from 'react';
import { TouchableOpacity,StyleSheet,View,Text} from 'react-native';
import store from './src/store'
import {Provider} from 'react-redux'
import Counterfile from './src/Counterfile';

function App(props) {
  return (
    <Provider store={store}>
    <Counterfile value={true}/>
    </Provider>
  );
}


export default App;