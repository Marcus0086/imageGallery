import React, { createContext, useReducer } from "react";
import Reducer from "./reducer";

const initialState = {
  data: [],
  error: null
};

const Context = createContext(initialState);

const Store = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default Store;

export { Context };
