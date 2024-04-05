import React, {  createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

// initaial state
const initialState = {
    transactions:[]
}

//create context
export const Globalcontext = createContext(initialState);

//provider component
export const GlobalProvider = ( {children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      playload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      playload: transaction
    });
  }

  return (<Globalcontext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
    </Globalcontext.Provider>);
}