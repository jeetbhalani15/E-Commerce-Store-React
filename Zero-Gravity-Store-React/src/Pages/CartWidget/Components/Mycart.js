import { Footer } from "../../../Components/Footer/Footer";
import { Navigation } from "../../../Components/Navigation/Navigation";
import { CartProducts } from "./CartProducts";
import "./Mycart.css";

export function MyCart() {
  return (
    <>
      <div className="big-wrapper dark">
        <Navigation />

        <main>
          <div className="my-cart">
            <div className="cart-content">
              <h1 className="font-size">My Cart</h1>
              <CartProducts />
            </div>
            <div className="cart-summary-content">
              <div className="cart-summary">
                <div className="cart-summary-header">
                  <h1>Games and Apps Summary</h1>
                </div>
                <div className="cart-elements">
                  <div className="cart-items">
                    <div className="cart-price">
                      <span>Price</span>
                    </div>
                    <div className="cart-price-value">
                      <span>₹939.00</span>
                    </div>
                  </div>
                  <div className="cart-items">
                    <div className="cart-coupon">
                      <span>Coupon Discount</span>
                    </div>
                    <div className="cart-coupon-value">
                      <span>₹750.00</span>
                    </div>
                  </div>
                  <div className="cart-items">
                    <div className="cart-tax">
                      <span>Taxes</span>
                    </div>
                    <div className="cart-tax-value">
                      <span className="tax-color">Calculated at Checkout</span>
                    </div>
                  </div>
                  <hr />
                  <div className="cart-items">
                    <div className="cart-subtotal">
                      <span>Subtotal</span>
                    </div>
                    <div className="cart-subtotal-value">
                      <span className="tax">₹3,188.00</span>
                    </div>
                  </div>
                  <div className="cart-btn">
                    <button className="cart-btn">CHECK OUT</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
