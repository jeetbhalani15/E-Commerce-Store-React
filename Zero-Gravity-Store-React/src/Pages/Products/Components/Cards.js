import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Contexts/Auth-context";
import { useCart } from "../../../Contexts/Cart-context";

export function Cards({ product }) {
  const navigate = useNavigate();
  const {authState} = useAuth();
  const {cartState, cartDispatch} = useCart();

  const addToCart = async (item) => {
    console.log(authState)
    if(authState.token){
      console.log("if")
        try {
          console.log("try")
            const cartItems = await axios.post("/api/user/cart", { cart : item }, { headers : { authorization: authState.token } }); 
            cartDispatch({type : "ADD_TO_CART", payload : item });
            
        } catch (error) {
            alert(error);
        }
    }
    
    else {
        navigate("/login");
    }
     
}
  return (
    <div className="card-vertical-box flex card-border">
      <div className="vertical-card flex">
        <div className="card-top">
          <img className="card-img" src={product.img} alt="" />
        </div>
        <span className="floating-icon">
          <i className="fa fa-plus-circle bg"></i>
        </span>
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
          {cartState.cartProducts.find((item)=> item._id === product._id)
           ? ( 
             <button 
              className="go-to-cart-btn"><Link to="/Cart">Go to Cart</Link>
              </button>
              )
            : (  <button
              onClick={()=>addToCart(product)} 
              className="card-btn">Add To Cart
              </button>
              )}
             
            
            
          </div>
        </div>
      </div>
    </div>
  );
}
