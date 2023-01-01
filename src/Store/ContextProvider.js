import React, { useReducer, useState } from "react";
import Context from "./Context";


const intial = {
    items: [],
    totalAmount: 0
}

const reducer = (state, action) => {
    if (action.type === "add") {
        let updatedItem = action.item
        let updatedTotalAmount =  action.item.reduce((curValue, value)=>{return curValue+value.price},0)
        return {
            items: updatedItem,
            totalAmount:updatedTotalAmount
        }
    }
}



const ContextProvider = (props) => {
    const localStorageToken = localStorage.getItem("token")
    const [token, setToken] = useState(localStorageToken)
    const [cardState, dispatch] = useReducer(reducer, intial)
    const [cardButton, setCardButton] = useState(false)
    // console.log("token", token)

    const addItemHandler = (item) => {
        dispatch({ type: "add", item: item })
    }

    const removeItemHandler = (id) => {
        dispatch({ type: "remove", id: id })
    }

// ............. Token ................................
    const addTokenHandler = (newToken) => {
        setToken(newToken)
        localStorage.setItem("token", newToken)
    }
    const removeTokenhandler = () => {
        localStorage.removeItem("token")
    }
// ....................card button ..................
 const cardButtonHandler = (a) =>{
       setCardButton(a)
 }
 
    console.log("items", cardState)

    const values = {
        cardButton:cardButton,
        cardButtonHandler:cardButtonHandler,
        // .........
        token: token,
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