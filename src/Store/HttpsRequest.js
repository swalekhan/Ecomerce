
export const putRequest = async(cardState, token) =>{
    const putRes = await fetch(`https://ecommerce-74080-default-rtdb.firebaseio.com/${token}.json`,{
        method:"PUT",
        body:JSON.stringify({cardState,}),
    })
    const data = await putRes.json()
    console.log("put",data)
 }  
 

 export const fetchData = async(token, dispatch) =>{
    try {
        const response = await fetch(`https://ecommerce-74080-default-rtdb.firebaseio.com/${token}.json`)

        const data = await response.json()
        dispatch({type:"replace",data:data})
        //  console.log("fetch",data)
    } catch (err) {
        // console.log(err)
        alert(err.message)
    }
}     
 