import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useOrder } from "../../Contexts/Orders-context";
import { useCart } from "../../Contexts/Cart-context";
import { useAuth } from "../../Contexts/Auth-context";
import { useAddress } from "../../Contexts/Address-context";
import "./Checkout.css";
import { AddressModal } from "../../Components/AddressModal/AddressModal";
import { Navigation } from "../../Components/Navigation/Navigation";
import { Footer } from "../../Components/Footer/Footer";

export const CheckOutPage = () => {

    const [showModal, setShowModal] = useState(false);
    const { addressState, currentAddress, setCurrentAddress } = useAddress();
    const { cartState, cartDispatch } = useCart();
    const { orderDispatch } = useOrder();
    const { authState } = useAuth();
    const navigate = useNavigate();
    const token = authState.token;
    const newDate = new Date();
    console.log(cartState.cartProducts)

    // Total no of products in cart

    const itemsInCart = (pre,crr)=> pre + crr.quantity;
    const totalItemsInCart = cartState?.cartProducts?.reduce(itemsInCart,0);

    // Total Amount in the Cart 

    const cartAmount = (pre,crr)=> pre + (crr.quantity * crr.Price);
    const totalCartAmount = cartState?.cartProducts?.reduce(cartAmount,0);

    // Coupon Discount
    let couponPrice = 750
    let discountedTotalCartAmount
    if(totalCartAmount >= 999){
     discountedTotalCartAmount = Number(totalCartAmount) - Number(couponPrice);
     } else discountedTotalCartAmount = totalCartAmount;



    const loadScript = (src) => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = src;
          script.onload = () => {
            resolve(true);
          };
          script.onerror = () => {
            resolve(false);
          };
          document.body.appendChild(script);
        });
      };

    const clearCart = async () => {
        cartState.cartProducts.forEach(item => {
            axios.delete(`/api/user/cart/${item._id}`, {
                headers: {
                  authorization: token,
                },
              })
        })

        // cartDispatch({type : "CLEAR_CART"});
        navigate("/profile/order");


    }


    const displayPaymentHandler = async () => {
        const res = await loadScript(
          "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
          alert("Razorpay SDK failed to load. Are you online?");
          return;
        }

        const options = {
          key: "rzp_test_9PSdycaaux1Lfy", // Enter the Key ID generated from the Dashboard
          amount: discountedTotalCartAmount * 100,
          name: "0'Gravity Store",
          description: "Thanks from shopping, have a good day!",
          handler: function (response) {
            orderDispatch({
              type: "COMPLETE_ORDER",
              payload: {
                order: {
                  orderData: cartState.cartProducts,
                  paymentId: response.razorpay_payment_id,
                  price : totalCartAmount,
                  totalAmount: discountedTotalCartAmount,
                  address: currentAddress,
                  date : newDate.toDateString(),
                },
              },
            });
            clearCart();
            //DAEqeSNkEPvdiJwgXMunMLdp
          },
          prefill: {
            name: "Madanlal Mithaivala",
            email: "madanlal@gmail.com",
            contact: "6355643681",
          },
          theme: {
            color: "#528FF0",
          },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      };


    return (
        <>
        { showModal &&<AddressModal setShowModal={setShowModal}/>}
        <div className="big-wrapper dark">
      <Navigation />
      <main className="checkout-main">
            <h1 className="check-head">Checkout</h1>
            <div className="checkout">
            <div className="checkout-price-container">
                <section className="addre-sec">
                    {
                        addressState?.address.map(item => (
                            <div key={item._id} className="addre-detail">
                                <input onClick={() => setCurrentAddress(item)}
                                checked = {item._id === currentAddress?._id ? true : false}
                                className="select-addr" type="radio" name="addr" id="addr" />
                                <div className="addr">
                                    <p className="addr-name">{item.name}</p>
                                    <p>{item.street}, {item.city}, {item.state},</p>
                                    <p>{item.country}, {item.zipCode}</p>
                                    <p>{item.mobile}</p>
                                </div>
                            </div>
                        ))
                    }

                    <p onClick={() => setShowModal(true)} className="add-addr"><span>+</span> Add New Address</p>
                </section>

                <section className="checkout-bill-sec">
                    <div>
                        <p className="order">ORDER DETAILS</p>
                        <div className="check-items bolder-text">
                            <span className="">Item</span>
                            <span className="">Price</span>
                        </div>
                        {
                            cartState.cartProducts.length !== 0
                            ?
                            <>
                                {
                                    cartState.cartProducts.map(item => (
                                        <div key={item._id} className="check-items">
                                            <span className=""> {item?.Name} ({item?.quantity})</span>
                                            <span className="">Rs{item?.Price}</span>
                                        </div>
                                    ))
                                }
                            </>
                            :
                            <h3 className="msg">No items in cart</h3>

                        }

                    </div>

                    <div>
                        <p className="order">PRICE DETAILS</p>
                        <div className="check-items">
                            <span className="">Price ({cartState.cartProducts.length} {cartState.cartProducts.length > 1 ? "items" : "item"})</span>
                            <span className="">Rs. {totalCartAmount}</span>
                        </div>
                        <div className="check-items">
                            <span className="">Discount</span>
                            <span className="">Rs. 750</span>
                        </div>
                        <div className="check-items">
                            <span className="">Delivery</span>
                            <span className="">FREE</span>
                        </div>

                        <div className="check-items bolder-text">
                            <span className="">Total Amount</span>
                            <span className="">Rs.{discountedTotalCartAmount}</span>
                        </div>
                    </div>


                    <div>
                        <p className="order">DELIVERY TO</p>
                        {
                            currentAddress
                            ?
                            <div className="addr">
                                <p className="addr-name">{currentAddress?.name}</p>
                                <p>{currentAddress?.street} , {currentAddress?.city}, {currentAddress?.state},</p>
                                <p>{currentAddress?.country}, {currentAddress?.zipCode}</p>
                            </div>
                            :
                            <h3 className="msg">Please Select Address</h3>

                        }

                    </div>


                    <button onClick={displayPaymentHandler} className="check-btn" disabled={currentAddress ? false : true}>PLACE ORDER</button>
                </section>
            </div>
            </div>
        </main>
      <Footer />
    </div>
       
        </>
    )
}