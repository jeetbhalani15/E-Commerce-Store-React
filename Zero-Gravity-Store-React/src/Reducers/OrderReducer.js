export const orderReducer = (state, action) => {
    switch (action.type) {
        case "COMPLETE_ORDER":
            return {...state, orders : action.payload.order, allOrders : state.allOrders.concat(action.payload.order)}

        default:
            state;
    }
}