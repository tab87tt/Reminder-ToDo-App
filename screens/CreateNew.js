import React, { useState } from "react";
import {
  TextInput,
  Text,
  View,
  StyleSheet
} from "react-native";

import DateTimer from "../components/DateTimePicker";
import CustomButton from "../components/CustomButton";
import CustomSelect from "../components/CustomSelect";
import { Alert } from "react-native";
//import { Picker } from "@react-native-community/picker";
import { Ionicons } from "@expo/vector-icons";

//test state
const initialState1 = [{
  id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  key: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  title: "First Item",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas commodo nibh id sollicitudin.",
  items: [
    { key: 43709094858, item: "first todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
    { key: 9763489761362, item: "second todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
    { key: 3824723857438570, item: "third todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
    { key: 873487474349, item: "fourth todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
  ],
},
{
  id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
  key: "3ac68afc-c605-48d3-a4f8-fbd91aa97f61",
  title: "Second Item",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas commodo nibh id sollicitudin.",
  items: [
    { key: 43039094858, item: "first todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
    { key: 9734897613628, item: "second todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
    { key: 382472385748570, item: "third todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
    { key: 873487844349, item: "fourth todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
    { key: 8794878474349, item: "fifth todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
  ],
},
{
  id: "58694a0f-3da1-471f-bd96-145571e29d72",
  key: "58694a0f-3da1-471f-bd96-145571e29d76",
  title: "Third Item",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas commodo nibh id sollicitudin.",
  items: [
    { key: 4370390948, item: "first todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
    { key: 9634897613628, item: "second todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
    { key: 38247238574570, item: "third todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
    { key: 874878474349, item: "fourth todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
  ],
},
{
  id: "58694a0f-3da1-471f-bd96-145571e29d34",
  key: "58694a0f-3da1-471f-bd96-145571e29d34",
  title: "Fouth Item",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas commodo nibh id sollicitudin.",
  items: [
    { key: 437039094858, item: "first todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
    { key: 9763489763628, item: "second todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
    { key: 382472357438570, item: "third todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
    { key: 873487844349, item: "fourth todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
  ],
},
{
  id: "58694a0f-3da1-471f-bd96-145571e35d72",
  key: "58694a0f-3da1-471f-bd96-145571e35d72",
  title: "Fifth Item",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas commodo nibh id sollicitudin.",
  items: [
    { key: 43703909458, item: "first todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
    { key: 9763489763628, item: "second todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
    { key: 382472385743570, item: "third todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
  ],
}]

const CreateNew = (props) => {
  const [createdToDo, setCreatedToDo] = useState({});
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");
  //date/time handled in the DatePickers
  const [priority, setPriority] = useState("");
  const [alarm, setAlarm] = useState("");
  // const [colourLabel, setColourLabel] = useState("");

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

  
  const onSubmitHandler = () => {
    //create random key to add below
    setCreatedToDo({
      key: 12121221,
      item: title,
      description: description
    });
    //handle add, possibly pass as a drilled prop
    props.onToggleHandler();
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
        <CustomSelect state={initialState1} titlePicker={titlePicker} setTitlePicker={setTitlePicker} />
      </View>
      <DateTimer />
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
          <CustomButton style={styles.button} clickHandler={onSubmitHandler}>
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
