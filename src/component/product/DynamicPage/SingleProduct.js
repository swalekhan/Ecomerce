
import { useParams } from "react-router-dom";


const SingleProduct = () => {
    const param = useParams()
    console.log(param)
  return (
    <>
    <div style={{width:"45%",height:"500px", backgroundColor:"yellow", margin:"5px 0px 0px 50px", float:"left"}}>
      <h1>MorePhoto of Product Id {param.id}</h1>
    </div>
    <div style={{width:"45%",height:"500px", backgroundColor:"red", margin:"5px 0px 0px 50px" , float:"left"}}>
      <h2>Review of {param.id}</h2>
    </div>
    </>
  )
}

export default SingleProduct;