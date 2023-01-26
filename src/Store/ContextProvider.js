import React, { useEffect, useReducer, useState } from "react";
import Context from "./Context";
import reducer from "./Reducer";
import { putRequest } from "./HttpsRequest";
import { fetchData } from "./HttpsRequest";
const intial = {
    items: [],
    totalAmount: 0,
}

let putRequestItialValue = true; // prevent very first rendring...
const ContextProvider = (props) => {
    const localStorageToken = localStorage.getItem("token")
    const [token, setToken] = useState(localStorageToken)
    const [cardState, dispatch] = useReducer(reducer, intial)
   
    const addItemHandler = (item) => {
        dispatch({ type: "add", item: item })
    }
    
    const removeItemHandler = (id) => {
        dispatch({ type: "remove", id: id })
    }

    // ............. Token ................................
    const addTokenHandler = (email) => { // token is a email.
        setToken(email)
        localStorage.setItem("token", email)
    }
    const removeTokenhandler = (emptyToken) => {
        setToken(emptyToken)
        localStorage.removeItem("token")
    }


// .........fetch data on load......;
    useEffect(() => {   
        fetchData(token, dispatch) 
    }, [token])

// .............putdata.........;
useEffect(()=>{ 
    if(putRequestItialValue){     // to prevent very first call;
       putRequestItialValue = false;
       return;
    }
    putRequest(cardState, token);
  },[cardState,token])


    const values = {
        token: token,
        isTokenTrue: !!token,
        addToken: addTokenHandler,
        removeToken: removeTokenhandler,
        //  .........
        items: cardState.items,
        totalAmount: cardState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    return (
        <Context.Provider value={values}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;