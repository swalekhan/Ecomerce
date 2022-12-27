import React from "react";
import Context from "./Context";

const ContextProvider = (props) => {
   return (
    <Context.Provider>
        {props.children}
    </Context.Provider>
   )
}
export default ContextProvider;