import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Contexts/Auth-context";
import { useCart } from "../../../Contexts/Cart-context";
import { useWishlist } from "../../../Contexts/Wishlist-context";

export function Cards({ product }) {
  const navigate = useNavigate();
  const { authState } = useAuth();
  const { cartState, addToCart } = useCart();
  const { wishlistState, wishlistDispatch, addToWishlist } = useWishlist();
  const liked = wishlistState.wishlistItems.find(
    (item) => item._id === product._id
  );
  return (
    <div className="card-vertical-box flex card-border">
      <div className="vertical-card flex">
        <Link to={`/products/${product._id}`}><div className="card-top">
          <img className="card-img" src={product.img} alt="" />
        </div>
        </Link>

        {wishlistState.wishlistItems.find(
          (item) => item._id === product._id
        ) ? (
          <span
            onClick={() => removeFromWishlist(product)}
            className={`hearts-icon ${liked && "liked"}`}
          >
            <i className="fa fa-heart"></i>
          </span>
        ) : (
          <span
            onClick={() => addToWishlist(product)}
            className={`hearts-icon ${liked && "liked"}`}
          >
            <i className="fa fa-heart"></i>
          </span>
        )}

        <div className="card-end flex">
          <div className="card-body">{product.Name}</div>
          <div className="ratings">
            <strong>{product.ratings}⭐</strong>
          </div>
          <div className="price my">
            <span className="tag">-50%</span>
            <span className="line">₹2999</span>
            <span className="bold">₹{product.Price}</span>
          </div>
          <div className="cate" style={{ color: "white" }}>
            {product.Category}
          </div>
          <div>
            {cartState.cartProducts.find((item) => item._id === product._id) ? (
              <button className="go-to-cart-btn">
                <Link to="/Cart">Go to Cart</Link>
              </button>
            ) : (
              <button onClick={() => addToCart(product)} className="card-btn">
                Add To Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
