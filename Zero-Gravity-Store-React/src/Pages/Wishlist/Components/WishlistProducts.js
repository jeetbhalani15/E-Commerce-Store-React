import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Contexts/Auth-context";
import { useCart } from "../../../Contexts/Cart-context";
import { useWishlist } from "../../../Contexts/Wishlist-context";

export function WishlistProducts() {
  const { wishlistState, wishlistDispatch, removeFromWishList } = useWishlist();
  const { authState } = useAuth();
  const { cartState,addToCart } = useCart();
  return (
    <>
      {/* {console.log(wishlistState.wishlistItems)} */}

      <div className="my-wishlist">
        <div>
          <h1>My Wishlist ({wishlistState.wishlistItems.length})❤️ </h1>
        </div>
        <div className="wishlist-content">
          {wishlistState.wishlistItems.map((item) => (
            <div key={item._id} className="card-vertical-box flex border ">
              <div className="vertical-card flex">
                <div className="card-top">
                  <img className="card-img" src={item.img} />
                </div>
                <span className="heart-icon">
                  <i className="fa fa-heart"></i>
                </span>
                <div className="card-end flex">
                  <div className="card-body">{item.Name}</div>
                  <div className="price my">
                    <span className="tag">-50%</span>
                    <span className="line">₹2,999</span>
                    <span className="bold">{item.Price}</span>
                  </div>
                  <div>
                    {cartState.cartProducts.find(
                      (product) => product._id === item._id
                    ) ? (
                      <button className="go-to-cart-btn">
                        <Link to="/Cart">Go to Cart</Link>
                      </button>
                    ) : (
                      <button
                        onClick={() => addToCart(item)}
                        className="card-btn"
                      >
                        Add To Cart
                      </button>
                    )}
                  </div>
                  <div>
                    {" "}
                    <button
                      className="card-remove-btn"
                      onClick={() => removeFromWishList(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
