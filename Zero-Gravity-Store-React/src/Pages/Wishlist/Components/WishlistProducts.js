import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Contexts/Auth-context";
import { useCart } from "../../../Contexts/Cart-context";
import { useWishlist } from "../../../Contexts/Wishlist-context";
import wishEmpty from "../../../Asserts/Images/wish-empty3.png"

export function WishlistProducts() {
  const { wishlistState, wishlistDispatch, removeFromWishList } = useWishlist();
  const { authState } = useAuth();
  const { cartState,addToCart } = useCart();
  return (
    <>
     <div className="my-wishlist">
     {wishlistState.wishlistItems.length !==0 ? (
        <>
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
        </>):(<div className="empty-cart">
            <img className="empty-cart-img" src={wishEmpty} alt="image" />
            <h1 className="wish-empty-txt">Your Wishlist is Empty ‼</h1>
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
          </div>)}
     
      


      </div>
    </>
  );
}
