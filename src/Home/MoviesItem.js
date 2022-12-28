import { Stack } from "react-bootstrap";

const MoviesItem = (props) => {
    return (
        <>
        <li style={{margin:"10px", listStyle:"none"}} >
         <Stack  direction="horizontal" className="m-3px" gap={3}>
            {/* <div><img width="80px" src={props.item} alt="pic"/></div> */}
            <div>{props.title}</div>
            <div>{props.openingText}</div>  
            <div>{props.releaseData}</div>  
         </Stack>
         <hr/>
         </li>

        </>
    )
}

export default MoviesItem;