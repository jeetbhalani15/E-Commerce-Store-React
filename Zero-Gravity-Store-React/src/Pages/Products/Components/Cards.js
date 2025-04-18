import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Contexts/Auth-context";
import { useCart } from "../../../Contexts/Cart-context";
import { useWishlist } from "../../../Contexts/Wishlist-context";
import { showSuccessToast } from "../../../utils/toastUtils";
import "./Card.css";

export function Cards({ product }) {
  const navigate = useNavigate();
  const { authState } = useAuth();
  const { cartState, addToCart } = useCart();
  const { wishlistState, wishlistDispatch, addToWishlist, removeFromWishlist } = useWishlist();
  
  const isInWishlist = wishlistState.wishlistItems.find(
    (item) => item._id === product._id
  );
  
  const isInCart = cartState.cartProducts.find(
    (item) => item._id === product._id
  );

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      removeFromWishlist(product);
      showSuccessToast("Removed from wishlist");
    } else {
      addToWishlist(product);
      showSuccessToast("Added to wishlist");
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
    showSuccessToast("Added to cart");
  };

  const calculatePrices = () => {
    const originalPrice = product.originalPrice || 2999;
    const finalPrice = product.Price;
    const discount = Math.round(((originalPrice - finalPrice) / originalPrice) * 100);
    return { originalPrice, finalPrice, discount };
  };

  const { originalPrice, finalPrice, discount } = calculatePrices();

  return (
    <div className="game-card">
      <div className="game-card-content">
        <Link to={`/products/${product._id}`} className="game-image-container">
          <img className="game-image" src={product.img} alt={product.Name} loading="lazy" />
          <div className="game-overlay">
            <span className="view-details">View Details</span>
          </div>
        </Link>

        <button 
          onClick={handleWishlistToggle}
          className={`wishlist-button ${isInWishlist ? 'active' : ''}`}
          aria-label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <i className="fa fa-heart"></i>
        </button>

        <div className="game-info">
          <h3 className="game-title">{product.Name}</h3>
          
          <div className="game-meta">
            <span className="game-rating">
              <i className="fa fa-star"></i>
              {product.ratings}
            </span>
            <span className="game-category">{product.Category}</span>
          </div>

          <div className="game-pricing">
            <div className={`price-tag ${product.isNewPrice ? 'new-price' : ''}`}>
              {discount > 0 && (
                <span className="discount-badge">
                  {discount}%
                </span>
              )}
              <div className="price-wrapper">
                {discount > 0 && (
                  <span className="original-price">₹{originalPrice}</span>
                )}
                <span className="final-price">{finalPrice}</span>
              </div>
            </div>
          </div>

          {isInCart ? (
            <Link to="/Cart" className="cart-button in-cart">
              <i className="fa fa-shopping-cart"></i>
              View in Cart
            </Link>
          ) : (
            <button onClick={handleAddToCart} className="cart-button">
              <i className="fa fa-plus"></i>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
