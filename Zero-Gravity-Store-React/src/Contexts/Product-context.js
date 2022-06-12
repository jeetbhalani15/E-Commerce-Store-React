import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { FetchProductReducer } from "../Reducers";
import { Loader } from "../Components/Loader/Loader";

const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [{ productData, Loading, Error }, dispatch] = useReducer(
    FetchProductReducer,
    {
      productData: [],
      Loading: true,
      Error: null,
    }
  );


  //useeefect for fetch products
  useEffect(() => {
    fetchProductsData();
  }, []);


  //fetch products   
  const fetchProductsData = async () => {
    dispatch({ type: "FETCHING_PRODUCTS" });
    try {
      const { data } = await axios.get("/api/products");
      dispatch({ type: "ON_SUCCESS", payload: [...data.products] });
    } catch {
      dispatch({
        type: "ON_FAILURE",
        payload: "Something Wrong At Our End ❗❗",
      });
    }
  };

  return (
    <productContext.Provider
      value={{
        productData,
        Loading,
        Error,
        dispatch,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

const useProduct = () => useContext(productContext);
export { useProduct, ProductProvider };
