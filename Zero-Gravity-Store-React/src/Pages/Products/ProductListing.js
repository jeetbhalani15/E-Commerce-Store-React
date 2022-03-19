
import { Footer } from "../../Components/Footer/Footer";
import { Navigation } from "../../Components/Navigation/Navigation";
import { Filter } from "./Components/Fliter";
import { Products } from "./Components/Products";
import "./ProductListing.css";

export function ProductListing() {
    return (
      <>
       <div className="big-wrapper dark">
          <Navigation />

          <main>
            <div className="drawer">
              <div className="drawer__nav">
                <Filter/>
                <Products/>
              </div>
            </div>
          </main>

          <Footer />
      </div>
        
          
      </>
    );
  }
  