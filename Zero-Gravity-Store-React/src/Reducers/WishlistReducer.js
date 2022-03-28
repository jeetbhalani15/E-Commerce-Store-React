export const wishlistReducer = (state,{type,payload})=>{
    switch (type) {
        case "ADD_TO_WISHLIST":
            return {...state,   wishlistItems : [...payload]};
        case "REMOVE_FROM_WISHLIST": 
        // const removeFromWishlist = state.wishlistItems.filter((item)=> item._id !== payload._id)
            return {...state,   wishlistItems : [...payload] };
        
    
        default:
          return  {...state};
    }
}