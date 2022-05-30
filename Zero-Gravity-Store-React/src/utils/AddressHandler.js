import { toast } from "react-toastify";
import axios from "axios";


export const getAddressHandler = async (token, addressDispatch) => {
  try {
    const res = await axios.get("/api/user/address", { headers: { authorization: token,}, });
    if (res.status === 200) {
      addressDispatch({
        type: "ADDRESS_OPERATIONS",
        payload: res.data.address,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const addAddressHandler = async (
  token,
  address,
  addressDispatch,
) => {
  try {
    const res = await axios.post("/api/user/address",{ address,},{ headers: {authorization: token,},});
    if (res.status === 201) {
      addressDispatch({
        type: "ADDRESS_OPERATIONS",
        payload: res.data.address,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const editAddressHandler = async (
  token,
   _id, 
   address,
   addressDispatch
) => {
  try {
    const res = await axios.post(
        `/api/user/address/${_id}`,
        { address },
        {
          headers: {
            authorization: token,
          },
        }
      );

    if (res.status === 200) {
      addressDispatch({
        type: "ADDRESS_OPERATIONS",
        payload: res.data.address,
      });
    }

  } catch (error) {
    console.log(error);
  }
};

export const deleteAddressHandler = async (
  token,
  _id,
  addressDispatch,
) => {
  try {
    const res = await axios.delete(`/api/user/address/${_id}`, {
        headers: {
          authorization: token,
        },
      });
    if (res.status === 200) {
      addressDispatch({
        type: "ADDRESS_OPERATIONS",
        payload: res.data.address,
      });
    }
  } catch (error) {
    console.log(error);
  }
};