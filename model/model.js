import React, { createContext } from  "react";

export const StateContext = createContext();

//import into app js to useReducer setup 

//create action consts
export const ACTIONS = {
  ADD: "add",
  DEL: "del",
  TOGGLE: "toggle",
  GRP_TITLE: "edit group title",
  GRP_DESC: "edit group desc"
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
    case ("edit group title"):
      //dispatch({type: "edit group", payload: {oldTitle: xxxxx, newTitle: xxxx, newDescription: xxxxx}})
      state.map((group, index)=>{
        if(group.title === action.payload.oldTitle){
          return state[index] = {
            ...group,
            title: action.payload.newTitle,
          };
        }
        return group;
      })
      case ("edit group desc"):
        //dispatch({type: "edit group", payload: {oldTitle: xxxxx, newTitle: xxxx, newDescription: xxxxx}})
        state.map((group, index)=>{
          if(group.title === action.payload.oldTitle){
            return state[index] = {
              ...group,
              description: action.payload.newDescription
            };
          }
          return group;
        })
    default: 
      return state;
  }
}

export const initialState = [
    {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    key: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Edit Title",
    description:
      "Edit group title/description using the \"New Group Title\" & \"New Group Description\" options inside \"Create New\".",
    items: [
      { key: 43709094858, date: {full: new Date(), year: new Date().getFullYear().toString(), month: new Date().getMonth().toString(), day: new Date().getDate().toString()}, complete: false, item: "first todo", description: "testing ultrices erat. Duis porttitor molestie nulla, id semper" },
      { key: 9763489761362, date: {full: new Date(), year: new Date().getFullYear().toString(), month: new Date().getMonth().toString(), day: new Date().getDate().toString()}, complete: false, item: "second todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
      { key: 3824723857438570, date: {full: new Date(), year: new Date().getFullYear().toString(), month: new Date().getMonth().toString(), day: new Date().getDate().toString()}, complete: false, item: "third todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
      { key: 873487474349, date: {full: new Date(), year: new Date().getFullYear().toString(), month: new Date().getMonth().toString(), day: new Date().getDate().toString()}, complete: false, item: "fourth todo", description: " ultrices erat. Duis porttitor molestie nulla, id semper" },
    ],
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    key: "3ac68afc-c605-48d3-a4f8-fbd91aa97f61",
    title: "New Group 1",
    description:
      "Edit group title/description using the \"New Group Title\" & \"New Group Description\" options inside \"Create New\".",
    items: [],
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    key: "58694a0f-3da1-471f-bd96-145571e29d76",
    title: "New Group 2",
    description:
      "Edit group title/description using the \"New Group Title\" & \"New Group Description\" options inside \"Create New\".",
    items: [],
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d34",
    key: "58694a0f-3da1-471f-bd96-145571e29d34",
    title: "New Group 3",
    description:
      "Edit group title/description using the \"New Group Title\" & \"New Group Description\" options inside \"Create New\".",
    items: [],
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e35d72",
    key: "58694a0f-3da1-471f-bd96-145571e35d72",
    title: "New Group 4",
    description:
      "Edit group title/description using the \"New Group Title\" & \"New Group Description\" options inside \"Create New\".",
    items: [],
  },
  {
    id: "58694a0f-3da1-471f-bd96-145534e35d72",
    key: "58694a0f-3da1-471f-bd96-145534e35d72",
    title: "New Group 5",
    description:
      "Edit group title/description using the \"New Group Title\" & \"New Group Description\" options inside \"Create New\".",
    items: [],
  }
];