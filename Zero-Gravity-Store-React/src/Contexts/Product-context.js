import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { FetchProductReducer } from "../Reducers";


const productContext = createContext();
const ProductProvider = ({children})=>{
const [{ productData, Loading, Error }, dispatch] = useReducer(FetchProductReducer,{
        productData: [],
        Loading: true,
        Error: null,
    })

    useEffect(()=>{
        fetchProductsData();
    },[]);
    
const fetchProductsData = async()=>{
        dispatch({type:"FETCHING_PRODUCTS"});
    try{
         const {data} = await axios.get('/api/products');
         console.log(data)
         dispatch({type:"ON_SUCCESS", payload: [...data.products]});
         console.log()
     } 
    catch{
         dispatch({type:"ON_FAILURE", payload: "Something Wrong At Our End ❗❗"})
     }
    };

    return(
       <productContext.Provider value={{
          productData,
          Loading,
          Error,
          dispatch,
   }}>
       {children}
   </productContext.Provider>

);
};

const useProduct = ()=>  useContext(productContext);
export {useProduct, ProductProvider};