import { createContext, useContext, useEffect, useReducer,useState } from "react";
import { ToastContainer } from "react-toastify";
import { AuthReducer } from "../Reducers";



const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(AuthReducer, { token: null });
  const getToken = localStorage.getItem("token");
  const [hideSearch,setHideSearch] = useState(false)
  useEffect(() => {
    authDispatch({type : "CHECK_TOKEN", payload : getToken });
}, [])
  return (
    <AuthContext.Provider value={{ authState, authDispatch,hideSearch }}>
      {children}
      <ToastContainer/>
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
