import React, { useState, useContext } from "react";
import {
  TextInput,
  Text,
  View,
  StyleSheet
} from "react-native";

import DateTimer from "../components/DateTimer";
import CustomButton from "../components/CustomButton";
import CustomSelect from "../components/CustomSelect";
import { Alert } from "react-native";
//import { Picker } from "@react-native-community/picker";
import { Ionicons } from "@expo/vector-icons";
import { StateContext } from "../model/model";


const CreateNew = (props) => {
  const reducerContext = useContext(StateContext);

  const [createdToDo, setCreatedToDo] = useState({});
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");
  //date/time handled in the DatePickers
  const [priority, setPriority] = useState("");
  const [alarm, setAlarm] = useState("");
  // const [colourLabel, setColourLabel] = useState("");
  const [date, setDate] = useState(new Date());
  // const [switcher, setSwitch] = useState(false);

  // const [picker, setPicker] = useState({ currVal: "java" });

  const [titlePicker, setTitlePicker] = useState("Select Group");

  const [toggleSelect, setToggleSelect] = useState(false);
  //change to false default when finished


  const onTitleChangeHandler = (title) => {
    setTitle(title);
  };

  const onDescriptionChangeHandler = (description) => {
    setDescription(description);
  };

  
  const onSubmitHandler = (title) => {

    if (title){
      const uuid = Math.floor(Math.random() * 100000);
      //create random key to add below
      const newToDo = {
        key: uuid,
        item: title,
        description: description,
        date: {
          full: date,
          year: date.getFullYear(),
          month: date.getMonth(),
          day: date.getDate()
        }
      };
  
      reducerContext.dispatch({type: "add", payload: {data: newToDo, title: title}})
      //handle add, possibly pass as a drilled prop
      props.onToggleHandler();
    }
  };
  const clearHandler = () => {
    setTitle("");
    setId("");
    setDescription("");
    //date/time handled in the DatePickers
    setPriority("");
    setAlarm("");
    // setColourLabel("");
    setSwitch(false);
  };

  //https://docs.expo.io/versions/latest/react-native/alert/
  const onCancelHandler = () => {
    Alert.alert("Are You Sure?", "All content will be lost...", [
      { text: "Cancel", onPress: clearHandler() },
      { text: "Okay" },
    ]);
  };

  // const onPickerChangeHandler = () => {
  //   setPicker({ currVal: picker });
  // };

  // const [modalOptions, setModalOptions] = useState([
  //   {key: 1, colour: "Green"},
  //   {key: 2, colour: "Blue"},
  //   {key: 3, colour: "Red"}]);

  //   const [modalToggle, setModalToggle] = useState(false);
    
  //   const modalToggleHandler = (modalToggle)=>{
  //     setModalToggle(modalToggle => !modalToggle);
  //   };

    const titleSelectHandler = (item)=>{
      setTitlePicker(item.title);
    }

  return (
    <View style={styles.container}>
      <View>
        <Text style={{marginTop: 5}}>Title</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Title"
          onChangeText={onTitleChangeHandler}
          value={title}
        />
        <Text>Description</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Description"
          onChangeText={onDescriptionChangeHandler}
          value={description}
        />
        <CustomSelect state={reducerContext.state} titlePicker={titlePicker} setTitlePicker={setTitlePicker} />
      </View>
      <DateTimer date={date} setDate={setDate}/>
      <View>
        {/* <Text>Selected Date:{}</Text>
        <Text>Selected Time:{}</Text> */}
      </View>
      {/* <View>
        <CustomSwitch
          label="Strict Mode [No Overlaps]"
          switch={switcher}
          SwitchHandler={SwitchHandler}
        />
      </View> */}
      <View style={styles.buttonView}>
        <View style={styles.buttonLength}>
          <CustomButton style={styles.button} clickHandler={()=>onSubmitHandler(titlePicker)}>
            Submit
          </CustomButton>
        </View>
        <View style={styles.buttonLength}>
          {/* due to toggle create new functionality, on submit needs to toggle same as cancel but with additional information submission */}
          <CustomButton style={styles.button} clickHandler={props.onToggleHandler}>
            Cancel
          </CustomButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: "#cae1ff",
    marginHorizontal: 0,
  },
  buttonView: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-evenly",
    margin: 4,
    paddingHorizontal: 7,
    alignItems: "center",
    marginTop: 10
  },
  buttonLength: {
    width: "48%",
  },
  textInput: {
    borderStyle: "solid",
    borderColor: "#a04486",
    borderWidth: 2,
    borderRadius: 5,
    padding: 3,
    paddingHorizontal: 8,
    marginVertical: 3,
    width: 225,
    fontSize: 15,
  },
  pickerInput: {
    justifyContent: "space-between",
    flexDirection: "row",
    borderStyle: "solid",
    borderColor: "#a04486",
    borderWidth: 2,
    borderRadius: 5,
    padding: 3,
    paddingHorizontal: 8,
    marginVertical: 3,
    width: 225,
    fontSize: 15,
  },
  textPicker: {
    fontSize: 16
  }
});

export default CreateNew;
