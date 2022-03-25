import { Link } from "react-router-dom";
import { useAuth } from "../../../Contexts/Auth-context";
export function Cards({ product }) {
  const{authState} = useAuth();
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
          
             <Link to={authState.token === null ? "/Login" : "/cart"}>
              <button className="card-btn">Add To Cart</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
