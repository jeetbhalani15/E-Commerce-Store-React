import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { wishlistReducer } from "../Reducers";
import { useAuth } from "./Auth-context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
            toast.success(' Added to Wishlist ', {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark"
              });
          } catch (error) {
            toast.error(' Something went Wrong! Please Wait!!', {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
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
          toast.success(' Removed From Wishlist', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
            });
        } catch (error) {
          toast.error(' Something went Wrong! Please Wait!!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }
      };   
    return(
      <wishlistContext.Provider value={{wishlistState,wishlistDispatch, addToWishlist, removeFromWishList}}>
          {children}
          <ToastContainer/>
      </wishlistContext.Provider>
    );
}

const useWishlist = ()=> useContext(wishlistContext);
export {WishlistProvider, useWishlist};