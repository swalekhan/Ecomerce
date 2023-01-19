import React, { useContext } from "react";
import { Button, Stack } from "react-bootstrap";
import Context from "../../Store/Context";




const CradItem = (props) => {
    const abc = useContext(Context)
    

    const removeHandler = async (e) => {

         abc.removeItem(props.uniqueId); // this unique id we assign while post  
    }

   const addProducHandler = () =>{
    abc.addItem({
        id: props.uniqueId,
        price: props.price,
        title: props.title,
        imageUrl: props.imageUrl,
        quantity: 1,
    })
   }

    const style ={
        border:"2px solid  rgb(248, 106, 106)",
        backgroundColor:"rgb(248, 106, 106)",
        color:"white",
        textAlign: "center"
     }

    return (
        <>
            <li style={{ margin: "10px", listStyle: "none" }} >
                <Stack direction="horizontal" className="m-3px" gap={3}>
                    <div><img width="80px" src={props.item} alt="pic" /></div>
                    <div>{props.price}</div>
                    <div>{props.quantity}</div>
                    <Button style={style} onClick={removeHandler}>-</Button>
                    <Button style={style} onClick={addProducHandler}>+</Button>
                </Stack>
                <hr />
            </li>
        </>
    )
}
export default CradItem;
