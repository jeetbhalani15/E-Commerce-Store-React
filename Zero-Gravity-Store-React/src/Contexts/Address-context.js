import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { AddressReducer } from "../Reducers/AddressReducer";
import { getAddressHandler } from "../utils/AddressHandler";
import { useAuth } from "./Auth-context";



const AddressContext = createContext();
const useAddress = () => useContext(AddressContext);

const initialValue = {
    address : [],
}

const dummyAddress = {
    name: "varun Singha",
    street: "B-201, crystal road, alpha apartments ",
    city: "Ludhiyana",
    state: "Punjab",
    country: "India",
    zipCode: "207814",
    mobile: "6355643681",
}

const initialAddr = {name : "", street : "", city : "", state : "", country : "", zipCode : "", mobile : ""}



const AddressProvider = ({ children }) => {

    const [addressState, addressDispatch] = useReducer(AddressReducer ,initialValue);

    const initialItem = addressState.address[0];
    const [currentAddress, setCurrentAddress] = useState(initialItem);
    const [addressData, setAddressData] = useState(initialAddr);

    const { getToken } = useAuth();

    useEffect(() => {
        getAddressHandler(getToken, addressDispatch);
    }, []);


    return (
        <AddressContext.Provider 
        value={{
            addressState, 
            addressDispatch, 
            dummyAddress, 
            currentAddress, 
            setCurrentAddress, 
            addressData, 
            setAddressData}}>

            { children }
        </AddressContext.Provider>
    )
}

export { useAddress, AddressProvider };