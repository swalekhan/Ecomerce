
import React from "react";

const Context = React.createContext({
        token:null,
         addToken:()=>{},
         removeToken:()=>{},
         alert:false,
         alertHandler:()=>{},
        items: [],
        totalAmount: 0,
        addItem: ()=>{},
        removeItem: ()=>{}
});

export default Context;