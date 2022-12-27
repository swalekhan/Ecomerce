import React, { useReducer } from "react";
import Context from "./Context";


const intial = {
    items: [],
    totalItems: 0,
}

const reducer = (state,action) =>{
    if(action.type==="add"){
        let updatedItem = state.items.concat(action.item)
        let updatedTotalAmount = state.totalItems + action.item.quantity * action.item.price
        return {
            items:updatedItem,
            totalAmount:updatedTotalAmount
        }
    }
}

const ContextProvider = (props) => {

    const [state, dispatch] = useReducer(reducer, intial)

     const addItemHandler = (item) =>{
        console.log(state.totalAmount)
       dispatch({type:"add", item:item})
     }

     const removeItemHandler = (id) => {
        dispatch({type:"remove", id:id})
     }

    const values = {
     items: state.items,
     totalAmount: state.totalAmount,
     addItem:addItemHandler,
     removeItem:removeItemHandler
    }
    return (
        <Context.Provider value={values}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;