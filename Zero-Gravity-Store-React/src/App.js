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

function App() {
  return (
    <>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route  path="/products" element={<ProductListing />} />
          <Route  path="/Wishlist" element={<Wishlist />} />
          <Route  path="/Cart" element={<Cart/>} />
          <Route  path="/products/:productId" element={<SingleProductPage/>} />
          <Route  path="/Login" element={<Login/>}/>
          <Route  path="/SignUp" element={<SignUp/>}/>
          <Route  path="/Logout" element={<Logout/>}/>
          <Route  path="/mock" element={<Mockman/>}/>
        </Routes>
         
    </>
  );
}

export default App;


