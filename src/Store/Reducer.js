

const reducer = (state, action) => {

    if(action.type === "replace"){ // fetching data is this
        return{
            items:action.data && action.data.cardState && action.data.cardState.items ?action.data.cardState.items:[],
            totalAmount:action.data && action.data.cardState?action.data.cardState.totalAmount:0,
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

export default reducer;