
import axios from "axios";
import {createContext, useContext, useReducer} from "react";
import { useNavigate } from "react-router-dom";
import { cartReducer } from "../Reducers";
import { useAuth } from "./Auth-context";

// CREATING CART CONTEXT
const CartContext = createContext();
const CartProvider = ({children})=>{
    
    // DEFINING NAVIGATION & AUTHStATE FOR ADD_TO_CART & REMOVE_CART FUNCS

    const navigate = useNavigate();
     const { authState } = useAuth();
     const [cartState, cartDispatch]= useReducer ( cartReducer ,{
         cartProducts:[],
     })

    //  ADD_TO_CART FUNCTIONS
    const addToCart = async (item) => {
        if (authState.token) {
          console.log("if");
          try {
            console.log("try");
            const cartItems = await axios.post(
              "/api/user/cart",
              { cart: item },
              { headers: { authorization: authState.token } }
            );
            cartDispatch({ type: "ADD_TO_CART", payload: item });
          } catch (error) {
            alert(error);
          }
        } else {
          navigate("/login");
        }
      };

    //   REMOVE_FORM_CART FUNTION
    const removeFromCart = async (item) => {
        if (authState.token) {
          try {
            const res = await axios.delete(`/api/user/cart/${item._id}`, {
              headers: { authorization: authState.token },
            });
            cartDispatch({ type: "REMOVE_FROM_CART", payload: item });
            console.log(res);
          } catch (error) {
            alert(error);
          }
        } else {
          navigate("/login");
        }
      };


   return (
       <CartContext.Provider value={{ cartState, cartDispatch, addToCart , removeFromCart }}>
           {children}
       </CartContext.Provider>
   );
 }

 const useCart = ()=> useContext(CartContext);
 export {CartProvider , useCart};