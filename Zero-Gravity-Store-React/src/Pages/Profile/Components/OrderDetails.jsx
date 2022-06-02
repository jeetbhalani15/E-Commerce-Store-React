import { useOrder } from "../../../Contexts/Orders-context";


export const OrderDetails = () => {

    const { orderState } = useOrder();

    return (
        <>
            { 
            orderState.orders.length !== 0
                ?
                <>
                    {
                        orderState?.allOrders.map((order => (
                            <div className="order-main-container">
                                <div className="order-decription-wrapper">
                                    <h3 className="order-msg">Order Confirmed</h3>
                                    <p>{order.date}</p>
                                    <p>Payment Id:- {order?.paymentId}</p>
                                    <p>order Id:- # 406-8023664-0008361</p>
                                    {
                                        order?.orderData.map( (item) => (
                                            <div key={item._id} className="order-img-container">
                                                <div className="order-img-parent">
                                                    <img className="order-img" src={item.img} alt="img" />
                                                </div>
                                                <div className="product-det">
                                                    <p className="prod-name">{item.title}</p>
                                                    <p>Rs. {item.Price}</p>
                                                    <p>Qty : {item.quantity}</p>
                                                </div>
                                            </div>
                                        )
                                        )
                                    }

                                    <div className="order-det-addr">
                                            <h3>Delivery Address</h3>
                                            <div  className="addr mrbot">
                                                <p className="addr-name">{order?.address?.name}</p>
                                                <p>{order?.address?.street} , {order?.address?.city}, {order?.address?.state}</p>
                                                <p>{order?.address?.country}, {order?.address?.zipCode}</p>
                                            </div>
                                    </div>

                                    <div className="order-det-addr">
                                            <h3>Price Detials</h3>
                                            <div className="check-items">
                                                <span className="">Price </span>
                                                <span className="">Rs. {order?.price}</span>
                                            </div>
                                            <div className="check-items">
                                                <span className="">Discount</span>
                                                <span className="">Rs. 750</span>
                                            </div>
                                            <div className="check-items bolder-text">
                                                <span className="">Total Amount</span>
                                                <span className="">Rs. {order?.totalAmount}</span>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        )))

                    }
                </>
                :
                <h3>No orders found</h3>
            }   

        </>
    )
}