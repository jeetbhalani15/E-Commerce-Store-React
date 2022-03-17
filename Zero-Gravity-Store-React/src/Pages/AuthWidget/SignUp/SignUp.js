// import "./Login.css";
import { Link } from "react-router-dom";
import logo from "../../../Asserts/Images/hero-logo.png";
export function SignUp (){
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
              <span className="pd">Sign Up with 0`Gravity Account</span>
              <div className="login-credals">
                <form action="#" method="#" className="form login">

                    <div className="form__field">
                      <label className="auth-label" for="login__username"><span className="auth-icon"><i className="fa fa-envelope"></i></span><span className="hidden">First name</span></label>
                      <input id="login__username" type="text" name="username" className="form__input log-in-input" placeholder="First name" required />
                    </div>
              
                    <div className="form__field">
                      <label className="auth-label" for="login__username"><span className="auth-icon"><i className="fa fa-envelope"></i></span><span className="hidden">Last name</span></label>
                      <input id="login__username" type="text" name="username" className="form__input log-in-input" placeholder="Last name" required />
                    </div>
              
                    <div className="form__field">
                      <label className="auth-label" for="login__username"><span className="auth-icon"><i className="fa fa-envelope"></i></span><span className="hidden">Email address</span></label>
                      <input id="login__username" type="text" name="username" className="form__input log-in-input" placeholder="Email address" required />
                    </div>
              
                    <div className="form__field">
                      <label className="auth-label" for="login__password"><span className="auth-icon"><i className="fa fa-lock"></i></span><span className="hidden">Password</span></label>
                      <input id="login__password" type="text" name="password" className="form__input log-in-input" placeholder="Password" required />
                      <i className="fa fa-eye" id="toggle"></i>
                    </div>
                    <div className="form__field">
                      <label className="auth-label" for="login__password"><span className="auth-icon"><i className="fa fa-lock"></i></span><span className="hidden">Confirm password</span></label>
                      <input id="login__password" type="text" name="password" className="form__input log-in-input" placeholder="Confirm password" required />
                      <i className="fa fa-eye" id="toggle"></i>
                    </div>
                    <div className="form__field">
                      <button className="auth-signup-btn">CREAT A ACCOUNT</button>
                     
                    </div>
              
                  </form>
              
                  <p class="text--center">Already have an Account <Link className="link" to="/Login">Login now</Link> </p>
              
                </div>
              </div>
        </div>
        </div>
        </div>
    
    );
}