import React, { createContext, useState } from 'react';
import { StyleSheet } from 'react-native';

import NavigationController from "./navigation/NavigationController";
//imported initial state for testing
import initialState, { StateContext } from "./model/initialState";
//create context wrapper and local storage sync/save https://docs.expo.io/versions/latest/sdk/async-storage/ [installed]
//fetch initially on load and set data in state, link to isLoading functionality to conditionally render 
//create handler to update async storage 

const App = () => {
  //create state to pass down here
  const [state, setState] = useState(initialState);

  return (
    <StateContext.Provider value={state}>
      <NavigationController/>
    </StateContext.Provider>
  );
}

const styles = StyleSheet.create({
 
});

export default App;