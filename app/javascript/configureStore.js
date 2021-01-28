import { applyMiddleware, createStore } from "redux";

import thunk from 'redux-thunk'

const initialState = {
  things: [
    {
      name: "test",
      guid: "123"
    }
  ]
};

function rootReducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case "GET_THINGS_SUCCESS":
      return { things: action.json.things };
  }
  return { things: action.json.things };
}

export default function configureStore(){
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
  return store;
}