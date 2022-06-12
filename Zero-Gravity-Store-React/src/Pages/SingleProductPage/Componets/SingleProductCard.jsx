import { Link, useParams } from "react-router-dom";
import { useCart } from "../../../Contexts/Cart-context";
import { useProduct } from "../../../Contexts/Product-context";
import { useWishlist } from "../../../Contexts/Wishlist-context";
import "./SingleProductCard.css"

export const SingleProductCard = ()=>{
    const {productId} = useParams();
    const {addToCart,cartState} = useCart();
    const {addToWishlist, wishlistState} = useWishlist();
    console.log(productId)
    const {productData} = useProduct();
    const currentProduct = productData.filter((product) => product._id === productId)
    
    return(
        <div>
      { currentProduct.map((currentProduct)=>  <div className="product-detail">
            <div className="product-img">
            <img className="img-sixe"
                src={currentProduct.img}
                alt="logo"/>
            </div>
            <div className="product-data">
                <div className="product-name">
                    <h1 className="product-header-txt">{currentProduct.Name}</h1>
                </div>
                <div className="product-info">
                    <p>{currentProduct.info}</p>
                </div>
                <span className="game-tag">Base Game</span>
                <div className="price my">
                  <span className="tag">-50%</span>
                  <span className="line">₹1,999</span>
                  <span className="bold">{currentProduct.Price}</span>
                </div>
                <div><small>Sale ends 2/10/2022 at 9:30 PM</small></div>
                <div className="product-btn">

               {cartState.cartProducts.find((item) => item._id === currentProduct._id) ? (
              <button className="go-to-cart-btn">
                <Link to="/Cart">Go to Cart</Link>
              </button>
            ) : (
              <button onClick={() => addToCart(currentProduct)} className="card-btn">
                Add To Cart
              </button>
            )}


{wishlistState.wishlistItems.find(
          (item) => item._id === currentProduct._id
        ) ? (
            <div> <Link to="/Wishlist"><button className="go-to-cart-btn">Moved to Wishlist</button></Link></div>
        ) : (
            <div><button onClick={() => addToWishlist(currentProduct)} className="card-btn">Move to Wishlist</button></div>
        )}
            </div>
            </div>
        </div>
        )}
        </div>
    );
}