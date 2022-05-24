export const cartReducer = (state,{type,payload})=>{
    switch (type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartProducts:[...state.cartProducts,{...payload, quantity: 1}]
                }
        case "REMOVE_FROM_CART":
            const removeCartItem = state.cartProducts.filter((item)=> item._id !== payload._id)
            return {
                ...state,
                cartProducts: removeCartItem 
            }        
        case "INCREMENT_QUANTITY":
            return {
                ...state,
                cartProducts: state.cartProducts.map((item)=>item._id === payload._id ? {...item, quantity : item.quantity + 1}: item)
            }    
        case "DECREMENT_QUANTITY":
            return {
                ...state,
                cartProducts: state.cartProducts.map((item)=>item._id === payload._id ? {...item, quantity : item.quantity - 1}: item)
            }   
        
        default:
            return{...state};
    }
}