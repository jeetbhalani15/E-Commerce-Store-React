import { Footer } from "../../../Components/Footer/Footer";
import { Navigation } from "../../../Components/Navigation/Navigation";
import { useAuth } from "../../../Contexts/Auth-context";
import { useCart } from "../../../Contexts/Cart-context";
import { CartInvoice } from "./Cart-Invoice";
import { Link } from "react-router-dom";
import { CartProducts } from "./CartProducts";
import cartempty from "../../../Asserts/Images/cart-empty-removebg-preview.png"
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
            <img className="empty-cart-img" src={cartempty} alt="image" />
            {authState.token 
              ? (
              <>
                <button class="cart-btn">
                  <Link to="/productListing">Shop Now</Link>
                </button>
              </>
            ) : (
              <>
                <h1 className="txt-empty-cart">Login to see the items in cart</h1>
                <button class="cart-btn">
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
