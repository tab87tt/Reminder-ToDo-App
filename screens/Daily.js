import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, ScrollView, TouchableWithoutFeedback } from "react-native";
import { StateContext } from "../model/model";
import { FontAwesome } from "@expo/vector-icons";

const Daily = (props) => {

  const reducerContext = useContext(StateContext);
  //instantiates date comparison object 
  const currentDate = new Date();
  const currentDateObj = {
    full: currentDate.toString(),
    year: currentDate.getFullYear().toString(),
    month: currentDate.getMonth().toString(),
    day: currentDate.getDate().toString()
  };
  //for list render tbc
  const [toggleToDo, setToggleToDo] = useState(false);
  const [moreInfo, setMoreInfo] = useState("");

  // useEffect(()=>{
  //   const updateOnLoad = props.navigation.addListener('focus', ()=>{
  //     props.navigation.replace("Daily");
  //   })
  //   return updateOnLoad
  // }, [props.navigation]);
  // props.navigation.addListener('focus', ()=>{
  //   props.navigation.replace("Daily");
  // })
  const refresh = ()=>{
    props.navigation.replace("Daily");
  }

  // useEffect(()=>{
  //   props.navigation.replace("Daily");
  // },[])
 
  const dailyItems = reducerContext.state.map((group)=>{

    return (group.items.map((i)=>{
      {/* be careful with the below code you must only search for props that exist or err */}
      if((i.date.year === currentDateObj.year) && (i.date.month === currentDateObj.month) && (i.date.day === currentDateObj.day)){
        const uuid = ()=>{
            return Math.floor(Math.random() * 100000).toString();
          }
          
          const toggleHandler = ({reducerContext, group, i})=>{
            reducerContext.dispatch({type: "toggle", payload: {title: group.title, itemKey: i.key}})
          }
          //change background to reflext completed status
          return (
            <View key={uuid()} style={styles.card}>
            <Text><Text style={styles.bold}>Group:</Text> {group.title}</Text>
            <Text><Text style={styles.bold}>Title:</Text> {i.item}</Text>
            <Text><Text style={styles.bold}>Description:</Text> {i.description}</Text>
            <Text><Text style={styles.bold}>Time:</Text> {i.date.full.getHours()}:{i.date.full.getMinutes() < 10 ? "0" + i.date.full.getMinutes().toString() : i.date.full.getMinutes()}</Text>
            <Text><Text style={styles.bold}>Completed:</Text> {i.complete ? "Completed" : "Unfinished"}</Text>
          </View>
          )
          //bulk this out with daily rendered list items
          
        }
        return i;
      }))
  });
 


return (
    <TouchableWithoutFeedback onPress={refresh}>
  <View style={styles.container}>
    <View style={[styles.card, styles.background]}>
    <Text>Made Changes? Tap Anywhere to Update!</Text>
    </View>
    <ScrollView>
    {dailyItems} 
    </ScrollView>
    </View>
    </TouchableWithoutFeedback>
)           
};

const styles = StyleSheet.create({
  container:{
    display: "flex",
    flex: 1
  },
  bold:{
    fontWeight: "bold"
  },
  card:{
    flexDirection: "column",
    justifyContent: "space-between",
    margin: 2,
    borderStyle: "solid",
    borderColor: "#9257ae",
    borderWidth: 3,
    borderRadius: 5,
    padding: 4,
    margin: 5
  },
  background: {
    backgroundColor: "red"
  },
  list: {
    flexDirection: "column",
    justifyContent: "space-between",
    margin: 2,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 3
  },
  detailsText: {
    padding: 10
  },
  listText: {
    padding: 10,
    flex: 1
  }
});

export default Daily;

//version of list from home
{/* <View key={i.key} style={[styles.list, {backgroundColor: i.complete ? "gray" : "white"}]}>
                <View style={{flexDirection: "row"}}>
                  <Text style={styles.listText}>{i.item}</Text>
                  <Button
                    title="expand"
                    onPress={() => {
                      setToggleToDo((prev) => !prev);
                      setMoreInfo(i.key);
                    }}
                  />
                  <Button
                    title= {i.complete ? "uncomplete?" : "complete?"}
                    onPress={() => {
                      reducerContext.dispatch({type: "toggle", payload: {title: group.title, itemKey: i.key}});
                    }}
                  />
                    <Text>{i.complete}</Text>
                </View>
                <View>
                  {toggleToDo && moreInfo === i.key && (
                    <View style={styles.detailsText}>
                    {/* further details of each todo */}{/*
                      <Text>{group.items[index].description}</Text>
                      <Text>{i.complete.toString()}</Text>
                      <Button
                    title="delete?"
                    onPress={() => {
                      props.dispatch({type: "del", payload: {title: group.title, itemKey: i.key}})
                    }}
                  />
                    </View>
                  )}
                </View>
              </View>
            )
          }
          return i
        })
      })}
    </View>  */}