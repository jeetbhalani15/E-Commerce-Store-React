export const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case "SEARCH":
      return { ...state, searchQuery: payload };
    case "PRICE":
      return { ...state, price: payload };
    case "RATINGS":
      return { ...state, ratings: payload };
    case "SORT":
      return { ...state, sortBy: payload };
    case "CATEGORY":
      return {
        ...state,
        category: {
          ...state.category,
          [payload]: !state.category[payload],
        },
      };
    case "RESET":
      return {
        category: {
          ACTION: false,
          ADVENTURE: false,
          STRATEGY: false,
          SIMULATION: false,
          SPORTS: false,
          OPEN_WORLD: false,
          FIRST_PERSON: false,
        },
        searchQuery: "",
        price: "5000",
        ratings: 0,
      };
    default:
      throw new Error("something is Wrong");
  }
};
