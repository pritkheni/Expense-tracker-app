import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from 'axios'

axios.defaults.baseURL = `http://localhost:3000`
//Initial State
const initialState = {
  transactions: [],
  error:null,
  loading:true
};


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  async function deleteTransaction(id){
    try{
    const res = await axios.delete(`/api/v1/trasactions/${id}`)
    dispatch({
      type:"DELETE",
      payload: res.data.data.id
    })
    }catch(err){
      console.log(err);
        dispatch({
          type:'ERROR',
          payload:err.response.data.error
        })
    }

  }
  useEffect(() => {
    console.log(`request going to fetch`);
    const controller = new AbortController();
    async function getTrasactions(){
      try{
        const res = await axios.get('/api/v1/trasactions',{
            signal: controller.signal
        })
        console.log(res.data);
        dispatch({
          type:'GET_TRASACTIONS',
          payload:res.data.data
        })
      }catch(err){
        console.log(err);
        console.log(err.response);
        dispatch({
          type:'ERROR',
          payload:err.response.data.error
        })
      }
    }
    getTrasactions();
    return ()=>{ controller.abort(); }
  },[])
   

  async function addTransaction(transaction){
    const config = {
      headers:{
        'Content-Type':'application/json'
      }
    }
    const res = await axios.post(`/api/v1/trasactions/`,transaction,config)
    console.log(res.data.data);
    dispatch({
      type:"ADD",
      payload: res.data.data
    })
  }
  return (
    <GlobalContext.Provider value={{
      transactions:state.transactions,
      error:state.error,
      loading:state.loading,
      deleteTransaction,
      addTransaction,
      lastindex:(state.transactions.length - 1 >= 0)?state.transactions[0].id:0
    }}>
      {children}
    </GlobalContext.Provider>
  );
};
