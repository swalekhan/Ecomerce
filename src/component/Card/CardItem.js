import React from "react";
import { Stack } from "react-bootstrap";





    const CradItem = (props) => {
       return (
        <>
        <li style={{margin:"10px", listStyle:"none"}} >
         <Stack  direction="horizontal" className="m-3px" gap={3}>
            <div><img width="80px" src={props.item} alt="pic"/></div>
            <div>{props.price}</div>
            <div>{props.quantity}</div>  
         </Stack>
         <hr/>
         </li>

        </>
       )
    }
    export default CradItem;
