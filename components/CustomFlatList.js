import React, { useState, useContext } from "react";
import { StateContext } from "../model/model";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  Button,
  Modal,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { ACTIONS } from "../model/model";

//outside external group list
const Item = (props) => (
  <TouchableOpacity
    onPress={props.onPress}
    style={[styles.item, styles.card, props.style]}
    opacity={0.1}
  >
  {/* Item titles and number of items in this section */}
    <View style={{ flexDirection: "row" }}>
      <Text style={styles.title}>{props.item.title}</Text>
      <View style={styles.length}>
        <Text>Items:{props.item.items.length}</Text>
      </View>
    </View>
    <View style={{ display: props.showMore }}>
    {/* description of the section */}
      <Text>{props.item.description}</Text>
      {/* mapping out of the array of todo's within this section */}
      {props.item.items.map((i, index) => {
        //inside group, todolist logic
        return (
          <View key={i.key} style={[styles.list, {backgroundColor: i.complete ? "gray" : "white"}]}>
            <View style={{flexDirection: "row"}}>
              <Text style={styles.listText}>{i.item}</Text>
              {/* <Button title="Expand1" onPress={props.toggleHandler} /> */}
              {/* <Text>{props.moreInfo}</Text> */}
              <Button
                title="expand"
                onPress={() => {
                  props.setToggleToDo((prev) => !prev);
                  props.setMoreInfo(i.key);
                }}
              />
              <Button
                title= {i.complete ? "uncomplete?" : "complete?"}
                onPress={() => {
                  props.dispatch({type: "toggle", payload: {title: props.groupTitle, itemKey: i.key}});
                }}
              />
                <Text>{i.complete}</Text>
            </View>
            <View>
              {props.toggleToDo && props.moreInfo === i.key && (
                <View style={styles.detailsText}>
                {/* further details of each todo */}
                  <Text>{props.item.items[index].description}</Text>
                  <Text>{i.complete.toString()}</Text>
                  <Button
                title="delete?"
                onPress={() => {
                  props.dispatch({type: "del", payload: {title: props.groupTitle, itemKey: i.key}})
                }}
              />
                </View>
              )}
            </View>
          </View>
        );
      })}
    </View>
  </TouchableOpacity>
);

const CustomFlatList = ({state, dispatch}) => {
  //state passed into flatlist via context as prop, no need to set below once changed over
  //const [state, setState] = useState(initialState);

  const reducerContext = useContext(StateContext);

  const [selectedId, setSelectedId] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [toggleToDo, setToggleToDo] = useState(false);
  const [moreInfo, setMoreInfo] = useState("Test");

  //deals with created item above and passed in props
  const renderItem = ({ item }) => {
    // const toggleHandler = (prev) => {
    //   setToggle((prev = !toggle));
    // };

    const onPressHandler = () => {
      setSelectedId(item.key);
      setToggle(prev => prev = !toggle);
    };

    const display = item.key === selectedId ? "flex" : "none";
    const backgroundColor = item.key === selectedId ? "#6e3b6e" : "#f9c2ff";

    return (
      <Item
        item={item}
        onPress={onPressHandler}
        style={{ backgroundColor }}
        showMore={display}
        toggle={toggle}
        toggleHandler={setToggle}
        toggleToDo={toggleToDo}
        setToggleToDo={setToggleToDo}
        setMoreInfo={setMoreInfo}
        moreInfo={moreInfo}
        dispatch={reducerContext.dispatch}
        groupTitle={item.title}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={state}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  card: {
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  list: {
    flexDirection: "column",
    justifyContent: "space-between",
    margin: 2,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 3
  },
  listText: {
    padding: 10,
    flex: 1
  },
  detailsText: {
    padding: 10
  },
  length: {
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "red",
    borderWidth: 2,
    height: 25,
    margin: 6,
    padding: 5,
    borderRadius: 5,
  },
});

export default CustomFlatList;
