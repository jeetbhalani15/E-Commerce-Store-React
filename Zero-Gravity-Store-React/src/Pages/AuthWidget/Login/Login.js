import "./Login.css";
import logo from "../../../Asserts/Images/hero-logo.png";
import { Link } from "react-router-dom";
export function Login (){
    return(
        <div className="html">
        <div className="background">

        <div className="login-box">
        <div className="login-content">
            <div className="auth-logo">
                <div className="logo-mg">
                  <img className="logo" src={logo} alt="logo" />
                </div>
                <div className="bg-color">
                  ZERO
                  <div>GRAVITY</div>
                  <small className="small-txt">Store</small>
                </div>
              </div>
              <span className="pd">Login with 0`Gravity Account</span>
              <div className="login-credals">
                <form action="#" method="#" className="form login">

                    <div className="form__field">
                      <label className="auth-label" for="login__username"><span className="auth-icon"><i className="fa fa-envelope"></i></span><span className="hidden">Username</span></label>
                      <input id="login__username" type="text" name="username" className="form__input log-in-input" placeholder="Email address" required />
                    </div>
              
                    <div className="form__field">
                      <label className="auth-label" for="login__password"><span className="auth-icon"><i className="fa fa-lock"></i></span><span className="hidden">Password</span></label>
                      <input id="login__password" type="text" name="password" className="form__input log-in-input" placeholder="Password" required />
                      <i className="fa fa-eye" id="toggle"></i>
                    </div>
                    <div className="form__field">
                      <button className="auth-signup-btn">LOG IN</button>
                     
                    </div>
              
                  </form>
              
                  <p className="text--center">Not a member? <Link className="link" to="/SignUp">Sign up now</Link></p>
              
                </div>
              </div>
        </div>
        </div>
        </div>
    
    );
}