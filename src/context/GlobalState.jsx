import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//Initial State
const initialState = {
  transactions: [
    { id: 554656, text: "Flower", amount: -20 },
    { id: 456235, text: "Salary", amount: 300 },
    { id: 489047, text: "Book", amount: -10 },
    { id: 785623, text: "Camera", amount: 150 },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  function deleteTransaction(id){
    dispatch({
      type:"DELETE",
      payload: id
    })
  }

  function addTransaction(transaction){
    console.log(`trasaction came from add`);
    console.log(transaction);
    dispatch({
      type:"ADD",
      payload: transaction
    })
  }
  return (
    <GlobalContext.Provider value={{
      transactions:state.transactions,
      deleteTransaction,
      addTransaction,
      lastindex:(state.transactions.length - 1 >= 0)?state.transactions[0].id:0
    }}>
      {children}
    </GlobalContext.Provider>
  );
};
