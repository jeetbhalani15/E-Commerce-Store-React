import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import { Navigation } from "./Components/Navigation/Navigation";
import { HomePage } from "./Pages/HomePage/HomePage";
import { ProductListing } from "./Pages/Products/ProductListing";
import { BrowerRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Cart } from "./Pages/CartWidget/Cart";
import { Wishlist } from "./Pages/Wishlist/Wishlist";
import { Login } from "./Pages/AuthWidget/Login/Login";
import { SignUp } from "./Pages/AuthWidget/SignUp/SignUp";
import { Logout } from "./Pages/AuthWidget/Logout/Logout";
import Mockman from "mockman-js";
import SingleProductPage from "./Pages/SingleProductPage/SingleProductPage";
import { ProfilePage } from "./Pages/Profile/ProfilePage";
import { ProfileInfo } from "./Pages/Profile/Components/ProfileInfo";
import { Addresses } from "./Pages/Profile/Components/Address";
import { OrderDetails } from "./Pages/Profile/Components/OrderDetails";
import { CheckOutPage } from "./Pages/Checkout/Checkout";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Wrapper components with ErrorBoundary for critical features
const SafeProductPage = () => (
  <ErrorBoundary>
    <SingleProductPage />
  </ErrorBoundary>
);

const SafeCart = () => (
  <ErrorBoundary>
    <Cart />
  </ErrorBoundary>
);

const SafeCheckout = () => (
  <ErrorBoundary>
    <CheckOutPage />
  </ErrorBoundary>
);

const SafeProfile = () => (
  <ErrorBoundary>
    <ProfilePage />
  </ErrorBoundary>
);

function App() {
  return (
    <>
      <ErrorBoundary>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Cart" element={<SafeCart />} />
          <Route path="/products/:productId" element={<SafeProductPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/mock" element={<Mockman />} />
          <Route path="/checkout" element={<SafeCheckout />} />

          <Route path="/profile/" element={<SafeProfile />}>
            <Route path="" element={<ProfileInfo />} />
            <Route path="address" element={<Addresses />} />
            <Route path="order" element={<OrderDetails />} />
          </Route>
        </Routes>
      </ErrorBoundary>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        limit={3}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        enableMultiContainer={false}
      />
    </>
  );
}

export default App;


