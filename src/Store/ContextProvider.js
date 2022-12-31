import React, { useReducer, useState } from "react";
import Context from "./Context";


const intial = {
    items: [],
    totalAmount: 0
}

const reducer = (state, action) => {
    if (action.type === "add") {
        let updatedItem = state.items.concat(action.item)
        let updatedTotalAmount =  state.totalAmount + action.item.quantity * action.item.price
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


    const addItemHandler = (item) => {
        console.log(cardState.totalAmount)
        dispatch({ type: "add", item: item })
    }

    const removeItemHandler = (id) => {
        dispatch({ type: "remove", id: id })
    }

    const addTokenHandler = (newToken) => {
        setToken(newToken)
        localStorage.setItem("token", newToken)
    }
    const removeTokenhandler = () => {
        localStorage.removeItem("token")
    }

    const values = {
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