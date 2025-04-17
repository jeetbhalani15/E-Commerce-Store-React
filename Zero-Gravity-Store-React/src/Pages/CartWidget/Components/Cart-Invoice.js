import { Link } from "react-router-dom";
import { useCart } from "../../../Contexts/Cart-context";

export const CartInvoice = () => {
  const { cartState } = useCart();

  // Total no of products in cart

  const itemsInCart = (pre, crr) => pre + crr.quantity;
  const totalItemsInCart = cartState.cartProducts.reduce(itemsInCart, 0);

  // Total Amount in the Cart

  const cartAmount = (pre, crr) => pre + crr.quantity * crr.Price;
  const totalCartAmount = cartState.cartProducts.reduce(cartAmount, 0);

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Coupon Discount
  const couponPrice = 750;
  const discountedTotalCartAmount = totalCartAmount >= 999 
    ? totalCartAmount - couponPrice 
    : totalCartAmount;

  const summaryItems = [
    {
      label: "Price",
      value: formatPrice(totalCartAmount),
      icon: "fa-tag"
    },
    {
      label: "Coupon Discount",
      value: `- ${formatPrice(couponPrice)}`,
      icon: "fa-ticket",
      highlight: true
    },
    {
      label: "Taxes",
      value: "Calculated at Checkout",
      icon: "fa-receipt",
      isInfo: true
    }
  ];

  return (
    <div className="cart-summary-content">
      <div className="cart-summary">
        <div className="cart-summary-header">
          <div className="summary-title">
            <i className="fa fa-shopping-cart"></i>
            <h2>Order Summary</h2>
          </div>
          <div className="items-badge">
            <span>{totalItemsInCart}</span>
            <small> item</small>
          </div>
        </div>

        <div className="cart-elements">
          {summaryItems.map((item, index) => (
            <div key={index} className="summary-item">
              <div className="summary-item-label">
                <i className={`fa ${item.icon}`}></i>
                <span>{item.label}</span>
              </div>
              <div className={`summary-item-value ${item.highlight ? 'highlight' : ''} ${item.isInfo ? 'info' : ''}`}>
                {item.value}
              </div>
            </div>
          ))}

          <div className="summary-divider">
            <span>Final Price</span>
          </div>

          <div className="summary-item total">
            <div className="summary-item-label">
              <i className="fa fa-wallet"></i>
              <span>Total Amount</span>
            </div>
            <div className="summary-item-value highlight">
              {formatPrice(discountedTotalCartAmount)}
            </div>
          </div>

          <div className="cart-actions">
            <Link to="/checkout" className="checkout-button">
              <i className="fa fa-lock"></i>
              <span>Secure Checkout</span>
            </Link>
            <div className="secure-info">
              <i className="fa fa-shield-alt"></i>
              <span>Secure payment & data encryption</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
