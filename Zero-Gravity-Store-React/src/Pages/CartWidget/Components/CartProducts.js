import { useCart } from "../../../Contexts/Cart-context";
import { useAuth } from "../../../Contexts/Auth-context";
import { useWishlist } from "../../../Contexts/Wishlist-context";
import { showSuccessToast } from "../../../utils/toastUtils";

export function CartProducts({ product }) {
  const { cartDispatch, removeFromCart } = useCart();
  const { authState } = useAuth();
  const { addToWishlist } = useWishlist();

  const handleMoveToWishlist = () => {
    addToWishlist(product);
    showSuccessToast("Item moved to wishlist!");
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product);
    showSuccessToast("Item removed from cart!");
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={product.img} alt={product.Name} />
        <div className="item-badge">New Release</div>
      </div>

      <div className="cart-item-details">
        <div className="item-header">
          <span className="item-category">Base Game</span>
          <h2>{product.Name}</h2>
          <p>{product.info}</p>
        </div>
        <div className="item-price">
          <div className="price-details">
            <span className="discount">-50%</span>
            <span className="original">₹2,999</span>
            <span className="final">{product.Price}</span>
          </div>

          <div className="quantity">
            <span>Qty:</span>
            <div className="quantity-control">
              <button
                onClick={() =>
                  cartDispatch({
                    type: "DECREMENT_QUANTITY",
                    payload: product,
                  })
                }
                disabled={product.quantity <= 1}
              >
                -
              </button>
              <span>{product.quantity}</span>
              <button
                onClick={() =>
                  cartDispatch({
                    type: "INCREMENT_QUANTITY",
                    payload: product,
                  })
                }
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="item-footer">
          <small>Sale ends 5/10/2025 at 9:30 PM</small>
          <div className="item-actions">
            <button onClick={handleMoveToWishlist} className="btn-wishlist">
              Move to Wishlist
            </button>
            <button onClick={handleRemoveFromCart} className="btn-remove">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
