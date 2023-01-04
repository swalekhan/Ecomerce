import React, { useContext } from "react";
import { Button, Stack } from "react-bootstrap";
import Context from "../../Store/Context";




const CradItem = (props) => {
    const abc = useContext(Context)
    

    const removeHandler = async (e) => {
        // let li = e.target.parentElement;
        // li.remove()

         abc.removeItem(props.uniqueId); // this unique id we assign while post  

        let removeDotEmail = abc.token.replace(/[^a-z0-9]/gi)
        try {
            const response = await fetch(`${abc.url}/${removeDotEmail}/`+props.id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            // const data = response.json;
            console.log(response)
        } catch (err) {
            console.log(err)
        }
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
                    <Button style={style} onClick={removeHandler}>remove</Button>
                </Stack>
                <hr />
            </li>
        </>
    )
}
export default CradItem;
