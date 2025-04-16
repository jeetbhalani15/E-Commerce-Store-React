import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Contexts/Auth-context";
import { useCart } from "../../../Contexts/Cart-context";
import { useWishlist } from "../../../Contexts/Wishlist-context";
import wishEmpty from "../../../Asserts/Images/wish-empty3.png";
import "./WishlistProducts.css";

export function WishlistProducts() {
  const { wishlistState, removeFromWishList } = useWishlist();
  const { authState } = useAuth();
  const { cartState, addToCart } = useCart();

  const isInCart = (itemId) => cartState.cartProducts.some(product => product._id === itemId);

  if (!authState.token) {
    return (
      <div className="wishlist-container">
        <div className="wishlist-empty">
          <img src={wishEmpty} alt="Empty wishlist" className="empty-state-image" />
          <h2 className="empty-state-title">Please Login to View Your Wishlist</h2>
          <p className="empty-state-description">
            Login to see your saved items and start building your wishlist
          </p>
          <Link to="/login" className="wishlist-cta-button">
            Login Now
          </Link>
        </div>
      </div>
    );
  }

  if (wishlistState.wishlistItems.length === 0) {
    return (
      <div className="wishlist-container">
        <div className="wishlist-empty">
          <img src={wishEmpty} alt="Empty wishlist" className="empty-state-image" />
          <h2 className="empty-state-title">Your Wishlist is Empty</h2>
          <p className="empty-state-description">
            Start adding games you love to your wishlist
          </p>
          <Link to="/products" className="wishlist-cta-button">
            Explore Games
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-container">
      <div className="wishlist-header">
        <h1 className="wishlist-title">
          My Wishlist <span className="wishlist-count">({wishlistState.wishlistItems.length})</span>
          <span className="wishlist-heart">❤️</span>
        </h1>
      </div>

      <div className="wishlist-grid">
        {wishlistState.wishlistItems.map((item) => (
          <div key={item._id} className="wishlist-card">
            <div className="wishlist-card-image">
              <img src={item.img} alt={item.Name} />
              <button 
                className="wishlist-remove-button"
                onClick={() => removeFromWishList(item)}
                aria-label="Remove from wishlist"
              >
                <i className="fa fa-heart"></i>
              </button>
            </div>

            <div className="wishlist-card-content">
              <h3 className="wishlist-card-title">{item.Name}</h3>
              
              <div className="wishlist-card-price">
                <span className="price-tag">-50%</span>
                <span className="original-price">₹2,999</span>
                <span className="final-price">{item.Price}</span>
              </div>

              <div className="wishlist-card-actions">
                {isInCart(item._id) ? (
                  <Link to="/Cart" className="go-to-cart-button">
                    <i className="fa fa-shopping-cart"></i>
                    View in Cart
                  </Link>
                ) : (
                  <button
                    onClick={() => addToCart(item)}
                    className="add-to-cart-button"
                  >
                    <i className="fa fa-plus"></i>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
