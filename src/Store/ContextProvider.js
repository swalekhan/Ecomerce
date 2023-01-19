import React, { useEffect, useReducer, useState } from "react";
import Context from "./Context";


const intial = {
    items: [],
    totalAmount: 0,
}

const reducer = (state, action) => {

    if(action.type === "replace"){ // fetching data is this
        return{
            items:action.data.cardState.items?action.data.cardState.items:[],
            totalAmount:action.data.cardState.totalAmount?action.data.cardState.totalAmount:0,
        }

    }
    if (action.type === "add") {
        let updatedTotalAmount = state.totalAmount + action.item.price* action.item.quantity;

        let existItemIndex  = state.items.findIndex((e)=>e.id === action.item.id);
        let existItem = state.items[existItemIndex];
        let updatedItems;
        if(existItem){
        let updatedItem = {
            ...existItem,
            quantity: existItem.quantity + action.item.quantity
          }

          updatedItems = [...state.items];
          updatedItems[existItemIndex]  = updatedItem;
        }else{
            updatedItems = state.items.concat(action.item)
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

      if(action.type === "remove"){
        
        let existItemIndex = state.items.findIndex((e)=>e.id === action.id);
        let existItem = state.items[existItemIndex];
        const afterDeletedTotalAmount = state.totalAmount - existItem.price
        let updatedItems;
        if(existItem.quantity === 1){
            updatedItems = state.items.filter((e)=> e.id !== action.id);
        }else{
            const updatedItem = {...existItem,quantity: existItem.quantity -1}
            updatedItems = [...state.items];
            updatedItems[existItemIndex] = updatedItem;
        }
      return {
        items:updatedItems,
        totalAmount:afterDeletedTotalAmount

      }
    }
}


let putRequestItialValue = true;
const ContextProvider = (props) => {
    const localStorageToken = localStorage.getItem("token")
    const [token, setToken] = useState(localStorageToken)
    const [cardState, dispatch] = useReducer(reducer, intial)
    const [cardButton, setCardButton] = useState(false)
    // .........load.............


    // console.log(cardState)
   


    useEffect(() => {
        async function windowLoad() {
            // let removeDotEmail = token.replace(/[^a-z0-9]/gi)
            try {
                const response = await fetch(`https://ecommerce-74080-default-rtdb.firebaseio.com/khan.json`)

                const data = await response.json()
                dispatch({type:"replace",data:data})
                 console.log("fetch",data)
            } catch (err) {
                console.log(err)
            }
        }     
        windowLoad()
    }, [token])

    // ............put request.............
   
    useEffect(()=>{
        const putRequest = async() =>{
           const putRes = await fetch( "https://ecommerce-74080-default-rtdb.firebaseio.com/khan.json",{
               method:"PUT",
               body:JSON.stringify({cardState,}),
           })
           const data = await putRes.json()
           console.log("put",data)
        }  
        if(putRequestItialValue){
           putRequestItialValue = false;
           return;
        }
        putRequest();
      },[cardState])
   

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
    const removeTokenhandler = (emptyToken) => {
        setToken(emptyToken)
        localStorage.removeItem("token")
    }

    
    // ....................card button ..................
    const cardButtonHandler = (a) => {
        setCardButton(a)
    }


    const values = {
        // url:"https://crudcrud.com/api/247935e032764b86896985a666fff818",
        // .........
        cardButton: cardButton,
        cardButtonHandler: cardButtonHandler,
        // .........
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