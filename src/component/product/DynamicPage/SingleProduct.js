
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Context from "../../../Store/Context";

const cartElements = [
  {
      id:1,
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 1,
  },
  {
      id:2,
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity: 1,
  },
  {
      id:3,
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 1,
  },
  {
      id:4,
      title: 'Blue Color',  
      price: 100,  
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png', 
      quantity: 1 
      },
]

const SingleProduct = () => {
    const param = useParams()
    const abc = useContext(Context)
    useEffect(()=>{
     abc.cardButtonHandler(false)
    },[abc])

    const find = cartElements.find((e)=>e.id === +param.id)
    
    if(!find){
      return (
        <p>no data found</p>
      )
    }
  return (
    <>
    <div style={{ backgroundColor:"yellow", margin:"20px", float:"left"}}>
      <img  height="500px" src={find.imageUrl} alt="pic"/>
    </div>

    <div style={{width:"45%",height:"500px", margin:"20px" , float:"left"}}>
      <h2 style={{textAlign:"center"}}>Product Detail</h2>
      <h5>Name:-{find.title}</h5>
      <h5>Product Id:-{find.id}</h5>
      <h5>price:- ${find.price}</h5>
      <div style={{textAlign:"center",marginTop:"70px"}}>
      <h2>Review</h2>
      <p>No Review Found</p>
     </div>
    </div>
    
    </>
  )
}

export default SingleProduct;