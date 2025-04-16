import "./Navigation.css";
import logo from "../../Asserts/Images/hero-logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`nav-header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container">
        <div className="nav-left">
          {hideMenu && (
            <button 
              className="menu-toggle"
              onClick={() => setShowFilter(!showFilter)}
              aria-label="Toggle Menu"
            >
              <i className={`fa fa-${showFilter ? 'close' : 'bars'}`}></i>
            </button>
          )}
          
          <Link to="/" className="nav-brand">
            <div className="brand-logo">
              <img src={logo} alt="Zero Gravity Store" />
            </div>
            <div className="brand-text">
              <span className="brand-name">ZERO GRAVITY</span>
              <span className="brand-subtitle">Store</span>
            </div>
          </Link>
        </div>

        <div className="nav-center">
          <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
            <Link to="/products" className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`}>
              Shop Now
            </Link>
          </div>

          {!hideSearch && (
            <div className="search-container">
              <div className="search-bar">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search games..."
                  className="search-input"
                  aria-label="Search games"
                />
                <button className="search-button" aria-label="Search">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="nav-right">
          <div className={`nav-actions ${isMobileMenuOpen ? 'active' : ''}`}>
            <div className="nav-action-item">
              {authState.token === null ? (
                <Link to="/Login" className="nav-action-link">
                  <i className="fa fa-user"></i>
                  <span>Login</span>
                </Link>
              ) : (
                <button onClick={logoutHandler} className="nav-action-link">
                  <i className="fa fa-sign-out"></i>
                  <span>Logout</span>
                </button>
              )}
            </div>

            <div className="nav-action-item">
              <Link to={authState.token ? "/Wishlist" : "/login"} className="nav-action-link">
                <div className="icon-badge">
                  <i className="fa fa-heart"></i>
                  {authState.token && wishlistState.wishlistItems.length > 0 && (
                    <span className="nav-badge">{wishlistState.wishlistItems.length}</span>
                  )}
                </div>
                <span>Wishlist</span>
              </Link>
            </div>

            <div className="nav-action-item">
              <Link to={authState.token ? "/Cart" : "/login"} className="nav-action-link">
                <div className="icon-badge">
                  <i className="fa fa-shopping-cart"></i>
                  {authState.token && cartState.cartProducts.length > 0 && (
                    <span className="nav-badge">{cartState.cartProducts.length}</span>
                  )}
                </div>
                <span>Cart</span>
              </Link>
            </div>
          </div>

          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <i className={`fa fa-${isMobileMenuOpen ? 'close' : 'bars'}`}></i>
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div 
          className="mobile-overlay" 
          onClick={toggleMobileMenu}
          role="presentation"
        ></div>
      )}
    </header>
  );
}
