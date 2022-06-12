import { useCart } from "../../../Contexts/Cart-context";

export const CartInvoice = () => {
  const { cartState } = useCart();

  // Total no of products in cart

  const itemsInCart = (pre, crr) => pre + crr.quantity;
  const totalItemsInCart = cartState.cartProducts.reduce(itemsInCart, 0);

  // Total Amount in the Cart

  const cartAmount = (pre, crr) => pre + crr.quantity * crr.Price;
  const totalCartAmount = cartState.cartProducts.reduce(cartAmount, 0);

  // Coupon Discount
  let couponPrice = 750;
  let discountedTotalCartAmount;
  if (totalCartAmount >= 999) {
    discountedTotalCartAmount = totalCartAmount - couponPrice;
  } else discountedTotalCartAmount = totalCartAmount;

  return (
    <div className="cart-summary-content">
      <div className="cart-summary">
        <div className="cart-summary-header">
          <h1>Games and Apps Summary</h1>
          <span className="quantity-box">{totalItemsInCart}</span>
        </div>
        <div className="cart-elements">
          <div className="cart-items">
            <div className="cart-price">
              <span>Price</span>
            </div>
            <div className="cart-price-value">
              <span>₹{totalCartAmount}.00</span>
            </div>
          </div>
          <div className="cart-items">
            <div className="cart-coupon">
              <span>Coupon Discount</span>
            </div>
            <div className="cart-coupon-value">
              <span>- ₹ 750.00</span>
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
              <span className="tax">₹ {discountedTotalCartAmount}.00</span>
            </div>
          </div>
          <div className="cart-btn">
            <button className="cart-btn">CHECK OUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};
