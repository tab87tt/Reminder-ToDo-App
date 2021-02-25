import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { StateContext } from "../model/model";

const Daily = () => {

  const reducerContext = useContext(StateContext);
  //instantiates date comparison object 
  const currentDate = new Date();
  const currentDateObj = {
    full: currentDate,
    year: currentDate.getFullYear(),
    month: currentDate.getMonth(),
    day: currentDate.getDate()
  };
  //for list render tbc
  const [toggleToDo, setToggleToDo] = useState(false);
  const [moreInfo, setMoreInfo] = useState(null);
  const [state, setState] = useState(reducerContext.state);

  return (
    <View>
      {state.map((group, index)=>{
        return (group.items.map((i, index)=>{
            {/* be careful with the below code you must only search for props that exist or err */}
            {/* if(i.date.year === currentDateObj.year && 
            i.date.month === currentDateObj.month && 
            i.date.day === currentDateObj.day){
              return (<Text>Daily Working...</Text>)
            } */}
            return (<Text key={i.index}>Daily Not working yet...</Text>)
          }))
      })} 
      <Text>Test</Text>
     </View>
  )           
};

const styles = StyleSheet.create({
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