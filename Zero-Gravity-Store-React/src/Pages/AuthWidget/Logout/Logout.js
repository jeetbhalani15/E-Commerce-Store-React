import { Link } from "react-router-dom";
import { Footer } from "../../../Components/Footer/Footer";
import { Navigation } from "../../../Components/Navigation/Navigation";
import "./Logout.css";
export function Logout(){
    return(
      
        <div className="big-wrapper dark">
          <Navigation />

          <main>
          <div class="landing-box">
            <section class="logout-container flex">
                <i class="fa fa-check-circle"></i>
                <p class="logout-text">You have been logged out successfully!!</p>
                <Link to="/" class="return-btn">Back to Home</Link>
            </section>
    </div>
      </main>

          <Footer />
      </div>

    );
}