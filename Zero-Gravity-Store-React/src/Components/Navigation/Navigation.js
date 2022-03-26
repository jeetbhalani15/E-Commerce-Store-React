import "./Navigation.css";
import logo from "../../Asserts/Images/hero-logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFliters } from "../../Contexts/Filter-context";
import { useAuth } from "../../Contexts/Auth-context";
import { useCart } from "../../Contexts/Cart-context";

export function Navigation() {
  const { authState, authDispatch } = useAuth();
  const [search, setSearch] = useState("");
  const { dispatch } = useFliters();
  const {cartState} = useCart(); 
  useEffect(() => {
    const id = setTimeout(() => {
      dispatch({
        type: "SEARCH",
        payload: search,
      });
    }, 500);

    return () => clearTimeout(id);
  }, [dispatch, search]);

  return (
    <header>
      <div className="container">
        <div className="hero-logo">
          <div className="logo-mg">
            <img className="logo-img" src={logo} alt="logo" />
          </div>
          <div className="bg-color">
            <Link to="/">
              ZERO
              <div>GRAVITY</div>
              <small className="small-txt">Store</small>
            </Link>
          </div>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ProductListing">Shop Now</Link>
            </li>
          </ul>
        </div>
        <div className="search-bar activeSearchBa">
          <button className="search-bar-btn link-no-style" type="submit">
            <i className="fa fa-search"></i>
          </button>
          <input
            className="search-bar-input"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type to search.."
          />
        </div>
        <div className="nav-action-btn">
          <ul className="flex">
            <li className="nav-action-links">
              {authState.token === null ? (
                <Link className="icon-span" to="/Login">
                  <span className="icon">
                    <i className="fa fa-user"></i>
                  </span>
                  <span>login</span>
                </Link>
              ) : (
                <Link className="icon-span" to="/Logout">
                  <span className="icon">
                    <i className="fa fa-user"></i>
                  </span>
                  <span>Log Out</span>
                </Link>
              )}
            </li>
            <li>
              <Link className="icon-span" to="/Wishlist">
                <span className="icon">
                <i className="fa fa-heart"><span className="badge-icon">0</span></i>
                </span>
                <span>Wishlist</span>
              </Link>
            </li>
            <li>
              <Link className="icon-span" to="/Cart">
                <span className="icon">
                <i className="fa fa-shopping-cart"><span className="badge-icon cart-icon">{cartState.cartProducts.length}</span></i>
                </span>
                <span>Cart</span>
              </Link>
            </li>
            {/* <li>
                <button className="toggle-btn">
                  <i className="fa fa-moon-o mode"></i>
                  <i className="fa fa-sun-o mode"></i>
                </button>
              </li> */}
          </ul>
        </div>
        <div className="overlay"></div>
        <div className="hamburger-menu">
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
}
