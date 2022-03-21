import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../Reducers/FilterProductReducer";
const filterContext = createContext();

const FilterProvider = ({children})=>{
  const [filters , dispatch]= useReducer(filterReducer,{
      category:{
        ACTION: false,
        ADVENTURE: false,
        STRATEGY: false,
        SIMULATION: false,
        SPORTS: false,
        OPEN_WORLD: false,
        FIRST_PERSON: false,
      },
      searchQuery:"",
      price: "5000",
      ratings: null,
      sortBy: "",
  });
 
  return(
      <filterContext.Provider value={{
          filters,
          dispatch,
          }}
          >
          {children}
      </filterContext.Provider>
  );
};

const useFliters = ()=> useContext(filterContext);
export {useFliters,FilterProvider};