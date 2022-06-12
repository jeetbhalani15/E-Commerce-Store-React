import "./Navigation.css";
import logo from "../../Asserts/Images/hero-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFliters } from "../../Contexts/Filter-context";
import { useAuth } from "../../Contexts/Auth-context";
import { useCart } from "../../Contexts/Cart-context";
import { useWishlist } from "../../Contexts/Wishlist-context";

export function Navigation({ hideSearch, hideMenu }) {
  const { authState, authDispatch } = useAuth();
  const [search, setSearch] = useState("");
  const { dispatch } = useFliters();
  const { cartState } = useCart();
  const { wishlistState } = useWishlist();
  const { setShowFilter, showFilter } = useFliters();
  const navigate = useNavigate();


  // useeffect debounce search
  useEffect(() => {
    const id = setTimeout(() => {
      dispatch({
        type: "SEARCH",
        payload: search,
      });
    }, 500);

    return () => clearTimeout(id);
  }, [dispatch, search]);

  const logoutHandler = () => {
    authDispatch({ type: "LOG_OUT" });
    navigate("/logout");
  };

  
  return (
    <header>
      <div className="container">
        {hideMenu &&
          (showFilter ? (
            <div onClick={() => setShowFilter(false)} className="menu">
              <i className="fa fa-close"></i>
            </div>
          ) : (
            <div onClick={() => setShowFilter(true)} className="menu">
              <i className="fa fa-bars"></i>
            </div>
          ))}
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
        {true && (
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
        )}
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
                <>
                  <div className="icon-span" onClick={() => logoutHandler()}>
                    <span className="icon">
                      <i className="fa fa-user"></i>
                    </span>
                    <span className="logout-btn">Log Out</span>
                  </div>
                </>
              )}
            </li>
            <li>
              {authState.token ? (
                <Link className="icon-span" to="/Wishlist">
                  <span className="icon">
                    <i className="fa fa-heart">
                      <span
                        style={{
                          display:
                            authState.token &&
                            wishlistState.wishlistItems.length !== 0
                              ? "block"
                              : "none",
                        }}
                        className="badge-icon"
                      >
                        {wishlistState.wishlistItems.length}
                      </span>
                    </i>
                  </span>
                  <span>Wishlist</span>
                </Link>
              ) : (
                <Link className="icon-span" to="/login">
                  <span className="icon">
                    <i className="fa fa-heart">
                      <span
                        style={{
                          display:
                            authState.token &&
                            wishlistState.wishlistItems.length !== 0
                              ? "block"
                              : "none",
                        }}
                        className="badge-icon"
                      >
                        {wishlistState.wishlistItems.length}
                      </span>
                    </i>
                  </span>
                  <span>Wishlist</span>
                </Link>
              )}
            </li>
            <li>
              {authState.token ? (
                <Link className="icon-span" to="/Cart">
                  <span className="icon">
                    <i className="fa fa-shopping-cart">
                      <span
                        style={{
                          display:
                            authState.token &&
                            cartState.cartProducts.length !== 0
                              ? "block"
                              : "none",
                        }}
                        className="badge-icon cart-icon"
                      >
                        {cartState.cartProducts.length}
                      </span>
                    </i>
                  </span>
                  <span>Cart</span>
                </Link>
              ) : (
                <Link className="icon-span" to="/login">
                  <span className="icon">
                    <i className="fa fa-shopping-cart">
                      <span
                        style={{
                          display:
                            authState.token &&
                            cartState.cartProducts.length !== 0
                              ? "block"
                              : "none",
                        }}
                        className="badge-icon cart-icon"
                      >
                        {cartState.cartProducts.length}
                      </span>
                    </i>
                  </span>
                  <span>Cart</span>
                </Link>
              )}
            </li>
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
