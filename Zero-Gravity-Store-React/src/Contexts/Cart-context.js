import axios from "axios";
import {createContext, useContext, useReducer} from "react";
import { useNavigate } from "react-router-dom";
import { cartReducer } from "../Reducers";
import { useAuth } from "./Auth-context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          try {
            console.log("try");
            const cartItems = await axios.post(
              "/api/user/cart",
              { cart: item },
              { headers: { authorization: authState.token } }
            );
            cartDispatch({ type: "ADD_TO_CART", payload: item });
            toast.success(' Add to Cart Successfully!!', {
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
            toast.error(' Something went Wrong!!', {
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

    //   REMOVE_FORM_CART FUNTION
    const removeFromCart = async (item) => {
        if (authState.token) {
          try {
            const res = await axios.delete(`/api/user/cart/${item._id}`, {
              headers: { authorization: authState.token },
            });
            cartDispatch({ type: "REMOVE_FROM_CART", payload: item });
            toast.success(' Remove From Cart Successfully!!', {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
          } catch (error) {
            toast.error(' Something went Wrong!!', {
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


   return (
       <CartContext.Provider value={{ cartState, cartDispatch, addToCart , removeFromCart }}>
           {children}
           <ToastContainer/>
       </CartContext.Provider>
   );
 }

 const useCart = ()=> useContext(CartContext);
 export {CartProvider , useCart};