import React, { useState, useReducer, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavigationController from "./navigation/NavigationController";
//imported initial state for testing
import { reducer, initialState, StateContext } from "./model/model";
//create context wrapper and local storage sync/save https://docs.expo.io/versions/latest/sdk/async-storage/ [installed]
//fetch initially on load and set data in state, link to isLoading functionality to conditionally render 
//create handler to update async storage 

const App = () => {
  const [getAsyncState, setAsyncState] = useState();

  const getAsyncStateFunction = () => {
    //function to get the value from AsyncStorage
    AsyncStorage.getItem('async_state').then(
      (value) =>{
        //AsyncStorage returns a promise so adding a callback to get the value
        //const val = JSON.stringify(value)
        setAsyncState(JSON.parse(value));
      //Setting the value in Text
      }
    );
  };

  //gets state async once upon first render
  useEffect(()=>{
    getAsyncStateFunction()
  }, [])

  if(getAsyncState == undefined){
    const [state, dispatch] = useReducer(reducer, initialState)
  
    return (
      <StateContext.Provider value={{state: state, dispatch: dispatch}}>
        <NavigationController/>
      </StateContext.Provider>
    );
  }else{
    const [state, dispatch] = useReducer(reducer, getAsyncState)
  
    return (
      <StateContext.Provider value={{state: state, dispatch: dispatch}}>
        <NavigationController/>
      </StateContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
 
});

export default App;