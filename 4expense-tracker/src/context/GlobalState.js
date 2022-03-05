import React, { createContext, useReducer } from 'react';

// Initial State
const InitialState = {
  transactions: [],
};

// Create Context
export const GlobalContext = createContext(InitialState);

// Provider Components
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(InitialState);

  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};
