import { Footer } from "../../../Components/Footer/Footer";
import { Navigation } from "../../../Components/Navigation/Navigation";
import { useAuth } from "../../../Contexts/Auth-context";
import { useCart } from "../../../Contexts/Cart-context";
import { CartInvoice } from "./Cart-Invoice";
import { Link } from "react-router-dom";
import { CartProducts } from "./CartProducts";
import "./Mycart.css";

export function MyCart() {
  const { cartState } = useCart();
  const {authState} = useAuth();

  return (
    <>
      <div className="big-wrapper dark">
        <Navigation />

        {cartState.cartProducts.length !== 0 ? (
          <main>
            <div className="my-cart">
              <div className="cart-content">
                <h1 className="font-size">My Cart</h1>
                {cartState.cartProducts.map((product) => {
                  return <CartProducts key={product._id} product={product} />;
                })}
              </div>
              <CartInvoice />
            </div>
          </main>
        ) : (
          <div className="empty-cart">
            {/* <img className="empty-cart-img" src={emptyCart} alt="image" /> */}
            {authState.token 
              ? (
              <>
                <h1>Your cart is empty!</h1>
                <button class="btn btn-primary cart-btn pd-left">
                  <Link to="/productListing">Shop Now</Link>
                </button>
              </>
            ) : (
              <>
                <h1>Login to see the items in cart</h1>
                <button class="btn btn-primary cart-btn pd-left">
                  <Link to="/login">Login Now</Link>
                </button>
              </>
            )}
          </div>
        )}

        <Footer />
      </div>
    </>
  );
}
