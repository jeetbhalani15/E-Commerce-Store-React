import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { wishlistReducer } from "../Reducers";
import { useAuth } from "./Auth-context";


const wishlistContext = createContext();

const WishlistProvider = ({children})=>{

    const {authState} = useAuth();
    const navigate = useNavigate();
    const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer,{
        wishlistItems: []
    })
    // ADD_TO_WISHLIST FUNCTION
    const addToWishlist = async (product) => {
        if (authState.token) {
          try {
            const res = await axios.post(
              "/api/user/wishlist",
              { product },
              { headers: { authorization: authState.token } }
            );
            wishlistDispatch({
              type: "ADD_TO_WISHLIST",
              payload: res.data.wishlist,
            });
            console.log(res.data.wishlist);
          } catch (error) {
            alert(error);
            console.log(product);
          }
        } else {
          navigate("/login");
        }
      };
    // REMOVE_FROM_WISHLIST FUNCTION
    const removeFromWishList = async (item) => {
        console.log("remove card id", item._id, item.Name, item);
        try {
          const res = await axios.delete(`/api/user/wishlist/${item._id}`, {
            headers: { authorization: authState.token },
          });
          wishlistDispatch({
            type: "REMOVE_FROM_WISHLIST",
            payload: res.data.wishlist,
          });
          console.log("done");
        } catch (error) {
          alert(error);
        }
      };   
    return(
      <wishlistContext.Provider value={{wishlistState,wishlistDispatch, addToWishlist, removeFromWishList}}>
          {children}
      </wishlistContext.Provider>
    );
}

const useWishlist = ()=> useContext(wishlistContext);
export {WishlistProvider, useWishlist};