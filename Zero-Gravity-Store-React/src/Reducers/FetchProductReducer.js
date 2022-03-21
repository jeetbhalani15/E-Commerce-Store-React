export const FetchProductReducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCHING_PRODUCTS":
      return {
        ...state,
        Loading: true,
        Error: "",
      };
    case "ON_SUCCESS":
      return {
        ...state,
        productData: payload,
        Loading: false,
      };
    case "ON_FAILURE":
      return {
        ...state,
        Error: payload,
        Loading: false,
      };

    default:
      throw new Error("Something Wrong At Our End!!");
  }
};
