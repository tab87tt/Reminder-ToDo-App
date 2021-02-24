import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, Button, FlatList, Modal } from "react-native";
import CustomFlatList from "../components/CustomFlatList";
import CustomButton from "../components/CustomButton";
import CreateNew from "./CreateNew";

//importing context
import { StateContext } from "../model/initialState";

const Home = (props) => {
  //state context to pass to flatlist/create new
  const state = useContext(StateContext);
  //add state change handlers in this section below

  const [ toggle, setToggle ] = useState(false);
  const onToggleHandler = () => {
    setToggle(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
     
      {toggle && <Modal><CreateNew onToggleHandler={onToggleHandler}/></Modal>}

      
      <CustomButton style={styles.createButton} clickHandler={onToggleHandler}>
        Create New
      </CustomButton>

      <View style={{ flex: 1 }}>
        <CustomFlatList state={state}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {},
  createButton: {},
});

export default Home;
