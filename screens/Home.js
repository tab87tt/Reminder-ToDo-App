import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, Button, FlatList, Modal } from "react-native";
import CustomFlatList from "../components/CustomFlatList";
import CustomButton from "../components/CustomButton";
import CreateNew from "./CreateNew";

//importing context useContext pattern
import { StateContext } from "../model/model";

//because generic groups have been created with no items, only show groups with more than 0 items
//add this logic

const Home = (props) => {
  //state context to pass to flatlist/create new
  const reducerContext = useContext(StateContext);
  //add state change handlers in this section below

  const [ toggle, setToggle ] = useState(false);
  const onToggleHandler = () => {
    setToggle(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
     
      {toggle && <Modal><CreateNew dispatch={reducerContext.dispatch} onToggleHandler={onToggleHandler}/></Modal>}

      
      <CustomButton style={styles.createButton} clickHandler={onToggleHandler}>
        Create New
      </CustomButton>

      <View style={{ flex: 1 }}>
        <CustomFlatList state={reducerContext.state} dispatch={reducerContext.dispatch}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 5
  },
  modal: {},
  createButton: {
  },
});

export default Home;