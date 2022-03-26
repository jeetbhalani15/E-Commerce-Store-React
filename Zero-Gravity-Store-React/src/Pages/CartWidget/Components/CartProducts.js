import { useCart } from "../../../Contexts/Cart-context";
import axios from "axios";
import { useAuth } from "../../../Contexts/Auth-context";

export function CartProducts({ product }) {
  const { cartDispatch } = useCart();
  const {authState} = useAuth();

  const removeFromCart = async (item) => {
    if (authState.token) {
      try {
        const res = await axios.delete(`/api/user/cart/${item._id}`, {
          headers: { authorization: authState.token },
        });
        cartDispatch({ type: "REMOVE_FROM_CART", payload: item });
        console.log(res);
      } catch (error) {
        alert(error);
      }
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <div className="horizontal-card flex">
        <div className="card-header">
          <img className="cart_img" src={product.img} />
          <span className="badge flex">New Release</span>
        </div>
        <div className="card-text">
          <span className="game-tag">Base Game</span>
          <h1>{product.Name}</h1>
          <p>{product.info}</p>
          <div>
            <div className="price">
              <span className="tag">-50%</span>
              <span className="line">₹2,999</span>
              <span className="bold">{product.Price}</span>
              <small className="qty-name-tag">Qty :</small>
            <div className="add-on-counter">
              <button onClick={()=> cartDispatch({type:"DECREMENT_QUANTITY" , payload : product})} className="add-on-btns">-</button>
              <span>{product.quantity}</span>
              <button onClick={()=> cartDispatch({type:"INCREMENT_QUANTITY" , payload : product})}  className="add-on-btns">+</button>
            </div>
            </div>
          </div>
          <div>
            <small>Sale ends 2/10/2022 at 9:30 PM</small>
          </div>
          <div className="action-btn">
            <button className="btn btn-solid">
              <i className="fa fa-plus-circle"></i>Move to wishlist
            </button>
            <button
              onClick={() => removeFromCart(product)}
              className="btn btn-solid"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
