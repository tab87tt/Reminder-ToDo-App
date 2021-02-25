import React, { createContext } from  "react";

export const StateContext = createContext();

//import into app js to useReducer setup 

//create action consts
export const ACTIONS = {
  ADD: "add",
  DEL: "del",
  TOGGLE: "toggle",
  NEW_GROUP: "new group"
}

//create reducer patterns
export const reducer = (state, action) =>{
  switch (action.type){
    //dispatch({type: "add", payload: {data: xxxxx, title: xxxxxx}})
    case ("add"):
      state.map((group, index) =>{
        if(group.title === action.payload.title){
            return state[index] = {...group, items: [...group.items, action.payload.data]}
        }
        return group
      })
    case ("del"):
      //"
      state.map((group, index) =>{
        if(group.title === action.payload.title){
          return state[index] = {...group, items: group.items
            .filter(item => item.key !== action.payload.itemKey)}
        }
        return group
      })
    case ("toggle"):
      //dispatch({type: "toggle", payload: {title: xxxxxx, itemKey: xxxxxx}})
      state.map((group, index) =>{
        if(group.title === action.payload.title){
            return state[index] = {...group, items: group.items
              .map(item => {
                if(item.key === action.payload.itemKey){
                  return {...item, complete: !item.complete};
                }
                return item
              })}
        }
        return group
      })
    case ("new group"):
      //add this functionality to the create new modal
      //dispatch({type: "new group", payload: {...group object}})
      //group object specifics to be finalised inside create new firstly...
      return state = [...state, {...action.payload}];
    default: 
      return state;
  }
}

export const initialState = [
    {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    key: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas commodo nibh id sollicitudin.",
    items: [
      { key: 43709094858, complete: false, item: "first todo", description: "testing ultrices erat. Duis porttitor molestie nulla, id semper" },
      { key: 9763489761362, complete: false, item: "second todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
      { key: 3824723857438570, complete: false, item: "third todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
      { key: 873487474349, complete: false, item: "fourth todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
    ],
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    key: "3ac68afc-c605-48d3-a4f8-fbd91aa97f61",
    title: "Second Item",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas commodo nibh id sollicitudin.",
    items: [
      { key: 43039094858, complete: false, item: "first todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
      { key: 9734897613628, complete: false, item: "second todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
      { key: 382472385748570, complete: false, item: "third todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
      { key: 873487844349, complete: false, item: "fourth todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
      { key: 8794878474349, complete: false, item: "fifth todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
    ],
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    key: "58694a0f-3da1-471f-bd96-145571e29d76",
    title: "Third Item",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas commodo nibh id sollicitudin.",
    items: [
      { key: 4370390948, complete: false, item: "first todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
      { key: 9634897613628, complete: false, item: "second todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
      { key: 38247238574570, complete: false, item: "third todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
      { key: 874878474349, complete: false, item: "fourth todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
    ],
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d34",
    key: "58694a0f-3da1-471f-bd96-145571e29d34",
    title: "Fouth Item",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas commodo nibh id sollicitudin.",
    items: [
      { key: 437039094858, complete: false, item: "first todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
      { key: 9763489763628, complete: false, item: "second todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
      { key: 382472357438570, complete: false, item: "third todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
      { key: 873487844349, complete: false, item: "fourth todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
    ],
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e35d72",
    key: "58694a0f-3da1-471f-bd96-145571e35d72",
    title: "Fifth Item",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas commodo nibh id sollicitudin.",
    items: [
      { key: 43703909458, complete: false, item: "first todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
      { key: 9763489763628, complete: false, item: "second todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
      { key: 382472385743570, complete: false, item: "third todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
    ],
  }
];