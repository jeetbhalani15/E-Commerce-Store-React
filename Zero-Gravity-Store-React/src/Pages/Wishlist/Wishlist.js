import { Footer } from "../../Components/Footer/Footer";
import { Navigation } from "../../Components/Navigation/Navigation";
import { WishlistProducts } from "./Components/WishlistProducts";
import "./Wishlist.css";
export function Wishlist (){
    return(
        <div className="big-wrapper dark">
        <Navigation />

        <main>
      <WishlistProducts/>
       </main>

        <Footer />
    </div>

        
       
    );
}