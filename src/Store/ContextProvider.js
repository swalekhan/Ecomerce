import React, { useReducer } from "react";
import Context from "./Context";


const intial = {
    items: [],
    totalItems: 0,
}

const reducer = (state,action) =>{
    if(action.type==="add"){
        let updatedItem = state.items.concat(action.item)
        let updatedTotalItem = state.totalItems + action.item.quantity
        return {
            items:updatedItem,
            totalItems:updatedTotalItem
        }
    }
}

const ContextProvider = (props) => {

    const [state, dispatch] = useReducer(reducer, intial)

     const addItemHandler = (item) =>{
       dispatch({type:"add", item:item})
       console.log("add",state.totalItems)
     }

     const removeItemHandler = (id) => {
        dispatch({type:"remove", id:id})
     }

    const values = {
     items: state.items,
     totalItems: state.totalItems,
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